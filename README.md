

mysql -u root -h localhost -P 3306 information_schema -p
mysql -u myuser -h localhost -P 3306 students -p
GRANT ALL PRIVILEGES ON students.* TO 'myuser'@'localhost';

ALTER USER 'myuser'@'localhost' IDENTIFIED BY 'P@ssw0rd';


CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'P@ssw0rd';


ALTER USER 'myuser'@'%' IDENTIFIED WITH mysql_native_password BY 'P@ssw0rd';

GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'localhost' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON * . * TO 'myuser'@'localhost';# final-project-devops
