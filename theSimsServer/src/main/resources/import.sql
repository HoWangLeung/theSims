INSERT INTO Department(NAME,DESCRIPTION) values('Marketing','Branding for the company');
INSERT INTO Department(NAME,DESCRIPTION) values('Information Technology','IT related');
INSERT INTO Department(NAME,DESCRIPTION) values('Human Resource','Recruitment and Benefit');
INSERT INTO Department(NAME,DESCRIPTION) values('Finance','Capital Management');

INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('superDerek','Leung','SuperProgrammer',1,'xxx building, HK' ,2);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('TOM','Tong','SuperProgrammer',0,'xxx building, HK',1);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('JAY','Leung','SuperProgrammer',0,'xxx building, HK',3);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('derek','Fang','SuperProgrammer',0,'xxx building, HK',1);



INSERT INTO roles (name) VALUES ('USER');
INSERT INTO roles (name) VALUES ('CREATOR');
INSERT INTO roles (name) VALUES ('EDITOR');
INSERT INTO roles (name) VALUES ('ADMIN');



INSERT INTO users(USERNAME,PASSWORD, ENABLED) values('derek1','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1);
INSERT INTO users(USERNAME,PASSWORD,ENABLED) values('derek2','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1);






INSERT INTO users_roles (user_id, role_id) VALUES (1, 1); 
INSERT INTO users_roles (user_id, role_id) VALUES (2, 4); 