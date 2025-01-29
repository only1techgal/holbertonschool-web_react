// Define the teacher interface
interface teacher {
    firstName: string; // Can only be set during initialization 
    lastName: string; // Can only be set during initialization 
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;
    [key: string]: any; // Alows addxitional attributes of any sort
}

// Define the 'Director' interace that extends 'Teacher'
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
