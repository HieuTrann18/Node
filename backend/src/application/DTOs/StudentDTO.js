class StudentDTO {
    constructor(student) {
        this.id = student.id;
        this.name = student.name;
        this.age = student.age;
        this.score = student.score;
        this.courseIds = student.courseIds || [];
    }

    static fromRequest(data) {
        const { name, age, score, courseIds } = data;

        if (!name || typeof name !== 'string') {
            throw new Error('Invalid or missing name');
        }

        if (typeof age !== 'number' || age <= 0 || age > 120) {
            throw new Error('Invalid or missing age');
        }

        if (typeof score !== 'number' || score < 0 || score > 10) {
            throw new Error('Invalid or missing score');
        }

        if (courseIds && !Array.isArray(courseIds)) {
            throw new Error('courseIds must be an array');
        }

        return {
            name,
            age,
            score,
            courseIds: courseIds || []
        };
    }
}

module.exports = StudentDTO;
