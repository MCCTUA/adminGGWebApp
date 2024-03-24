/**
 * name : serverFormInput
 * type : function
 * parameter : formDataObj
 * task : รับข้อมูลจาก HTML Form
 */

function serverFormInput(formDataObj) {
  try {
    console.log('serverFormInput :', formDataObj)
    // appendContactData(formDataObj)
    return true
  } catch (error) {
    catchError(error)
    return false
  }
}

/**
 * Save Data ลง Google Sheet
 */

function appendContactData(formDataObj) {
  try {
    const mainKey = formDataObj.formType
    console.log('main key', mainKey)
    const {
      contact: {
        paramsObj: {
          praramDataObj,
          paramsDocIdObj,
          paramsContactFolder: { folderName },
        },
      },
    } = getHeaderTableName(mainKey)
    const idInfo = getDocSequenceAndCat(paramsDocIdObj, mainKey)

    const keyOrder = getHeaderTableName(mainKey)
    const keyDocControlOrder = getHeaderTableName('docControl')
    const keyOrderLength = keyOrder[mainKey].objKey.length - 1
    formDataObj[keyOrder[mainKey].objKey[0]] = idInfo.sequence
    formDataObj[keyOrder[mainKey].objKey[keyOrderLength]] = idInfo.createAt =
      new Date()

    let sortedObj = {}
    let sortIdObj = {}

    let inputFields = dataSheetColumnFormating(formDataObj, folderName)

    keyOrder[mainKey].objKey.forEach((key) => {
      if (inputFields.hasOwnProperty(key)) {
        sortedObj[key] = inputFields[key] === 'เพศ' ? '' : inputFields[key]
      } else {
        sortedObj[key] = ''
      }
    })

    console.log('form data obj sortedObj:', sortedObj)

    idInfo.docFor =
      inputFields.contactName === ''
        ? inputFields.contactLineName
        : inputFields.contactName

    sortedDataFollowSheetColumn(keyDocControlOrder, idInfo, sortIdObj)

    // บันทึก เลข ID ที่สร้างใหม่
    createData(paramsDocIdObj, sortIdObj)
    // บันทึก Form Data ลง Sheet
    createData(praramDataObj, sortedObj)
  } catch (error) {
    catchError()
  }
}

/**
 * แปลงข้อมูล เพื่อให้สามารถนำไปบันทึก และแสดง
 */

function dataSheetColumnFormating(formDataObj, folderConstant) {
  try {
    const folder = DriveApp.getFolderById(folderConstant)
    const inputDataWithFormating = Object.entries(formDataObj).reduce(
      (acc, [key, value]) => {
        if (key.includes('File')) {
          value.contents === ''
            ? acc[key] === value.contents
            : (acc[key] = `https://lh3.googleUserContent.com/d/${
                folder.createFile(formDataObj[key]).getUrl().split('/')[5]
              }`)
        } else if (key.includes('Mobile') || key.includes('Phone')) {
          acc[key] = `'${value}`
        } else if (Array.isArray(value)) {
          let stringData = value.map((el) => `${el}`).join(', ')
          acc[key] = stringData
        } else {
          acc[key] = value
        }
        return acc
      },
      {}
    )

    return inputDataWithFormating
  } catch (error) {
    catchError(error)
  }
}

/**
 * จัดเรียงข้อมูลตาม Column ใน Sheet
 */

function sortedDataFollowSheetColumn(keyDocControlOrder, idInfo, sortIdObj) {
  try {
    keyDocControlOrder.objKey.forEach((key) => {
      if (idInfo.hasOwnProperty(key)) {
        sortIdObj[key] = idInfo[key]
      }
    })
  } catch (error) {
    catchError(error)
  }
}
