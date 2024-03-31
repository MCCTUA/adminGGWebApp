function getContactData() {
  const paramObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet,
  }
  return readDataDisplayValues(paramObj)
}

function getCompanyData() {
  const paramObj = {
    spreadSheetId: companySpreadsheetId,
    sheetName: companySheet,
  }

  return readDataDisplayValues(paramObj)
}

function getNormalize() {
  const paramObj = {
    spreadSheetId: normalizeSpreadsheetId,
    sheetCompanyJuristicType: companyJuristicType,
    sheetCompanyEndCustomerCategory: companyEndCustomerCategory,
    sheetCompanyBusinessCategory: companyBusinessCategory,
    sheetCompanyContactType: companyContactType,
    sheetFinanceCreditTerm: financeCreditTerm,
  }
  const ss = getSpreadSheet_(paramObj)

  const juristicType = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyJuristicType
  )
  const endCustomerCategory = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyEndCustomerCategory
  )
  const businessCategory = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyBusinessCategory
  )
  const contactCategory = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyContactType
  )
  const creditTerm = getSheetDisplayData_(ss, paramObj.sheetFinanceCreditTerm)

  const data = {
    juristicType,
    endCustomerCategory,
    businessCategory,
    contactCategory,
    creditTerm,
  }

  console.log(data)

  return { data }
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
