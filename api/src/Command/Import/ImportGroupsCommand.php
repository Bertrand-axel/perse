<?php

namespace App\Command\Import;

use App\Command\Import\Exception\ImportException;
use App\Command\Import\Exception\MissingHeadersException;
use App\Entity\Group;
use App\Repository\GroupRepository;
use App\Service\Stream\Input\SpreadsheetReader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[AsCommand(
    name: 'app:import:groups',
    description: 'Add a short description for your command',
)]
class ImportGroupsCommand extends Command
{
    private const HEADERS = [
        'Nom du groupe',
        'Origine',
        'Ville',
        'Année début',
        'Année séparation',
        'Fondateurs',
        'Membres',
        'Courant musical',
        'Présentation',
    ];
    private SymfonyStyle $io;
    private ValidatorInterface $validator;
    private EntityManagerInterface $entityManager;

    public function __construct(ValidatorInterface $validator, EntityManagerInterface $entityManager)
    {
        parent::__construct();
        $this->validator = $validator;
        $this->entityManager = $entityManager;
    }

    protected function configure(): void
    {
        $this
            ->addArgument('source', InputArgument::REQUIRED, 'file name from which we will read')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'don\'t actually import')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->io = new SymfonyStyle($input, $output);
        $reader = new SpreadsheetReader($input->getArgument('source'));

        try {
            $this->validateHeaders($reader->getHeaders());
            foreach ($reader->read() as $row => $data) {
                $this->importRow($data);
            }

            if (!$input->getOption('dry-run')) {
                $this->entityManager->flush();
            }
        } catch (ImportException|ORMException $e) {
            $this->io->warning($e->getMessage());

            if ($e instanceof MissingHeadersException) {
                $this->io->error('can\'t continue the import');

                return Command::FAILURE;
            }
        }

        $this->io->success('Finished importing');

        return Command::SUCCESS;
    }

    /**
     * @throws ImportException
     */
    private function validateHeaders(array $headers)
    {
        $diff = array_diff(self::HEADERS, $headers);
        if (count($diff)) {
            throw new MissingHeadersException($diff);
        }
    }

    /**
     * @throws ImportException
     * @throws ORMException
     */
    private function importRow(mixed $data): void
    {
        $group = new Group();
        $group
            ->setName($data['Nom du groupe'])
            ->setOrigin(trim($data['Origine']))
            ->setTown($data['Ville'])
            ->setStartingYear($data['Année début'])
            ->setSeparationYear($data['Année séparation'])
            ->setFounder($data['Fondateurs'])
            ->setMembers($data['Membres'])
            ->setMusicalCurrent($data['Courant musical'])
            ->setPresentation($data['Présentation']);

        $errors = $this->validator->validate($group);
        if ($errors->count() !== 0) {
            throw new ImportException((string) $errors);
        }

        $this->entityManager->persist($group);
    }
}
