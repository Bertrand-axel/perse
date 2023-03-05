<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\GroupRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GroupRepository::class)]
#[ORM\Table(name: '`group`')]
#[ApiResource]
class Group
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $origin = null;

    #[ORM\Column(length: 255)]
    private ?string $town = null;

    #[ORM\Column]
    private ?int $startingYear = null;

    #[ORM\Column(nullable: true)]
    private ?int $separationYear = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $founder = null;

    #[ORM\Column(nullable: true)]
    private ?int $members = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $musicalCurrent = null;

    #[ORM\Column(length: 2500, nullable: true)]
    private ?string $presentation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getOrigin(): ?string
    {
        return $this->origin;
    }

    public function setOrigin(string $origin): self
    {
        $this->origin = $origin;

        return $this;
    }

    public function getTown(): ?string
    {
        return $this->town;
    }

    public function setTown(string $town): self
    {
        $this->town = $town;

        return $this;
    }

    public function getStartingYear(): ?int
    {
        return $this->startingYear;
    }

    public function setStartingYear(int $startingYear): self
    {
        $this->startingYear = $startingYear;

        return $this;
    }

    public function getSeparationYear(): ?int
    {
        return $this->separationYear;
    }

    public function setSeparationYear(?int $separationYear): self
    {
        $this->separationYear = $separationYear;

        return $this;
    }

    public function getFounder(): ?string
    {
        return $this->founder;
    }

    public function setFounder(?string $founder): self
    {
        $this->founder = $founder;

        return $this;
    }

    public function getMembers(): ?int
    {
        return $this->members;
    }

    public function setMembers(?int $members): self
    {
        $this->members = $members;

        return $this;
    }

    public function getMusicalCurrent(): ?string
    {
        return $this->musicalCurrent;
    }

    public function setMusicalCurrent(?string $musicalCurrent): self
    {
        $this->musicalCurrent = $musicalCurrent;

        return $this;
    }

    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    public function setPresentation(?string $presentation): self
    {
        $this->presentation = $presentation;

        return $this;
    }
}
