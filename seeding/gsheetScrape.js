const fs = require('fs');
const readline = require('readline');
const {Sheets} = require('googleapis');


// This code uses the Sheets Advanced Service, but for most use cases
// the built-in method SpreadsheetApp.getActiveSpreadsheet()
//     .getRange(range).getValues(values) is more appropriate.
var result = Sheets.Spreadsheets.Values.get('1nMjPTphSkTj9LlAA6gypUenFL1st9O3jJtE7TxgU-R4', 'B2:B790');
var numRows = result.values ? result.values.length : 0;

return result
