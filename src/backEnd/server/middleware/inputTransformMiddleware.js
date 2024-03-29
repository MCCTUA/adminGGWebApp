/**
 * name : serverFormInput
 * type : function
 * parameter : formDataObj
 * task : รับข้อมูลจาก HTML Form
 */

function serverFormInput(formDataObj) {
  try {
    appendContactData(formDataObj)
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
    const functionName = formDataObj.functionName
    const {
      contact: {
        paramsObj: {
          praramDataObj,
          paramsDocIdObj,
          paramstFolder: { folderName },
        },
        select2EndpointAndOptions: { getContactData },
        indexFileDataColumn,
      },
    } = getHeaderTableName(mainKey)

    const keyOrder = getHeaderTableName(mainKey)
    console.log(getContactData)
    // const uddateControlIndex = getContactData.map(el => el.textIndex)
    // console.log('uddateControlIndex', uddateControlIndex)

    const keyDocControlOrder = getHeaderTableName('docControl')
    const keyOrderLength = keyOrder[mainKey].objKey.length - 1
    const idInfo = getDocSequenceAndCat(paramsDocIdObj, mainKey)

    if (functionName === 'addData') {
      formDataObj[keyOrder[mainKey].objKey[0]] = idInfo.sequence
    } else if (functionName === 'editData') {
      formDataObj[keyOrder[mainKey].objKey[0]] = formDataObj.docId
    }

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

    idInfo.docFor =
      inputFields.contactName === ''
        ? inputFields.contactLineName
        : inputFields.contactName

    sortedDataFollowSheetColumn(keyDocControlOrder, idInfo, sortIdObj)

    if (functionName === 'addData') {
      // บันทึก เลข ID ที่สร้างใหม่
      createData(paramsDocIdObj, sortIdObj)
      // บันทึก Form Data ลง Sheet
      createData(praramDataObj, sortedObj)
    } else if (functionName === 'editData') {
      try {
        const doctId = formDataObj.docId
        let sortedArray = Object.values(sortedObj)
        let updateAt = sortedArray.pop()
        let sortedArrayFixedDataLength = [...sortedArray, '', '', updateAt, '']
        let dataArray = []
        dataArray.push(sortedArrayFixedDataLength)
        const uddateControlIndex = getContactData.map((el) => el.textIndex)
        updateData(
          praramDataObj,
          doctId,
          dataArray,
          uddateControlIndex,
          indexFileDataColumn
        )
      } catch (error) {
        catchError(error)
      }
    }
  } catch (error) {
    catchError()
  }
}

/**
 * Edit Data : Save ข้อมูลแก้ไขลง Google Sheet ที่ แถวเดิม
 */

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
