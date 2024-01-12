CREATE TABLE tb_user (
  id BIGINT AUTO_INCREMENT NOT NULL,
   username VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   is_account_non_expired BIT(1) NULL,
   is_account_non_locked BIT(1) NULL,
   is_credentials_non_expired BIT(1) NULL,
   is_enabled BIT(1) NULL,
   CONSTRAINT pk_tb_user PRIMARY KEY (id)
);

ALTER TABLE tb_user ADD CONSTRAINT uc_tb_user_email UNIQUE (email);

ALTER TABLE tb_user ADD CONSTRAINT uc_tb_user_username UNIQUE (username);

ALTER TABLE user_role ADD CONSTRAINT fk_user_role_on_role FOREIGN KEY (role_id) REFERENCES `role` (id);

ALTER TABLE user_role ADD CONSTRAINT fk_user_role_on_user FOREIGN KEY (user_id) REFERENCES tb_user (id);