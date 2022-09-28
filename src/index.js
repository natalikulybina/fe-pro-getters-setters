function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    get() {
      return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    },
  });
  
}

export const school = {
  students: {
    0: new Student('Maria', [45, 76, 45, 98, 90, 87, 56]),
    1: new Student('Dmytro', [67, 34, 87, 34, 98, 76]),
    2: new Student('Anton', [45, 34, 87, 34, 23, 76]),
    3: new Student('Olha', [67, 34, 34, 23, 98, 76]),
    4: new Student('Anna', [67, 34, 85, 34, 85, 76]),
    5: new Student('Bohdan', [67, 25, 87, 34, 25, 76]),
    6: new Student('Eugene', [97, 34, 78, 85, 98, 65]),
    7: new Student('Ivan', [76, 89, 78, 98, 98, 99, 89, 96]),
  },
  
  get aGradeStudents() {
    const aGrade = Object.values(this.students)
      .filter((students) => students.averageGrade <= 100 && students.averageGrade >= 90)
      .map((students) => students.name)
      .join(', ');

    return aGrade;
  },

  get bGradeStudents() {
    const bGrade = Object.values(this.students)
      .filter((students) => students.averageGrade < 90 && students.averageGrade >= 75)
      .map((students) => students.name)
      .join(', ');

    return bGrade;
  },

  get cGradeStudents() {
    const cGrade = Object.values(this.students)
      .filter((students) => students.averageGrade < 75 && students.averageGrade >= 60)
      .map((students) => students.name)
      .join(', ');

    return cGrade;
  },

  get dGradeStudents() {
    const dGrade = Object.values(this.students)
      .filter((students) => students.averageGrade < 60 && students.averageGrade >= 0)
      .map((students) => students.name)
      .join(', ');

    return dGrade;
  },

}; 
