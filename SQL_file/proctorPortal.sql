ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Jeev@2019';
flush privileges;
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
describe Student;
create table Student(sid varchar(30), usn varchar(20), name varchar(100) not null, email varchar(120) not null,
					 department varchar(100) not null, gender varchar(20), phno varchar(15), semester varchar(5),
                     cgpa varchar(10), img varchar(1000), proctor varchar(30));
insert into student values("10", "1BM19CS084", "Jeevan", "j.cse@b.ac.in", "CSE", "Male", "805098125", "5", "8.5", "", "1");
-- Add constraints to Student Table
alter table Student add primary key(sid, usn), add foreign key(sid) references Login(gid) on delete cascade;
alter table Student add foreign key(proctor) references Proctor(pid) on update cascade;
ALTER TABLE Student ADD INDEX (usn);
select * from proctor where pid=(select proctor from student where sid="10");

-- Create Proctor Table
create table Proctor(pid varchar(30), name varchar(100) not null, email varchar(120) not null, 
					 department varchar(100) not null, phoneNumber varchar(15), qualifications varchar(50),
                     initials varchar(10), designation varchar(100), image varchar(800));
drop table proctor;
insert into proctor values("1", "Selva", "s.cse@b.ac.in", "CSE", "8050978125", "Be, MTech, PhD", "SKS", "Assistant Prof.", "");
-- Add constraints to Proctor Table

alter table Proctor add primary key (pid, name, email), add foreign key (pid) references Login(gid) on delete cascade;


-- Create Courses table
create table Courses(cid varchar(20), credits varchar(5), type varchar(10), title varchar(50), semester varchar(5), department varchar(100),
					 primary key(cid));


-- Create Marks table
create table reg_marks(usn varchar(20), cid varchar(20), internal varchar(5), see varchar(5), course_faculty varchar(30), type varchar(10), semester varchar(5),
grade varchar(5), attendance varchar(5), year varchar(5),
foreign key(cid) references Courses(cid) on update cascade, foreign key(usn) references Student(usn) on delete cascade,
primary key(usn, cid, type, year));


-- Create requests table
create table requests(usn varchar(20), pid varchar(30), request_type varchar(10), request_data varchar(10000));


-- Create table branch_change
create table branch_change(initial_branch varchar(100), current_branch varchar(100));


-- Values for Login table
insert into login values("121212", "Student");