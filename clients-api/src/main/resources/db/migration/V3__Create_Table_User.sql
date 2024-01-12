CREATE TABLE tb_user (
  id BIGINT AUTO_INCREMENT NOT NULL,
   username VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   is_account_non_expired BIT NULL,
   is_account_non_locked BIT NULL,
   is_credentials_non_expired BIT NULL,
   is_enabled BIT NULL,
   CONSTRAINT pk_tb_user PRIMARY KEY (id)
);

ALTER TABLE tb_user ADD CONSTRAINT uc_tb_user_email UNIQUE (email);

ALTER TABLE tb_user ADD CONSTRAINT uc_tb_user_username UNIQUE (username);