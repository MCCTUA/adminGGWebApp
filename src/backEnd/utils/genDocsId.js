function runGetSequenceId() {
  let idInfo = getDocSequenceAndCat(contactInfo)

  console.log('id info', idInfo)
}

function testIdGen() {
  const paramsObj = {
    spreadSheetId: controlDocumentSpreadsheetId,
    sheetName: controlDocument2024Sheet,
  }
  const mainKey = 'contact'
  let idInfo = getDocSequenceAndCat(paramsObj, mainKey)
  console.log('id info', idInfo)
}

function getDocSequenceAndCat(docControlDataId, mainKey) {
  const sequenceInfo = {}
  const prefixFromYYMM = getPrefixDocId()
  sequenceInfo.abbrDocCat = getAbbrDocCat()[mainKey]

  sequenceInfo.sequence = `${sequenceInfo.abbrDocCat}${prefixFromYYMM.prefixDocSequence}001`

  const { data } = readDataDisplayValues(docControlDataId)

  const docInCat = data
    .slice(1)
    .filter((el) => el[1] === sequenceInfo.abbrDocCat)

  let maxSequence = 1

  if (docInCat.length > 0) {
    const docInYYMM = docInCat.filter(
      (el) =>
        prefixFromYYMM.prefixDocSequence === regexExtractYYMM(el[0]).preFixYYMM
    )

    if (docInYYMM.length > 0) {
      const sequenceInYYMM = docInYYMM.map(
        (el) => regexExtractYYMM(el[0]).sequence
      )
      maxSequence = Math.max(...sequenceInYYMM) + 1
    }
  } else {
    return sequenceInfo
  }
  sequenceInfo.sequence = `${sequenceInfo.abbrDocCat}${
    prefixFromYYMM.prefixDocSequence
  }${String(maxSequence).padStart(3, '0')}`

  return sequenceInfo
}

/**
 * สร้าง unique Id สำหรับหมวดเอกสาร และทำการเรียงเลขเอกสารภายในเดือน
 */

function getCurrentYearMonth(date) {
  try {
    const now = date === undefined ? new Date() : new Date(date)

    // Extract the year and month from the current date

    const year = String(now.getFullYear())
    const month = String(now.getMonth() + 1).padStart(2, '0') // Note: JavaScript months are zero-based
    const prefixDocSequence = `${year.slice(-2)}${month}`

    return { year, month, prefixDocSequence }
  } catch (error) {
    console.error('Error', error)
  }
}

function getPrefixDocId(date = undefined) {
  const prefixDocId = (date = undefined
    ? getCurrentYearMonth()
    : getCurrentYearMonth(date))
  return prefixDocId
}

function getDocsId(docsCategory) {
  try {
    generateUniqueID('CU', sequenceCounter)
    // let {sequenceCounter, lastDocsCatId} = getLastDocCatId()
  } catch (error) {
    console.error('Error', error)
  }
}

function getLastDocCatId(docsCategory) {
  try {
    const praramObj = {
      spreadSheetId: commonFieldsSpreadsheetId,
      sheetName: documentCategory,
    }

    let sequenceCounter = {}
    const { prefixDocSequence } = getCurrentYearMonth()

    // Create key (prefixDocSequence) if not exists for sequenceCounter
    sequenceCounter[prefixDocSequence] =
      sequenceCounter[prefixDocSequence] || {}

    let { data } = readDataDisplayValues(praramObj)

    data.slice(1).map((row) => {
      sequenceCounter[prefixDocSequence][row[4]] = row[5]
    })

    const lastDocsCatId = sequenceCounter[prefixDocSequence][docsCategory]

    return { sequenceCounter, lastDocsCatId }
  } catch (error) {
    console.error('Error', error)
  }
}

/* ตัวอย่างการใช้งาน 
   function test(){
    const ss = SpreadsheetApp.openById(inquirySpreadsheetId)
    const ws = ss.getSheetByName(inquiryInquiryToDo)
    const data = ws.getRange(2,1).getValues()

    console.log(data)

    let id = uniqueID(ws)
    console.log(id)

    ws.appendRow([id, 'data1', 'a', 'b'])

  }
  */
function regexExtractYYMM(docsId, sequenceLength = 3) {
  try {
    // Build the pattern dynamically based on sequenceLength
    const pattern = new RegExp(`^[A-Z]{2}(\\d{4})\\d{${sequenceLength}}$`)

    // Use the test method to check if the docsId matches the pattern
    if (pattern.test(docsId)) {
      // Use the exec method to extract the YY and MM parts
      const matchResult = pattern.exec(docsId)

      // Extract YY and MM parts
      const yymmPart = matchResult[1]

      // Extract the numeric part following YYMM based on sequenceLength
      const numericPart = docsId.substr(6, sequenceLength)

      return { preFixYYMM: yymmPart, sequence: numericPart }
    } else {
      console.log('No match found')
    }
  } catch (error) {
    console.error('Error', error)
  }
}

function uniqueID(sheetName = 'sheet1') {
  let prop = PropertiesService.getScriptProperties().getProperty(sheetName)
  let current = prop != null ? prop : 0
  let value = parseInt(current) + 1
  PropertiesService.getScriptProperties().setProperty(sheetName, value)
  return value
}
/*
// Example usage
const generatedID = generateUniqueID('AA')
console.log('Generated ID:', generatedID.uniqueID)
console.log('Timestamp:', generatedID.timestamp)

// Output the current sequenceCounter
console.log('Current sequenceCounter:', sequenceCounter)
*/

// unique ID generator
function generateUniqueId() {
  let uuid = Utilities.getUuid()
  return uuid
}
