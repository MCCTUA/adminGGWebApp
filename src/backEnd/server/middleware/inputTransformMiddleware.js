function serverFormInput(formDataObj) {
  try {
    // console.log('serverFormInput :', formDataObj)
    appendContactData(formDataObj)
    return true
  } catch (error) {
    catchError(error)
    return false
  }
}

function appendContactData(formDataObj) {
  const praramObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet,
  }
  const keyOrder = getHeaderTableName('contact')
  console.log('key orders :', keyOrder.contact.objKey)
  const folder = DriveApp.getFolderById(contactUploadFolder)
  let sortedObj = {}

  // เพิ่ม code id

  let inputFields = Object.entries(formDataObj).reduce((acc, [key, value]) => {
    if (key.includes('File')) {
      value.contents === ''
        ? acc[key] === value.contents
        : (acc[key] = folder.createFile(formDataObj[key]).getUrl())
    } else {
      acc[key] = value
    }
    return acc
  }, {})

  keyOrder.contact.objKey.forEach((key) => {
    if (inputFields.hasOwnProperty(key)) {
      sortedObj[key] = inputFields[key]
    }
  })

  createData(praramObj, sortedObj)
}
