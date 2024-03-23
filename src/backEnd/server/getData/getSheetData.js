function getContactData() {
  const paramObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet,
  }
  console.log(readDataDisplayValues(paramObj))
  return readDataDisplayValues(paramObj)
}

function getCompanyData() {
  const paramObj = {
    spreadSheetId: companySpreadsheetId,
    sheetName: companySheet,
  }
  return readDataDisplayValues(paramObj)
}

function getContactWithCompanyData(contactId) {
  const paramObj = {
    spreadSheetId: companySpreadsheetId,
    sheetName: companyContactList,
  }
  console.log('contact id : ', contactId)
  if (contactId !== undefined) {
    const x = readDataDisplayValues(paramObj)
    console.log('contactId :', contactId)
  } else {
    return readDataDisplayValues(paramObj)
  }
}

function getTochPointList() {
  const paramObj = {
    spreadSheetId: touchPointListSpreadsheetId,
    sheetName: touchPointList,
  }

  return readDataDisplayValues(paramObj)
}
