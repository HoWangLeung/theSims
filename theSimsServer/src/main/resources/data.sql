INSERT INTO roles (name) VALUES ('CUSTOMER');
INSERT INTO roles (name) VALUES ('CREATOR');
INSERT INTO roles (name) VALUES ('EDITOR');
INSERT INTO roles (name) VALUES ('ADMIN');


INSERT INTO users(USERNAME,PASSWORD, ENABLED,firstname,lastname,phone_number,address_building,address_block,address_floor, address_flat )
values('derek1','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1 , 'Derek','Leung','92591883','ABC Building','Block A', '20','E');
INSERT INTO users(USERNAME,PASSWORD, ENABLED,firstname,lastname,phone_number,address_building,address_block,address_floor, address_flat )
values('derek2','$2a$10$Z4.xKrMGoiqv08YR6x4ieOQdHD5CEJgCdaaVH2cYS77qw4qg1qQD.',1 , 'Derek2','Leung2','92591883','ABC Building','Block A', '20','E');



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


INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Cameo Apple','USA',  5,35,200
,'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' ,3); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Empire Apple','USA',  3,15, 65,
'https://images.unsplash.com/photo-1605693739596-997481de7c46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 3); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Gala Apple','USA',  11,10, 125
, 'https://images.unsplash.com/photo-1568579029378-d2cc4074f57c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Fuji Apple','USA',  12,40, 328,
'https://images.unsplash.com/photo-1576359717253-70abe0accded?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGFwcGxlfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('McIntosh Apple','USA',  9, 50,825,
'https://images.unsplash.com/photo-1507079304010-f59bbb70a377?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', 3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Golden Delicious Apple','USA',  5,10, 290,
'https://images.unsplash.com/photo-1508431800532-da5486c45537?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUzfHxhcHBsZXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',3);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Golden Bananna','USA',  7,10, 25
,'https://firebasestorage.googleapis.com/v0/b/reactspringbootorder.appspot.com/o/images%2Fproducts%2FBanana%2Fanastasia-eremina-qSxKDzhkgvI-unsplash.jpg?alt=media&token=21c577b3-4fc1-423c-9cdb-bb66d2032ad2', 4);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Queen  Pineapple','Mexico',  8,10, 500
,'https://images.unsplash.com/photo-1439059913849-d6eb99f86db2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80', 7);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Scotland Strawberry','Mexico',  15,10, 200
,'https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1442&q=80', 9);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('AllSweet  Watermelon','Mexico',  15,10, 250
,'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80', 10);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Golden Kiwi','Japan', 5, 20,125
,'https://www.theblackpeppercorn.com/wp-content/uploads/2013/03/golden-kiwi-4x3c-2.jpg', 11); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Kiwi','Japan', 5,20, 125
,'https://images.unsplash.com/photo-1542400935-70190c63c242?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGtpd2l8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 11); 


INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Tangerine','Australia',  25,35, 325
,'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZ2VyaW5lfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',5);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Clementine','Australia',  25,20, 325
,'https://images.unsplash.com/photo-1590284635836-dc0f237b74d9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG9yYW5nZXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=800&q=60', 5); 
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Bergamot Orange','Australia',  25, 10,325
,'https://riviste.newbusinessmedia.it/wp-content/uploads/sites/27/2013/12/Fotolia_11313277_M.jpg', 5);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Cavendish Tangelo','Japan',  35,5, 425
,'https://images.unsplash.com/photo-1605693740032-a99bdd19c8fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG9yYW5nZXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=800&q=60', 5); 


INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Eureka  Lemon', 'United Kingdom', 45,35,525
,'https://images.unsplash.com/photo-1587324467890-b8a15d78c078?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 6);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING,PRODUCT_URL, CATEGORY_ID) VALUES ('Pink Variegated Lemon', 'United Kingdom', 45,20,525
,'https://images.unsplash.com/photo-1527614853535-bc948bbb3e5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGxlbW9ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 6);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Lisbon Lemon', 'United Kingdom', 45,10,525
,'https://images.unsplash.com/photo-1554884133-995b1e4c1645?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxlbW9ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 6);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Verna Lemon', 'United Kingdom', 45,20,525
,'https://images.unsplash.com/photo-1552914953-938eef0ce926?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGxlbW9ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 6);

INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('CABERNET SAUVIGNON', 'Japan', 45,20,525
,'https://images.unsplash.com/photo-1561815582-3925313e6add?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 8);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('PINOT NOIR', 'Japan', 45,20,525
,'https://images.unsplash.com/photo-1595938688117-8af7b8da9fca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGVzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 8);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST,BASE_PRICE, REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('MUSCADINE GRAPES', 'Japan', 45,20,525
,'https://images.unsplash.com/photo-1598182860315-5112e61ccf91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBlc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 8);
INSERT INTO product (PRODUCT_NAME,COUNTRY_ORIGIN, COST, BASE_PRICE,REMAINING, PRODUCT_URL,CATEGORY_ID) VALUES ('Shine Muscat', 'Japan', 45,20,525
,'https://images.unsplash.com/photo-1516876319496-d5a849a2e89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGVzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 8);

--INSERT INTO orders(id,created_date, status,total,users_id)
--values (10001,SYSDATE(),'confirmed',150,1);
--
--INSERT INTO orders(id,created_date, status,total,users_id)
--values (20001,SYSDATE(),'confirmed',350,1);
--INSERT INTO orders(id,created_date, status,total,users_id)
--values (30001,SYSDATE(),'pending',350,1);
--
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (30001,20,3,150,10001,1);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (40001,20,6,150,10001,2);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (50001,20,9,150,10001,5);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (60001,20,12,150,10001,15);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (70001,20,15,150,10001,21);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (80001,20,18,150,10001,16);
--
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (30002,20,1,150,20001,1);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (40002,20,15,150,20001,2);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (50002,20,25,150,20001,5);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (60002,20,35,150,20001,15);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (70002,20,45,150,20001,21);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (80002,20,55,150,20001,16);
--INSERT INTO orders_product(id,final_price,quantity,sub_total, orders_id,product_id)
--values (90002,20,55,150,30001,16);





