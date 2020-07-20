docker pull mysql:8.0.1
docker run --name db_kk -e MYSQL_ROOT_PASSWORD=kartketpwd -d mysql:8.0.1

docker pull phpmyadmin/phpmyadmin:latest

docker run --name db_kk_admin -d --link db_kk:db -p 8081:80 phpmyadmin/phpmyadmin
