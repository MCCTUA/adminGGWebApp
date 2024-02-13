/**
 * ดึงไฟล์อื่นๆ เข้าไปร่วมกับ index (ผ่าน class ที่ชื่อ createHtmlOutputFromFile().getContent())
 * การเรียกใช้งานไปเรียกใน index.html (css เรียกในส่วน head และ Javascript เรียกก่อนปิด </body>)
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

/**
 * evaluate() แสดงไฟล์ index
 * addMetaTag + setXFrameOptionMode ทำให้เป็น Responsive บนมือถือ
 */
function render(file, argsObject) {
  let tmp = HtmlService.createTemplateFromFile(file)

  if (argsObject) {
    let keys = Object.keys(argsObject)
    keys.map((key) => (tmp[key] = argsObject[key]))
  }
  return tmp
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

// unique ID generator
function generateUniqueId() {
  let uuid = Utilities.getUuid()
  return uuid
}

// catch error
function catchError(error) {
  console.error('Error', error)
}
