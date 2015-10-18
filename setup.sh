#!/bin/sh

open /Applications/Safari.app http://localhost:8686/
php -S 0.0.0.0:8686 ./router.php  

