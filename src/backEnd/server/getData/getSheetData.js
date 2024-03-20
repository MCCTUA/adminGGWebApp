function getContactData() {
  const paramObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet,
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

  let { data: list } = readDataDisplayValues(paramObj)
  console.log(list)
  return list
}
