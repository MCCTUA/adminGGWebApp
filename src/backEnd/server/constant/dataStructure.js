//contact input
/*
const serverFormInput = {
  contactDocumentFile: {
    toString: [Function],
    getName: [Function],
    getBytes: [Function],
    setName: [Function],
    getContentType: [Function],
    setContentType: [Function],
    getDataAsString: [Function],
    isGoogleType: [Function],
    getAllBlobs: [Function],
    setDataFromString: [Function],
    copyBlob: [Function],
    setContentTypeFromExtension: [Function],
    setBytes: [Function],
    getAs: [Function],
    contents: '',
    length: 0,
    name: '',
    type: 'application/octet-stream',
  },
  companyPhone1: '',
  contactMobile2: '',
  contactSex: 'เพศ',
  extensionNo: '',
  contactLineName: '',
  contactMobile1: '',
  contactPosition: '',
  companyName: '',
  formType: 'contact',
  contactName: 'cccccccccc',
  contactLineProfileFile: {
    toString: [Function],
    getName: [Function],
    getBytes: [Function],
    setName: [Function],
    getContentType: [Function],
    setContentType: [Function],
    getDataAsString: [Function],
    isGoogleType: [Function],
    getAllBlobs: [Function],
    setDataFromString: [Function],
    copyBlob: [Function],
    setContentTypeFromExtension: [Function],
    setBytes: [Function],
    getAs: [Function],
    contents: '',
    length: 0,
    name: '',
    type: 'application/octet-stream',
  },
  contactEmail: '',
  contactNote: 'vvvvvvvvvvv',
  contactNickName: '',
}
*/

function loadCompanyTable(updateDataTable = false) {
  loadCompanyDataTable(updateDataTable)
}

async function loadCompanyDataTable(updateDataTable) {
  try {
    showSwal()
    const tableExtraOptions = {
      tableId: 'company-table',
      hideColumns: [24, 25, 26, 27, 28],
      targetIndexShowImage: [18, 19, 20],
    }
    const { data } = await googelScriptrun('getCompanyData')
    // const { data: companyData } = await googelScriptrun('getCompanyData')
    // const { data: touchPoint } = await googelScriptrun('getTochPointList')
    const { company } = await googelScriptrun(
      'getHeaderTableName',
      'company'
    )

    // // company name
    // processData(
    //   data,
    //   companyData,
    //   contact.sheetColumn.companyId,
    //   processList,
    //   contact.sheetColumn.companyTbCompanyName
    // )
    // // touch point name
    // processData(
    //   data,
    //   touchPoint,
    //   contact.sheetColumn.touchPointId,
    //   processList,
    //   contact.sheetColumn.touchPointTbTouchPointName
    // )

    const columnLenght = data.shift().length - 4
    console.log('columnLenght', columnLenght)
    console.log('company.headerTableName.length', company.headerTableName.length)
    const res = {}

    if (columnLenght + 2 === company.headerTableName.length) {
      res.data = data.map((row) => row.slice(0, columnLenght))
      res.headersAll = company.headerTableName
    } else {
      console.log('header length not equal to data in column length')
    }
    if (!updateDataTable) {
      const table = loadDataTable(res, tableExtraOptions)
    } else {
      let table = $(`#${tableExtraOptions.tableId}`).DataTable()
      table.clear().rows.add(data).draw()
    }
  } catch (error) {
    catchError(error)
  } finally {
    hideSwal('พร้อมใช้งาน')
  }
}