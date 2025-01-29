// DirectorInterface with three methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface with three methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create an employee (either Teacher or Director)
function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();  // Return Teacher if salary is less than 500
    } else {
        return new Director();  // Return Director otherwise
    }
}

// expectd output
console.log(createEmployee(200));  // Expected output: Teacher
console.log(createEmployee(1000));  // Expected output: Director
console.log(createEmployee('$500'));  // Should return Director, although this case may need handling if input type isn't validated
