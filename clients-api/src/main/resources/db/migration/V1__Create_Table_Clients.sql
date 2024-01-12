CREATE TABLE client (
  id BIGINT AUTO_INCREMENT NOT NULL,
   name VARCHAR(150) NOT NULL,
   cpf VARCHAR(11) NOT NULL,
   registration_date date NULL,
   CONSTRAINT pk_client PRIMARY KEY (id)
);