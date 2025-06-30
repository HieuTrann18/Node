class Course {
    constructor(id, name, description, studentIds = [] ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.studentIds = studentIds;
    }
}

module.exports = Course
