access to the project http://perse.localhost

how to run :
- (cd angular && npm ci)
- (cd symfony && composer install)
- docker compose up -d
- docker compose exec symfony bin/console doctrine:schema:create

open a bash in the symfony container : 
- docker compose run symfony bash

from there you can run any symfony or composer command :
- bin/console app:import:groups test.xlsx
