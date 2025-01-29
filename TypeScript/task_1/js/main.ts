// Define the 'teacher' interface
interface teacher {
    firstName: string; // Can only be set during initialization 
    lastName: string; // Can only be set during initialization 
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;
    [key: string]: any; // Alows addxitional attributes of any sort
}

// Create 'teacher' variable
const teacher1: teacher = {
    firstName: "Francoise",
    lastName: "Piere",
    fullTimeEmployee: true,
    yearsOfExperience: 15,
    location: "Paris",
    contract: true, // Extra attribute
}

// Logs the 'teacher' variable
console.log(teacher1);

// Define the 'Director' inteface that extends 'Teacher'
interface Director extends teacher {
    numberOfReports: number; // The new required property
}
// Create director object
const director1: Director = {
    firstName: "Paul",
    lastName: "Rooberts",
    location: "Nashville",
    fullTimeEmployee: true,
    numberOfReports: 60, // The required peroperty for Director
}

// Logs the director object
console.log(director1);

// Define the interface for 'printTeacherFunction' function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function based on the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("Francoise", "Piere")); // Output: F. Piere
