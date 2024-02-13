/**
 * รูปแบบ praramObj = {
 *  spreadSheetId : xxx,
 *  sheetName: xxx,
 *  startRow : xxx,
 *  startCol : xxx,
 *  lastRow : xxx,
 *  lastCol : xxx
 * }
 */

/** ternery operator กำหนดค่า startRow, startCol, lastRow, lastCol */
function ternaryOperatorTypeOfIfUndefined_(params, ifTrue, ifFalse) {
  let result = typeof params[ifTrue] === 'undefined' ? ifFalse : params[ifTrue]

  return result
}

/** Check row number ใน google sheet จาก id */
function getRowNumberFromId_(paramsObj, id) {
  const ws = getWorkSheet_(paramsObj)
  let data = readData(paramsObj).map((el) => el[0].toString().toLowerCase())
  const posIndex = data.indexOf(id.toString().toLowerCase())
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2

  let dataObj = {
    rowNumber,
    ws,
  }

  return dataObj
}

function getWorkSheet_(paramsObj) {
  const ss = SpreadsheetApp.openById(paramsObj.spreadSheetId)
  const ws = ss.getSheetByName(paramsObj.sheetName)

  return ws
}

function createData(paramsObj, dataObj) {
  const ws = getWorkSheet_(paramsObj)
  let data = Object.values(dataObj)

  ws.appendRow(data)

  return true
}

function readData(paramsObj) {
  const ws = getWorkSheet_(paramsObj)
  let startRow = ternaryOperatorTypeOfIfUndefined_(paramsObj, 'startRow', 2)
  let startCol = ternaryOperatorTypeOfIfUndefined_(paramsObj, 'startCol', 1)
  let lastRow = ternaryOperatorTypeOfIfUndefined_(
    paramsObj,
    'lastRow',
    ws.getLastRow() - 1
  )
  let lastCol = ternaryOperatorTypeOfIfUndefined_(
    paramsObj,
    'lastCol',
    ws.getLastColumn()
  )

  let data = ws.getRange(startRow, startCol, lastRow, lastCol).getValues()

  return data
}

function readDataDisplayValues(paramsObj) {
  const ws = getWorkSheet_(paramsObj)
  const firstCell = ws.getRange('A1')
  const firstRowNumber = firstCell.getRow()
  const dataRange = firstCell.getDataRegion()
  const data = dataRange.getDisplayValues()

  return { data, firstRowNumber }
}

function updateData(paramsObj, id, dataArray) {
  let { ws, rowNumber } = getRowNumberFromId_(paramsObj, id)

  if (rowNumber === 0) {
    return false
  } else {
    ws.getRange(rowNumber, 1, 1, ws.getLastColumn()).setValues(dataArray)
    return true
  }
}

function deleteData(paramsObj, id) {
  let { ws, rowNumber } = getRowNumberFromId_(paramsObj, id)

  if (rowNumber === 0) {
    return false
  } else {
    ws.deleteRow(rowNumber)
    return true
  }
}

function getPageUrl(queryString) {
  if (queryString) {
    let url = ScriptApp.getService().getUrl()
    return `${url}?v=${queryString}`
  } else {
    return
  }
}
