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
drop table branch_change;
create table branch_change(sid varchar(30), initial_branch varchar(100), current_branch varchar(100), initial_usn varchar(100), current_usn varchar(100));


-- Create table details
create table details(usn varchar(20), data varchar(100000));

-- Values for Login table
insert into login values("121212", "Student");

-- Values for courses
insert into Courses values("121212", "4", 'PC', 'Check Check', '1', 'CSE');
insert into courses values("19MA3BSSDM", "3", 'PC', "Statistics and Discrete Mathematics", "3", "CSE");
insert into courses values("19CS3ESMMC", "3", 'PC',"Microprocessors and Microcontrollers", 3, "CSE");
insert into courses values("19CS3PCOOJ", "3", 'PC',"Object Oriented Java Programming", 3, "CSE");
insert into courses values("19CS3PCDST", "3", 'PC',"Data Structures", 3, "CSE");
insert into courses values("19CS3PCCOA", "3", 'PC',"Computer Organization and Architecture", 3, "CSE");
insert into courses values("19CS3PCLOD", "3", 'PC',"Logic Design", 3, "CSE");
insert into courses values("19HS4PCEVS", "3", 'PC',"Environmental Studies", 3, "CSE");
insert into courses values("19CS3PWPW1", "3", 'PC',"Project Work-1", 3, "CSE");
insert into courses values("19CS3NCNC3", "3", 'PC',"Physical Activity (Sports/ Yoga Etc.)", 3, "CSE");
insert into courses values("18MA1BSEM1", "3", 'PC',"Engineering Mathematics-1", 1, "CSE");
insert into courses values("18CY1BSCHY", "3", 'PC',"Engineering Chemistry", 1, "CSE");
insert into courses values("18EE1ESELE", "3", 'PC',"Elememts of Electrical Engineering", 1, "CSE");
insert into courses values("18ME1ESEED", "3", 'PC',"Elememts of Engineering Drawing", 1, "CSE");
insert into courses values("18CV1ESENM", "3", 'PC',"Engineering Mechanics", 1, "CSE");
insert into courses values("18HS1NCENG", "3", 'PC',"Functional English", 1, "CSE");
insert into courses values("18MA2BSEM2", "3", 'PC',"Engineering Mathematics-2", 2, "CSE");
insert into courses values("18PY2BSPHY", "3", 'PC',"Applied Physics", 2, "CSE");
insert into courses values("18EC2ESECE", "3", 'PC',"Elememts of Electronics Engineering", 2, "CSE");
insert into courses values("18ME2ESEME", "3", 'PC',"Elememts of Mechanical Engineering", 2, "CSE");
insert into courses values("18CS2ESCCP", "3", 'PC',"C Programming", 2, "CSE");
insert into courses values("18HS2NCKAN", "3", 'PC',"Functional Kannada", 2, "CSE");


-- Values for marks table
insert into reg_marks values("1BM19CS084", "121212", "40", "80", "AAG", "REG", "3", "S", "55", "2020");
insert into reg_marks values("1BM19CS084", "19MA3BSSDM", "40", "80", "AAG", "REG", "3", "S", "55", "2020");

select * from reg_marks where usn="1BM19CS084";


















---------------------------------------------------------------------------------
create database proctor_portal;
use proctor_portal;
create table Login ( gid varchar(30), role varchar(15) not null,primary key (gid));
create table Student(sid varchar(30), usn varchar(20), name varchar(100) not null, email varchar(120) not null,
					 department varchar(100) not null, gender varchar(20), phno varchar(15), semester varchar(5),
                     cgpa varchar(10), img varchar(1000), proctor varchar(30));
alter table Student add primary key(sid, usn), add foreign key(sid) references Login(gid) on delete cascade;
create table Proctor(pid varchar(30), name varchar(100) not null, email varchar(120) not null, 
					 department varchar(100) not null, phoneNumber varchar(15), qualifications varchar(50),
                     initials varchar(10), designation varchar(100), image varchar(800));
alter table Proctor add primary key (pid, name, email), add foreign key (pid) references Login(gid) on delete cascade;
alter table Student add foreign key(proctor) references Proctor(pid) on update cascade;
ALTER TABLE Student ADD INDEX (usn);
create table Courses(cid varchar(20), credits varchar(5), type varchar(10), title varchar(50), semester varchar(5), department varchar(100),
					 primary key(cid));
create table reg_marks(usn varchar(20), cid varchar(20), internal varchar(5), see varchar(5), course_faculty varchar(30), type varchar(10), semester varchar(5),
grade varchar(5), attendance varchar(5), year varchar(5),
foreign key(cid) references Courses(cid) on update cascade, foreign key(usn) references Student(usn) on delete cascade,
primary key(usn, cid, type, year));
create table details(usn varchar(20), data TEXT);
insert into login values("121212", "Student");
insert into Courses values("121212", "4", 'PC', 'Check Check', '1', 'CSE');
insert into courses values("19MA3BSSDM", "3", 'PC', "Statistics and Discrete Mathematics", "3", "CSE");
insert into courses values("19CS3ESMMC", "3", 'PC',"Microprocessors and Microcontrollers", 3, "CSE");
insert into courses values("19CS3PCOOJ", "3", 'PC',"Object Oriented Java Programming", 3, "CSE");
insert into courses values("19CS3PCDST", "3", 'PC',"Data Structures", 3, "CSE");
insert into courses values("19CS3PCCOA", "3", 'PC',"Computer Organization and Architecture", 3, "CSE");
insert into courses values("19CS3PCLOD", "3", 'PC',"Logic Design", 3, "CSE");
insert into courses values("19HS4PCEVS", "3", 'PC',"Environmental Studies", 3, "CSE");
insert into courses values("19CS3PWPW1", "3", 'PC',"Project Work-1", 3, "CSE");
insert into courses values("19CS3NCNC3", "3", 'PC',"Physical Activity (Sports/ Yoga Etc.)", 3, "CSE");
insert into courses values("18MA1BSEM1", "3", 'PC',"Engineering Mathematics-1", 1, "CSE");
insert into courses values("18CY1BSCHY", "3", 'PC',"Engineering Chemistry", 1, "CSE");
insert into courses values("18EE1ESELE", "3", 'PC',"Elememts of Electrical Engineering", 1, "CSE");
insert into courses values("18ME1ESEED", "3", 'PC',"Elememts of Engineering Drawing", 1, "CSE");
insert into courses values("18CV1ESENM", "3", 'PC',"Engineering Mechanics", 1, "CSE");
insert into courses values("18HS1NCENG", "3", 'PC',"Functional English", 1, "CSE");
insert into courses values("18MA2BSEM2", "3", 'PC',"Engineering Mathematics-2", 2, "CSE");
insert into courses values("18PY2BSPHY", "3", 'PC',"Applied Physics", 2, "CSE");
insert into courses values("18EC2ESECE", "3", 'PC',"Elememts of Electronics Engineering", 2, "CSE");
insert into courses values("18ME2ESEME", "3", 'PC',"Elememts of Mechanical Engineering", 2, "CSE");
insert into courses values("18CS2ESCCP", "3", 'PC',"C Programming", 2, "CSE");
insert into courses values("18HS2NCKAN", "3", 'PC',"Functional Kannada", 2, "CSE");
