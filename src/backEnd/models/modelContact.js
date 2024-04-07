function getContactData() {
  const paramObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet,
  }

  console.log(readDataDisplayValues(paramObj))

  return readDataDisplayValues(paramObj)
}

function getTochPointList() {
  const paramObj = {
    spreadSheetId: touchPointListSpreadsheetId,
    sheetName: touchPointList,
  }

  return readDataDisplayValues(paramObj)
}