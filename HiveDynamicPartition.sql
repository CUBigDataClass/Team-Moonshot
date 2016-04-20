create database project;
use project;
create table Product_global(Category String, Product String, Review int)         
row format delimited
fields terminated by ',';
load data local inpath '/home/edureka/Desktop/dat.txt' into table Product_global;
set hive.exec.dynamic.partition.mode = nonstrict;
set hive.exec.dynamic.partition = true;
create table product_dynamic_partition(Product String, Review int)
partitioned by (Category String)
row format delimited
fields terminated by ',';
from Product_Global p INSERT OVERWRITE TABLE product_dynamic_partition PARTITION(Category)
select p.Product,p.Review,p.Category;
