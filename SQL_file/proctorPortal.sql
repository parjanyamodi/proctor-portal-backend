-- Create the database
show databases;
drop database proctor_portal;
create database proctor_portal;
use proctor_portal;

-- Required tables are Login, Student, Proctor, Marks and Courses

-- Creating Login table
create table Login ( gid varchar(30), role varchar(15) not null,primary key (gid));