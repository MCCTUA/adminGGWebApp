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
