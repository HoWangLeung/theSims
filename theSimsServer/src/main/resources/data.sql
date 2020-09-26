INSERT INTO roles (name) VALUES ('USER');
INSERT INTO roles (name) VALUES ('CREATOR');
INSERT INTO roles (name) VALUES ('EDITOR');
INSERT INTO roles (name) VALUES ('ADMIN');


INSERT INTO users(USERNAME,PASSWORD, ENABLED) values('derek1','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1);
INSERT INTO users(USERNAME,PASSWORD,ENABLED) values('derek2','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1);



INSERT INTO department(NAME,DESCRIPTION) values('Marketing','Branding for the company');
INSERT INTO department(NAME,DESCRIPTION) values('Information Technology','IT related');
INSERT INTO department(NAME,DESCRIPTION) values('Human Resource','Recruitment and Benefit');
INSERT INTO department(NAME,DESCRIPTION) values('Finance','Capital Management');

INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Lux','Leung','Business Analyst',0,'xxx building, HK' ,2);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Braum','Leung','Programmer',0,'xxx building, HK' ,2);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Ryze','Leung','Programmer',0,'xxx building, HK' ,2);

INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Ezreal','Leung','Head',1,'xxx building, HK' ,1);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Nicho','Leung','Head',1,'xxx building, HK' ,2);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Zed','Leung','Head',1,'xxx building, HK' ,3);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Mike','Leung','Head',1,'xxx building, HK' ,4);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Tom','Tong','Account Executive',0,'xxx building, HK',1);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Jack','Lee','HR Officer',0,'xxx building, HK',3);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Jay','Max','HR Assistant',0,'xxx building, HK',3);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Jayce','Tsui','HR Officer',0,'xxx building, HK',3);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Mike','Fang','Financial Analyst',0,'xxx building, HK',4);
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID) values('Fred','Foo','Financial Planner',0,'xxx building, HK',4);





INSERT INTO users_roles (user_id, role_id) VALUES (1, 1); 
INSERT INTO users_roles (user_id, role_id) VALUES (2, 4); 


INSERT INTO category (name) VALUES ('Fruits'); 
INSERT INTO products (PRODUCT_NAME, COST, REMAINING, CATEGORY_ID) VALUES ('Kiwi', 5, 125, 1); 
INSERT INTO products (PRODUCT_NAME, COST, REMAINING, CATEGORY_ID) VALUES ('Apple', 15, 225, 1); 
INSERT INTO products (PRODUCT_NAME, COST, REMAINING, CATEGORY_ID) VALUES ('Orange', 25, 325, 1); 
INSERT INTO products (PRODUCT_NAME, COST, REMAINING, CATEGORY_ID) VALUES ('Bananna', 35, 425, 1); 
INSERT INTO products (PRODUCT_NAME, COST, REMAINING, CATEGORY_ID) VALUES ('Pineapple', 45,525, 1);
