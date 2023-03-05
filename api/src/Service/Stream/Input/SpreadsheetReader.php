<?php

namespace App\Service\Stream\Input;

use PhpOffice\PhpSpreadsheet\Reader\Xlsx;

class SpreadsheetReader implements ReaderInterface
{
    private string $filepath;
    private bool $loaded = false;
    private array $data;
    private array $headers;

    public function __construct(string $filepath)
    {
        $this->filepath = $filepath;
    }

    private function ensureLoaded(): void
    {
        if ($this->loaded) {
            return;
        }

        $this->loaded = true;
        $data = (new Xlsx())->load($this->filepath)->getSheet(0)->toArray();
        $this->headers = array_map(static fn($v) => (string) $v, $data[0]);
        unset($data[0]);
        $this->data = $data;
    }

    public function getHeaders(): array
    {
        $this->ensureLoaded();
        return $this->headers;
    }

    /**
     * @return iterable<array>
     */
    public function read(): iterable
    {
        $this->ensureLoaded();

        $size = count($this->headers);
        $filler = array_fill(0, count($this->headers), null);
        foreach ($this->data as $rowId => $datum) {
            yield $rowId => array_combine($this->headers, array_slice($datum + $filler, 0, $size));
        }
    }
}
