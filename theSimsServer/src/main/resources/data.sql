INSERT INTO roles (name) VALUES ('CUSTOMER');
INSERT INTO roles (name) VALUES ('CREATOR');
INSERT INTO roles (name) VALUES ('EDITOR');
INSERT INTO roles (name) VALUES ('ADMIN');


INSERT INTO users(USERNAME,PASSWORD, ENABLED) values('derek1','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1);
INSERT INTO users(USERNAME,PASSWORD,ENABLED) values('derek2','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1);



INSERT INTO department(NAME,DESCRIPTION) values('Marketing','Branding for the company');
INSERT INTO department(NAME,DESCRIPTION) values('Information Technology','IT related');
INSERT INTO department(NAME,DESCRIPTION) values('Human Resource','Recruitment and Benefit');
INSERT INTO department(NAME,DESCRIPTION) values('Finance','Capital Management');

INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Lux','Leung','Business Analyst',0,'xxx building, HK' ,2, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Braum','Leung','Programmer',0,'xxx building, HK' ,2, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Ryze','Leung','Programmer',0,'xxx building, HK' ,2, sysdate(), sysdate());

INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Ezreal','Leung','Head',1,'xxx building, HK' ,1, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Nicho','Leung','Head',1,'xxx building, HK' ,2, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Zed','Leung','Head',1,'xxx building, HK' ,3, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Mike','Leung','Head',1,'xxx building, HK' ,4, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Tom','Tong','Account Executive',0,'xxx building, HK',1, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Jack','Lee','HR Officer',0,'xxx building, HK',3, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Jay','Max','HR Assistant',0,'xxx building, HK',3, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Jayce','Tsui','HR Officer',0,'xxx building, HK',3, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Mike','Fang','Financial Analyst',0,'xxx building, HK',4, sysdate(), sysdate());
INSERT INTO employee(FIRST_NAME,LAST_NAME, ROLE,IS_MANAGEMENT,ADDRESS, DEPARTMENT_ID,CREATED_DATE,LAST_UPDATED_DATE) 
values('Fred','Foo','Financial Planner',0,'xxx building, HK',4, sysdate(), sysdate());





INSERT INTO users_roles (user_id, role_id) VALUES (1, 1); 
INSERT INTO users_roles (user_id, role_id) VALUES (2, 4); 



INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Food',0); 
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Fruit',1);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Apple',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Bananna',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Orange',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Lemon',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('PineApple',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Grapes',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Berries',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Melons',2);
INSERT INTO category (name,PARENT_CATEGORY_ID) VALUES ('Kiwi',2);


INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Cameo Apple','USA',  15,25,225, 3); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Empire Apple','USA',  15,20, 225, 3); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Gala Apple','USA',  15,30, 225, 3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Fuji Apple','USA',  15,20, 225, 3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('McIntosh Apple','USA',  15, 20,225, 3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Golden Delicious Apple','USA',  15,20, 225, 3);

INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Golden Kiwi','Japan', 5, 20,125, 11); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Kiwi','Japan', 5,20, 125, 11); 


INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Tangerine','Australia',  25,20, 325, 5);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Clementine','Australia',  25,20, 325, 5); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Bergamot Orange','Australia',  25, 20,325, 5);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Cavendish Tangelo','Japan',  35,20, 425, 5); 


INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Eureka  Lemon', 'United Kingdom', 45,20,525, 6);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Pink Variegated Lemon', 'United Kingdom', 45,20,525, 6);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('Lisbon Lemon', 'United Kingdom', 45,20,525, 6);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Verna Lemon', 'United Kingdom', 45,20,525, 6);

INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('CABERNET SAUVIGNON', 'Japan', 45,20,525, 8);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('PINOT NOIR', 'Japan', 45,20,525, 8);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, CATEGORY_ID) VALUES ('MUSCADINE GRAPES', 'Japan', 45,20,525, 8);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, CATEGORY_ID) VALUES ('Shine Muscat', 'Japan', 45,20,525, 8);


--INSERT INTO orders(STATUS, USERS_ID)VALUES('pending',1);
----INSERT INTO orders(STATUS,USERS_ID)VALUES('pending',2);
--
--INSERT INTO orders_product(quantity, orders_id, product_id)VALUES(80,1,15);
--INSERT INTO orders_product(quantity, orders_id, product_id)VALUES(55,1,18);
--INSERT INTO orders_product(quantity, orders_id, product_id)VALUES(78,2,12);
--
--
--INSERT INTO ordered_product_detail(ordered_product_id, ordered_product_name, ordered_product_price, orders_id)VALUES(4,'Fuji Apple',20, 2);
--INSERT INTO ordered_product_detail(ordered_product_id, ordered_product_name, ordered_product_price, orders_id)VALUES(9,'Tangerine',20,2);
