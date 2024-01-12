CREATE TABLE user_role (
  role_id BIGINT NULL,
   user_id BIGINT NOT NULL,
   CONSTRAINT pk_user_role PRIMARY KEY (user_id)
);