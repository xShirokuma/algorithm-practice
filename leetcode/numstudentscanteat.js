function countStudents(students, sandwiches) {
    let count = 0;

    let studentCount = [0, 0];
    for (let student of students) {
        studentCount[student]++;
    }

    for (let sandwich of sandwiches) {
        if (studentCount[sandwich] === 0) break;

        studentCount[sandwich]--;
        count++;
    }

    return students.length - count;
}
