// Define the teacher interface
interface teacher {
    firstName: string; // Can only be set during initialization 
    lastName: string; // Can only be set during initialization 
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;
    [key: string]: any; // Alows addxitional attributes of any sort
}

// Create teacher variable
const teacher1: teacher = {
    firstName: "Francoise",
    lastName: "Piere",
    fullTimeEmployee: true,
    yearsOfExperience: 15,
    location: "Paris",
    contract: true, // Extra attribute
}

// Logs the teacher object
console.log(teacher1);
