//  Defines the `Subject` class within the `Subjects` namespace.

namespace Subjects {
    export class Subject {
      protected teacher: Teacher | undefined;
  
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }