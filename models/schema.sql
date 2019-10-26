DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

CREATE TABLE example
(
  name VARCHAR(20),
  owner VARCHAR(20),
  species VARCHAR(20),
  sex CHAR(1),
  birth DATE,
  death DATE
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

