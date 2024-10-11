// task_3/main.ts

/// <reference path="./js/crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with age field
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Update the row with the new data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);
