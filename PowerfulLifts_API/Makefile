deploy: public/build/manifest.json
	rsync -avz public/build infomaniak:~/sites/powerfullifts.com/public
	ssh infomaniak 'cd ~/sites/powerfullifts.com && git pull origin dev && make install'

install: vendor/autoload.php .env public/storage
	php artisan cache:clear
	php artisan migrate

.env:
	cp .env.example
	php artisan key:generate

public/storage:
	php artisan storage:link

vendor/autoload.php: composer.lock
	composer install
	touch vendor/autoload.php

public/build/manifest.json: package.json
	npm i
	npm run build
