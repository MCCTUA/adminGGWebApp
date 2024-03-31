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
  }
  const ss = getSpreadSheet_(paramObj)

  const juristicTypeData = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyJuristicType
  )
  const endCustomerCategoryData = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyEndCustomerCategory
  )
  const businessCategoryData = getSheetDisplayData_(
    ss,
    paramObj.sheetCompanyBusinessCategory
  )

  const data = {
    juristicTypeData,
    endCustomerCategoryData,
    businessCategoryData,
  }

  return data
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
