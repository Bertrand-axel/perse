<?php

namespace App\Service\Stream\Input;

interface ReaderInterface
{
    /**
     * @return iterable<mixed>
     */
    public function read(): iterable;

}
