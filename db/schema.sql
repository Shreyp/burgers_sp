CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
  b_id INT NOT NULL AUTO_INCREMENT, 
  burger_name VARCHAR(255), 
  devoured BOOLEAN, 
  date_d TIMESTAMP
);
