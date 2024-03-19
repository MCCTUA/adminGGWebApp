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
  const praramDataObj = {
    spreadSheetId: contactSpreadsheetId,
    sheetName: contactSheet,
  }

  const paramsDocIdObj = {
    spreadSheetId: controlDocumentSpreadsheetId,
    sheetName: controlDocument2024Sheet,
  }
  const mainKey = formDataObj.formType
  let idInfo = getDocSequenceAndCat(paramsDocIdObj, mainKey)

  let formDataObjKeys = Object.keys(formDataObj)

  console.log('form data object keys : ', formDataObjKeys)

  const keyOrder = getHeaderTableName(mainKey)
  const keyDocControlOrder = getHeaderTableName('docControl')
  const keyOrderLength = keyOrder[mainKey].objKey.length - 1
  formDataObj[keyOrder[mainKey].objKey[0]] = idInfo.sequence
  formDataObj[keyOrder[mainKey].objKey[keyOrderLength]] = idInfo.createAt =
    new Date()
  const folder = DriveApp.getFolderById(contactUploadFolder)
  let sortedObj = {}
  let sortIdObj = {}

  let inputFields = Object.entries(formDataObj).reduce((acc, [key, value]) => {
    if (key.includes('File')) {
      value.contents === ''
        ? acc[key] === value.contents
        : (acc[key] = `https://lh3.googleUserContent.com/d/${
            folder.createFile(formDataObj[key]).getUrl().split('/')[5]
          }`)
    } else if (key.includes('Mobile') || key.includes('Phone')) {
      acc[key] = `'${value}`
    } else {
      acc[key] = value
    }
    return acc
  }, {})

  console.log('input fields : ', inputFields)

  keyOrder[mainKey].objKey.forEach((key) => {
    console.log('key :', key)
    if (inputFields.hasOwnProperty(key)) {
      sortedObj[key] = inputFields[key] === 'เพศ' ? '' : inputFields[key]
    } else {
      sortedObj[key] = ''
    }
  })

  console.log('sorted object : ', sortedObj)

  idInfo.docFor =
    inputFields.contactName === ''
      ? inputFields.contactLineName
      : inputFields.contactName

  keyDocControlOrder.objKey.forEach((key) => {
    if (idInfo.hasOwnProperty(key)) {
      sortIdObj[key] = idInfo[key]
    }
  })

  // บันทึก เลข ID ที่สร้างใหม่
  createData(paramsDocIdObj, sortIdObj)
  // บันทึก Form Data ลง Sheet
  createData(praramDataObj, sortedObj)
}
