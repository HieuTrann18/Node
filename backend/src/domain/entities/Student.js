class Student {
    constructor(id, name, age, score, courseIds = []){
        this.id = id
        this.name = name
        this.age = age
        this.score = score
        this.courseIds = courseIds
    }
}

module.exports = Student