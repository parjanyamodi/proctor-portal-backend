module.exports = (app) => {
    const student = require("../controllers/student.controller");
  
    app.get("/student", student.findStudent);

    app.get("/student/marks", student.findMarks);

    app.get("/student/details", student.findStudentDetails);

    app.get("/student/proctor", student.findProctor);
  
    app.post("/student", student.createStudent);
    
    app.post("/student/marks", student.createStudentMarks);
    
    app.put("/student", student.updateStudent);
  
    app.delete("/student", student.removeStudent);
  
    app.get("/student/all", student.findAllStudents);
  };
  