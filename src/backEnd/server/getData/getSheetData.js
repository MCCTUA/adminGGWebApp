function getContactData() {
  const paramObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet
  }
return readDataDisplayValues(paramObj) 
}
