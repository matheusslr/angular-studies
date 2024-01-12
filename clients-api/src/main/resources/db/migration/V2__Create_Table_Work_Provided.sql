CREATE TABLE work_provided (
  id BIGINT AUTO_INCREMENT NOT NULL,
   `description` VARCHAR(150) NOT NULL,
   client_id BIGINT NULL,
   price DECIMAL NULL,
   date date NULL,
   CONSTRAINT pk_workprovided PRIMARY KEY (id)
);

ALTER TABLE work_provided ADD CONSTRAINT FK_WORKPROVIDED_ON_CLIENT FOREIGN KEY (client_id) REFERENCES client (id);