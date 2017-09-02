CREATE DATABASE IF NOT EXISTS wings_db;
USE wings_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS wings_db;

# Create the burgers table
CREATE TABLE wings (
id int NOT NULL AUTO_INCREMENT,
wings_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);