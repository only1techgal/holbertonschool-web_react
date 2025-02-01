//  Defines the `Subject` class within the `Subjects` namespace.

namespace Subjects {
  export class Subject {
    teacher!: Teacher;
    
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}