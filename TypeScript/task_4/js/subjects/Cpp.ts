// Define the 'Cpp' class which extends from 'Subject'
namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
