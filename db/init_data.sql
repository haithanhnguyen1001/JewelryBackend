SET @@global.time_zone = '+00:00';


-- unit
insert into units (id, Name, createdAt, updatedAt) values ('uu01', "Cái", now(), now());
insert into units (id, Name, createdAt, updatedAt) values ('uu02', "Đôi", now(), now());
insert into units (id, Name, createdAt, updatedAt) values ('uu03', "Chỉ", now(), now());


-- PRODUCTTYPES
INSERT INTO PRODUCTTYPES (id, Name, Unit, Interest, createdAt, updatedAt, UnitId)
VALUES ('3265fa78-c22d-4448-9d79-6af9c96c1542', 'Dây chuyền', 'Cái', 5, now(), now(), 'uu01');

INSERT INTO PRODUCTTYPES (id, Name, Unit, Interest, createdAt, updatedAt, UnitId)
VALUES ('cd520895-36ee-46f4-8773-6d7c20b0716b', 'Nhẫn', 'Cái', 3, now(), now(), 'uu01');

INSERT INTO PRODUCTTYPES (id, Name, Unit, Interest, createdAt, updatedAt, UnitId)
VALUES ('52ba56e4-856d-48e8-b070-dfffbc424100', 'Bông tai', 'Cặp', 3, now(), now(), 'uu02');

INSERT INTO PRODUCTTYPES (id, Name, Unit, Interest, createdAt, updatedAt, UnitId)
VALUES ('c3bccd70-ee4e-494a-8c64-6d7761aee58d', 'Thỏi vàng', 'Chỉ', 4, now(), now(), 'uu03');

INSERT INTO PRODUCTTYPES (id, Name, Unit, Interest, createdAt, updatedAt, UnitId)
VALUES ('0b38ed7d-796b-47ab-9809-55de707727a5', 'Đồng hồ', 'Cái', 2, now(), now(), 'uu01');

-- PRODUCTS
INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('de8ac38b-b8fd-4032-a5b9-4bd0daca6d57', 'Dây chuyền vàng 24K', '3265fa78-c22d-4448-9d79-6af9c96c1542', 15257000, 298, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('30b2c797-20fd-4716-be5c-782841b3d006', 'Nhẫn vàng 24K', 'cd520895-36ee-46f4-8773-6d7c20b0716b', 11831000, 248, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('a7c28aea-35fa-475d-8795-fa689dd71b6b', 'Bông tai vàng 24K', '52ba56e4-856d-48e8-b070-dfffbc424100', 7766000, 179, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('82c8667a-a66d-42b1-aa5e-67322f84038c', 'Thỏi vàng 24K', 'c3bccd70-ee4e-494a-8c64-6d7761aee58d', 1523700000, 18, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('a4d92ad3-404f-4081-8e69-7fe81d53a468', 'Dây chuyền vàng 22K', '3265fa78-c22d-4448-9d79-6af9c96c1542', 9345000, 225, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('65dd27e8-41b6-46fa-8ab3-8317a0a495b8', 'Bông tai vàng 22K', '52ba56e4-856d-48e8-b070-dfffbc424100', 5632000, 250, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('11331079-4708-439b-be80-5b6cca401519', 'Dây chuyền vàng 18K', '3265fa78-c22d-4448-9d79-6af9c96c1542', 9065000, 240, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('5a8a055e-3ff4-42f8-9ac4-4217d22204bf', 'Nhẫn vàng 18K', 'cd520895-36ee-46f4-8773-6d7c20b0716b', 16720000, 188, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('4702a45b-3cdd-4f93-a7d1-b6df4f168bc3', 'Đồng hồ vàng trắng', '0b38ed7d-796b-47ab-9809-55de707727a5', 50000000, 118, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('38b07a85-f8c8-4db0-8085-c61a959e6779', 'Bông tai vàng hồng', '52ba56e4-856d-48e8-b070-dfffbc424100', 5340000, 250, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('af6e9856-3d78-44cf-b13d-ecb9b09657b5', 'Dây chuyền vàng hồng', '3265fa78-c22d-4448-9d79-6af9c96c1542', 6230000, 264, now(), now());

INSERT INTO PRODUCTS (id, Name, ProductTypeId, Price, Stock, createdAt, updatedAt)
VALUES ('97664e66-cc0e-4a41-8e65-569eb2a60525', 'Đồng hồ vàng nữ trang', '0b38ed7d-796b-47ab-9809-55de707727a5', 30000000, 120, now(), now());




-- SERVICETYPES
INSERT INTO SERVICETYPES (id, Name, Price, createdAt, updatedAt)
VALUES ('f03a0619-a6ee-4e26-9c06-df780e50cac2', 'Đánh bóng và làm mới', 500000, now(), now());

INSERT INTO SERVICETYPES (id, Name, Price, createdAt, updatedAt)
VALUES ('546c0ff2-e03b-4030-b72b-a73ccdb6358e', 'Đúc theo yêu cầu', 3000000, now(), now());

INSERT INTO SERVICETYPES (id, Name, Price, createdAt, updatedAt)
VALUES ('17bdefbb-611d-4e88-8bd8-6a3d93d69b09', 'Sửa chữa và chỉnh sửa', 700000, now(), now());

INSERT INTO SERVICETYPES (id, Name, Price, createdAt, updatedAt)
VALUES ('26f1a1cb-2d1e-43e9-8adb-7a0020794706', 'Tư vấn', 500000, now(), now());

INSERT INTO SERVICETYPES (id, Name, Price, createdAt, updatedAt)
VALUES ('cf466b8f-c1bb-420a-b964-6180d6bc50e6', 'Bảo trì, bảo dưỡng', 500000, now(), now());



-- SERVICEFORMS
INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('1', '2021-01-01', 'Trần Nhất', '0334032833', 1700000, 1700000, 0, 'Hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('2', '2021-01-02', 'Lê Nhị', '0332453534', 2100000, 1100000, 1000000, 'Chưa hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('3', '2021-01-03', 'Nguyễn Ba', '0345342313', 12000000, 7000000, 5000000, 'Chưa hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('4', '2021-01-04', 'Phạm Tư', '0978742332', 2500000, 2500000, 0, 'Hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('5', '2021-01-05', 'Ngô Năm', '0999423452', 1500000, 1500000, 0, 'Hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('6','2021-01-06', 'Phan Sáu', '0453452344', 1000000, 1000000, 0, 'Hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('7','2021-01-07', 'Trần Nhất', '0334032833', 6000000, 3000000, 3000000, 'Chưa hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('8','2021-01-08', 'Nguyễn Ba', '0345342313', 2000000, 2000000, 0, 'Hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('9','2021-01-09', 'Ngô Năm', '0999423452', 2100000, 2100000, 0, 'Hoàn thành', now(), now());

INSERT INTO SERVICEFORMS (id, Date, Customer, Phone, Total, Paid, Remain, Status, createdAt, updatedAt)
VALUES ('10','2021-01-10', 'Lê Nhị', '0332453534', 500000, 500000, 0, 'Hoàn thành', now(), now());


-- SERVICEFORMDETAILS
INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('1', '17bdefbb-611d-4e88-8bd8-6a3d93d69b09', 1, 700000, 0, 700000, 0, 'Đã giao', '2021-01-01', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('1', '26f1a1cb-2d1e-43e9-8adb-7a0020794706', 2, 1000000, 0,1000000, 0, 'Đã giao', '2021-01-01', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('2', '17bdefbb-611d-4e88-8bd8-6a3d93d69b09', 3, 2100000, 0,1100000, 1000000, 'Chưa giao', '1900-01-01', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('3', '546c0ff2-e03b-4030-b72b-a73ccdb6358e', 4, 12000000, 0,7000000, 5000000, 'Chưa giao', '1900-01-01', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('4', 'cf466b8f-c1bb-420a-b964-6180d6bc50e6', 5, 2500000, 0,2500000, 0, 'Đã giao', '2021-01-04', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('5', 'f03a0619-a6ee-4e26-9c06-df780e50cac2', 3, 1500000, 0,1500000, 0, 'Đã giao', '2021-01-05', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('6', 'cf466b8f-c1bb-420a-b964-6180d6bc50e6', 2, 1000000, 0,1000000, 0, 'Đã giao', '2021-01-06', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('7', '546c0ff2-e03b-4030-b72b-a73ccdb6358e', 2, 6000000, 0,3000000, 3000000, 'Chưa giao', '1900-01-01',  now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('8', '26f1a1cb-2d1e-43e9-8adb-7a0020794706', 4, 2000000, 0,2000000, 0, 'Đã giao', '2021-01-08', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('9', '17bdefbb-611d-4e88-8bd8-6a3d93d69b09', 3, 2100000, 0,2100000, 0, 'Đã giao', '2021-01-09', now(), now());

INSERT INTO SERVICEFORMDETAILS (ServiceFormId, ServiceTypeID, Quantity, Subtotal, Incurred, prePaid, Remain, Status, DeliverDate, createdAt, updatedAt)
VALUES ('10', 'f03a0619-a6ee-4e26-9c06-df780e50cac2', 1, 500000, 0,500000, 0, 'Đã giao', '2021-01-10', now(), now());


-- SUPPLIERS
INSERT INTO SUPPLIERS (id, Name, Address, Phone, createdAt, updatedAt)
VALUES ('e3b3e199-a4b2-47c8-8c55-eaa1a0c513e5', 'Công ty X', 'Thủ Đức, TPHCM', '0342342312', now(), now());

INSERT INTO SUPPLIERS (id, Name, Address, Phone, createdAt, updatedAt)
VALUES ('39e5d600-c108-4cda-8f9a-e622d32a7b20', 'Xưởng vàng Y', 'Quận 1, TPHCM', '0234523423', now(), now());

INSERT INTO SUPPLIERS (id, Name, Address, Phone, createdAt, updatedAt)
VALUES ('18a97d40-3bc6-4cd5-b5fd-0bfb8ab310da', 'Cửa hàng Z', 'Quận 3, TPHCM', '0435435343', now(), now());

INSERT INTO SUPPLIERS (id, Name, Address, Phone, createdAt, updatedAt)
VALUES ('474f0e52-055d-41aa-a6e5-16d97b8e7722', 'Vàng bạc U', 'Quận 5, TPHCM', '0934573423', now(), now());



-- BUYFORMS
INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('f4862350-82ac-4369-a9e4-4bed9c0abb07', '2020-12-10 08:00:00', 'e3b3e199-a4b2-47c8-8c55-eaa1a0c513e5', 5484378000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('04aae3cf-2927-4498-9ff5-8759b426f3b7', '2020-12-10 08:00:00', '474f0e52-055d-41aa-a6e5-16d97b8e7722', 5649350000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('2d356b46-916b-47f9-8280-fb54a351d557', '2020-12-10 08:00:00', '18a97d40-3bc6-4cd5-b5fd-0bfb8ab310da', 3948350000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('d1d73338-c55b-4b05-b470-6de8923a09e2', '2020-12-10 08:00:00', '474f0e52-055d-41aa-a6e5-16d97b8e7722', 4843000000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('d4db37e6-496c-4c51-8ab0-3d1fc38c3d3f', '2020-12-10 08:00:00', 'e3b3e199-a4b2-47c8-8c55-eaa1a0c513e5', 15237000000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('25add158-be2b-4006-8f30-5d887793aeff', '2020-12-10 08:00:00', '18a97d40-3bc6-4cd5-b5fd-0bfb8ab310da', 5632550000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('7c60dd2c-b84f-433b-81af-4b239a664f98', '2020-12-10 08:00:00', 'e3b3e199-a4b2-47c8-8c55-eaa1a0c513e5', 1183100000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('8b7d4014-a9fe-468e-ab9d-d58240005454', '2020-12-10 08:00:00', '39e5d600-c108-4cda-8f9a-e622d32a7b20', 2500000000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('2d658a30-b650-44ba-85ba-61e6588bc5bd', '2020-12-10 08:00:00', '39e5d600-c108-4cda-8f9a-e622d32a7b20', 1500000000, now(), now());

INSERT INTO BUYFORMS (id, Date, SupplierId, Total, createdAt, updatedAt)
VALUES ('2c834813-28a7-4bd1-89e3-4538f9f8826a', '2020-12-10 08:00:00', 'e3b3e199-a4b2-47c8-8c55-eaa1a0c513e5', 15237000000, now(), now());



-- BUYFORMDETAILS
INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('f4862350-82ac-4369-a9e4-4bed9c0abb07', 'de8ac38b-b8fd-4032-a5b9-4bd0daca6d57', 150, 2288550000, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('f4862350-82ac-4369-a9e4-4bed9c0abb07', '30b2c797-20fd-4716-be5c-782841b3d006', 150, 1774650000, now(), now(), 'cd520895-36ee-46f4-8773-6d7c20b0716b');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('f4862350-82ac-4369-a9e4-4bed9c0abb07', 'a7c28aea-35fa-475d-8795-fa689dd71b6b', 183, 1421178000, now(), now(), '52ba56e4-856d-48e8-b070-dfffbc424100');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('04aae3cf-2927-4498-9ff5-8759b426f3b7', 'de8ac38b-b8fd-4032-a5b9-4bd0daca6d57', 230, 2149350000, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('04aae3cf-2927-4498-9ff5-8759b426f3b7', '4702a45b-3cdd-4f93-a7d1-b6df4f168bc3', 70, 3500000000, now(), now(), '0b38ed7d-796b-47ab-9809-55de707727a5');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('2d356b46-916b-47f9-8280-fb54a351d557', 'af6e9856-3d78-44cf-b13d-ecb9b09657b5', 270, 1682100000, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('2d356b46-916b-47f9-8280-fb54a351d557', '11331079-4708-439b-be80-5b6cca401519', 250, 2266250000, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('d1d73338-c55b-4b05-b470-6de8923a09e2', '38b07a85-f8c8-4db0-8085-c61a959e6779', 250, 1335000000, now(), now(), '52ba56e4-856d-48e8-b070-dfffbc424100');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('d1d73338-c55b-4b05-b470-6de8923a09e2', '97664e66-cc0e-4a41-8e65-569eb2a60525', 70, 2100000000, now(), now(), '0b38ed7d-796b-47ab-9809-55de707727a5');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('d1d73338-c55b-4b05-b470-6de8923a09e2', '65dd27e8-41b6-46fa-8ab3-8317a0a495b8', 250, 1408000000, now(), now(), '52ba56e4-856d-48e8-b070-dfffbc424100');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('d4db37e6-496c-4c51-8ab0-3d1fc38c3d3f', '82c8667a-a66d-42b1-aa5e-67322f84038c', 10, 15237000000, now(), now(), 'c3bccd70-ee4e-494a-8c64-6d7761aee58d');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('25add158-be2b-4006-8f30-5d887793aeff', 'de8ac38b-b8fd-4032-a5b9-4bd0daca6d57', 150, 2288550000, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('25add158-be2b-4006-8f30-5d887793aeff', '5a8a055e-3ff4-42f8-9ac4-4217d22204bf', 200, 3344000000, now(), now(), 'cd520895-36ee-46f4-8773-6d7c20b0716b');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('7c60dd2c-b84f-433b-81af-4b239a664f98', '30b2c797-20fd-4716-be5c-782841b3d006', 100, 1183100000, now(), now(), 'cd520895-36ee-46f4-8773-6d7c20b0716b');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('8b7d4014-a9fe-468e-ab9d-d58240005454', '4702a45b-3cdd-4f93-a7d1-b6df4f168bc3', 50, 2500000000, now(), now(), '0b38ed7d-796b-47ab-9809-55de707727a5');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('2d658a30-b650-44ba-85ba-61e6588bc5bd', '97664e66-cc0e-4a41-8e65-569eb2a60525', 50, 1500000000, now(), now(), '0b38ed7d-796b-47ab-9809-55de707727a5');

INSERT INTO BUYFORMDETAILS (BuyFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('2c834813-28a7-4bd1-89e3-4538f9f8826a', '82c8667a-a66d-42b1-aa5e-67322f84038c', 10, 15237000000, now(), now(), 'c3bccd70-ee4e-494a-8c64-6d7761aee58d');


-- SELLFORMS
INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF1','2020-12-22', 'Phan Sáu', 951829500, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF2','2020-12-23', 'Phạm Tư', 102000000, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF3','2020-12-24', 'Lê Nhị', 32039700, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF4','2020-12-25', 'Trần Nhất', 31995920, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF5','2020-12-26', 'Nguyễn Ba', 3169296000, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF6','2020-12-27', 'Ngô Năm', 24371860, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF7','2020-12-28', 'Phan Sáu', 140448000, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF8','2020-12-29', 'Phạm Tư', 49061250, now(), now());

INSERT INTO SELLFORMS (id, Date, Customer, Total, createdAt, updatedAt)
VALUES ('SF9','2020-12-30', 'Trần Nhất', 39249000, now(), now());



-- SELLFORMDETAILS 
INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity,Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF1', '11331079-4708-439b-be80-5b6cca401519', 10, 95182500, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF2', '4702a45b-3cdd-4f93-a7d1-b6df4f168bc3', 2, 102000000, now(), now(), '0b38ed7d-796b-47ab-9809-55de707727a5');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF3', 'de8ac38b-b8fd-4032-a5b9-4bd0daca6d57', 2, 32039700, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF4', 'a7c28aea-35fa-475d-8795-fa689dd71b6b', 4, 31995920, now(), now(), '52ba56e4-856d-48e8-b070-dfffbc424100');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF5', '82c8667a-a66d-42b1-aa5e-67322f84038c', 2, 3169296000, now(), now(), 'c3bccd70-ee4e-494a-8c64-6d7761aee58d');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF6', '30b2c797-20fd-4716-be5c-782841b3d006', 2, 24371860, now(), now(), 'cd520895-36ee-46f4-8773-6d7c20b0716b');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF7', '5a8a055e-3ff4-42f8-9ac4-4217d22204bf', 8, 140448000, now(), now(), 'cd520895-36ee-46f4-8773-6d7c20b0716b');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF8', 'a4d92ad3-404f-4081-8e69-7fe81d53a468', 5, 49061250, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');

INSERT INTO SELLFORMDETAILS (SellFormId, ProductId, Quantity, Subtotal, createdAt, updatedAt, ProductTypeId)
VALUES ('SF9', 'af6e9856-3d78-44cf-b13d-ecb9b09657b5', 6, 39249000, now(), now(), '3265fa78-c22d-4448-9d79-6af9c96c1542');


insert into PARAMETERS (id, name, value, createdAt, updatedAt)
values (1, "minPrePaid", 50, now(), now());

insert into usergroups (id, name, createdAt, updatedAt) values (1, 'admin', now(), now());
insert into usergroups (id, name, createdAt, updatedAt) values (2, 'peasant', now(), now());

insert into users (username, password, token, UserGroupId, createdAt, updatedAt) values ('admin', '$2b$10$kbNpldjGfVjpZewxFE5BR.4CE4TACw9WgiasLOKOq/AYE1c6jgDWK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg3MTY4MzI1LCJleHAiOjE2ODc3NzMxMjV9.dzOZcA2uXwZT1MP5Yj60ADn4XKgQZz0kk3DrVc4xtBk', 1, now(), now());
insert into users (username, password, token, UserGroupId, createdAt, updatedAt) values ('normal', '$2b$10$yKXVfypvhjmvNm70/zsUCu.2kig9eQWX30X9mgKQIQPzB/0A6jpWy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vcm1hbCIsImlhdCI6MTY4NzE2ODY3OCwiZXhwIjoxNjg3NzczNDc4fQ.qOhqwZz5Y5hc0rYGDx3P0SdGHRms-rdqPrxiTKce_kE', 2, now(), now())