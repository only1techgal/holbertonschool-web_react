// Import types from interface.ts
import { RowID, RowElement } from "../interface";

// Declared module and function types
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowID: RowID): void;
export function updateRow(rowID: RowID, row: RowElement): RowID;
