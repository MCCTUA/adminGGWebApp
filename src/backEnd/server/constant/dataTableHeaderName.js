/**
 * objKey : ใช้สำหรับจัดเรียงข้อมูล (Sort) ให้ลำดับจัดเรียงตาม column (headerTableName) ใน google sheet
 * select2EndpointAndOptions : สำหรับ select2 jquery
 *    • โดย valueIndex คือ ID ใน table ที่ดึงข้อมูลมา และ
 *    • textIndex คือ ชื่อตาม valueIndex
 */
function getHeaderTableName(indentifier) {
  switch (indentifier) {
    case 'contact':
      return {
        contact: {
          headerTableName: [
            'รหัสลูกค้า',
            'ชื่อ-สกุล',
            'ชื่อเล่น',
            'รูปไลน์ profile',
            'ชื่อ Line',
            'เบอร์มือถือหลัก',
            'เบอร์มือถือสำรอง',
            'Email',
            'เพศ',
            'ตำแหน่งงาน',
            'เบอร์บริษัท',
            'เบอร์ต่อภายใน',
            'รายชื่อบริษัท',
            'ช่องทางที่ลูกค้าติดต่อเข้ามา',
            'หมายเหตุ',
            'Upload เอกสาร',
            'แก้ไข',
            'ลบ',
          ],
          objKey: [
            'contactId',
            'contactName',
            'contactNickName',
            'contactLineProfileFile',
            'contactLineName',
            'contactMobile1',
            'contactMobile2',
            'contactEmail',
            'contactSex',
            'contactPosition',
            'companyPhone1',
            'extensionNo',
            'companyName',
            'touchPointList',
            'contactNote',
            'contactDocumentFile',
            'createAt',
          ],
          indexFileDataColumn: [3, 15],
          sheetColumn: {
            name: 1,
            lineName: 4,
            contactId: 0,
            companyId: 12,
            touchPointId: 13,
            companyTbCompanyName: 4,
            touchPointTbTouchPointName: 1,
          },
          select2EndpointAndOptions: {
            getContactData: [
              {
                select2Id: 'contactName',
                valueIndex: 0,
                textIndex: 1,
                editForm: true,
              },
              {
                select2Id: 'contactLineName',
                valueIndex: 0,
                textIndex: 4,
                editForm: true,
              },
            ],
            getCompanyData: {
              select2Id: 'companyNameSelect2',
              valueIndex: 0,
              textIndex: 4,
              editForm: false,
            },
            getTochPointList: {
              select2Id: 'touchPointListSelect2',
              valueIndex: 0,
              textIndex: 1,
              editForm: false,
            },
          },
          paramsObj: {
            praramDataObj: {
              spreadSheetId: contactSpreadsheetId,
              sheetName: contactSheet,
            },
            paramsDocIdObj: {
              spreadSheetId: controlDocumentSpreadsheetId,
              sheetName: controlDocument2024Sheet,
            },
            paramsComapanyObj: {
              spreadSheetId: companySpreadsheetId,
              sheetName: companySheet,
            },
            paramsTouchPointsObj: {
              spreadSheetId: touchPointListSpreadsheetId,
              sheetName: touchPointList,
            },
            paramsContactFolder: {
              folderName: contactUploadFolder,
            },
          },
        },
      }
      break
    case 'docControl':
      return {
        objKey: ['sequence', 'abbrDocCat', 'docFor', 'createAt'],
      }
      break
  }
}
