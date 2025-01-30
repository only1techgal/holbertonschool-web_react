/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "../interface";
import * as CRUD from "./crud";

// Create an object of type RowElement
const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

// Insert row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update row
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
