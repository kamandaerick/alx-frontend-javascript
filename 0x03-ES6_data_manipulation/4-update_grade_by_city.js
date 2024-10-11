export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)  // Step 1: Filter by city
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);  // Step 2: Find matching grade
      
      return {
        ...student,  // Spread operator to keep other student properties
        grade: gradeObj ? gradeObj.grade : 'N/A',  // Add grade or set 'N/A' if not found
      };
    });
}
