"use strict";
// Create student 1 and student 2 variables stored in variable 'studentsList'
var student1 = {
    firstName: 'Lemohang',
    lastName: 'Lipholo',
    age: 25,
    location: 'Silicon Valley',
};
var student2 = {
    firstName: 'Maggie',
    lastName: 'Gibbs',
    age: 30,
    location: 'Miami',
};
// Store them in the studentsList array
var studentsList = [student1, student2];
// Function that creates a table and appends student details
var table = document.createElement('table');
// Iterate through the studentsList and create a row for each student
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td'); // Changed from 'tr' to 'td'
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the table to the body of the document
document.body.appendChild(table);
