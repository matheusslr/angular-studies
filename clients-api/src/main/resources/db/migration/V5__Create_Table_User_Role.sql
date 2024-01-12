CREATE TABLE user_role (
   role_id BIGINT NULL,
   user_id BIGINT NOT NULL,
   CONSTRAINT pk_user_role PRIMARY KEY (user_id)
);

ALTER TABLE user_role ADD CONSTRAINT fk_user_role_on_role FOREIGN KEY (role_id) REFERENCES `role` (id);

ALTER TABLE user_role ADD CONSTRAINT fk_user_role_on_user FOREIGN KEY (user_id) REFERENCES tb_user (id);