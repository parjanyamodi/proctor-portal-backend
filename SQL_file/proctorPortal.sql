-- Create the database
show databases;
drop database proctor_portal;
create database proctor_portal;
use proctor_portal;
show tables;
-- Required tables are Login, Student, Proctor, Marks and Courses

-- Creating Login table
create table Login ( gid varchar(30), role varchar(15) not null,primary key (gid));
select * from Login;

-- Create Student Table
describe table Student;
create table Student(sid varchar(30), usn varchar(20), name varchar(100) not null, email varchar(120) not null,
					 department varchar(100) not null, gender varchar(20), phno varchar(15), semester varchar(5),
                     cgpa varchar(10), img varchar(1000), proctor varchar(30));

-- Add constraints to Student Table
alter table Student add primary key(usn), add foreign key(sid) references Login(gid) on delete cascade;
alter table Student add foreign key(proctor) references Proctor(pid) on update cascade;


-- Create Proctor Table
create table Proctor(pid varchar(30), name varchar(100) not null, email varchar(120) not null, 
					 department varchar(100) not null, phno varchar(15), qualifications varchar(10),
                     initials varchar(10), designation varchar(100));

-- Add constraints to Proctor Table
alter table Proctor add primary key (name, email), add foreign key (pid) references Login(gid) on delete cascade;


-- Create Courses table
create table Courses(cid varchar(20), credits varchar(5), type varchar(10), title varchar(50), semester varchar(5), department varchar(100),
					 primary key(cid));


-- Create Marks table
create table reg_marks(usn varchar(20), cid varchar(20), internal varchar(5), see varchar(5), course_faculty varchar(30), type varchar(10), semester varchar(5),
grade varchar(5), attendance varchar(5), year varchar(5),
foreign key(cid) references Courses(cid) on update cascade, foreign key(usn) references Student(usn) on delete cascade,
primary key(usn, cid, type, year));


