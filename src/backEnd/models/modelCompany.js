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
