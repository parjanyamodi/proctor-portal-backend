const sql = require('../db/db')
const Student = function(std){
    this.profile = std.profile
    this.proctor = std.proctor
    this.marks = std.marks
}