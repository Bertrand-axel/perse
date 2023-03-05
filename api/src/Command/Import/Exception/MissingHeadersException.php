<?php

namespace App\Command\Import\Exception;

use Throwable;

class MissingHeadersException extends ImportException
{
    public function __construct(array $headers, int $code = 0, ?Throwable $previous = null)
    {
        parent::__construct(
            sprintf('the following headers are missing : %s', implode(',', $headers)),
            $code,
            $previous
        );
    }

}
