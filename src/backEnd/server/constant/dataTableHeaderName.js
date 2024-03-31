/**
 * objKey : ใช้สำหรับจัดเรียงข้อมูล (Sort) ให้ลำดับจัดเรียงตาม column (headerTableName) ใน google sheet
 * select2EndpointAndOptions : สำหรับ select2 jquery
 *    • โดย valueIndex คือ ID ใน table ที่ดึงข้อมูลมา และ
 *    • textIndex คือ ชื่อตาม valueIndex
 */
function getHeaderTableName(indentifier) {
  try {
    switch (indentifier) {
      case 'docControl':
        return {
          objKey: ['sequence', 'abbrDocCat', 'docFor', 'createAt'],
        }
        break
      case 'contact':
        return {
          contact: {
            headerTableName: [
              'รหัสลูกค้า',
              'ชื่อ-สกุล',
              'ชื่อ Line',
              'รูปไลน์ profile',
              'ชื่อเล่น',
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
              'contactLineName',
              'contactLineProfileFile',
              'contactNickName',
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
              lineName: 2,
              contactId: 0,
              companyId: 12,
              touchPointId: 13,
              companyTbCompanyName: 1,
              touchPointTbTouchPointName: 1,
            },
            select2EndpointAndOptions: {
              getContactData: [
                {
                  select2Id: 'contactName',
                  className: '.contactName',
                  valueIndex: 0,
                  textIndex: 1,
                  editForm: true,
                  requiredFields: [0, 1],
                },
                {
                  select2Id: 'contactLineName',
                  className: '.contactLineName',
                  valueIndex: 0,
                  textIndex: 2,
                  editForm: true,
                  requiredFields: [0, 2],
                },
              ],
              getCompanyData: {
                select2Id: 'companyNameSelect2',
                className: '.companyName',
                valueIndex: 0,
                textIndex: 1,
                editForm: false,
                requiredFields: [0, 1],
              },
              getTochPointList: {
                select2Id: 'touchPointListSelect2',
                className: '.touchPointList',
                valueIndex: 0,
                textIndex: 1,
                editForm: false,
                requiredFields: [0, 1],
              },
            },
            paramsObj: {
              paramsDataObj: {
                spreadSheetId: contactSpreadsheetId,
                sheetName: contactSheet,
              },
              paramsDocIdObj: {
                spreadSheetId: controlDocumentSpreadsheetId,
                sheetName: controlDocument2024Sheet,
              },
              paramsCompanyObj: {
                spreadSheetId: companySpreadsheetId,
                sheetName: companySheet,
              },
              paramsTouchPointsObj: {
                spreadSheetId: touchPointListSpreadsheetId,
                sheetName: touchPointList,
              },
              paramsFolder: {
                folderName: contactUploadFolder,
              },
            },
          },
        }
        break
      case 'company':
        return {
          company: {
            headerTableName: [
              'รหัสลูกค้า',
              'ชื่อบริษัท',
              'เลขผู้เสียภาษี',
              'รหัสสาขา',
              'ประเภททะเบียนนิติบุคคล',
              'ที่อยู่',
              'รหัสไปรษณีย์',
              'เบอร์โทรหลัก',
              'เบอร์โทรอื่นๆ',
              'เบอร์ Fax',
              'website',
              'email',
              'line(บริษัท)',
              'ประเภทการติดต่อ',
              'กลุ่มลูกค้าหลัก',
              'ทำธุรกิจเกี่ยวกับ',
              'เครติด Term',
              'เอกสารหนังสือรับรอง',
              'ส่งงบการเงินล่าสุด',
              'เอกสารวางบิลเก็บเช็ค',
              'รายชื่อผู้ติดต่อ',
              'รายชื่อ Line ผู้ติดต่อ',
              'คะแนนการชำระเงิน',
              'แก้ไข',
              'ลบ',
            ],
            objKey: [
              'companyId',
              'companyName',
              'companyTaxId',
              'brandId',
              'juristicType',
              'companyAddress',
              'zipCode',
              'phoneNumberMain',
              'phoneNumberOther',
              'faxNumber',
              'companyWebsite',
              'companyEmail',
              'companyLine',
              'contactCategory',
              'endCustomerCategory',
              'businessCategory',
              'creditTerm',
              'businessRegCertFile',
              'dbdFinancialStatementFile',
              'billingRegulationsFile',
              'contactName',
              'contactLineName',
              'paymentScore',
              'createAt',
            ],
            indexFileDataColumn: [18, 19, 20],
            sheetColumn: {
              companyId: 0,
              companyTaxId: 1,
              branchId: 2,
              companyName: 1,
              contactCategory: 14,
              endCustomerCategory: 15,
              businessCategory: 16,
              creditTerm: 17,
            },
            select2EndpointAndOptions: {
              getCompanyData: [
                {
                  select2Id: 'companyTaxId',
                  className: '.companyTaxId',
                  valueIndex: 0,
                  textIndex: 2,
                  requiredFields: [0, 2],
                },
                {
                  select2Id: 'companyName',
                  className: '.companyName',
                  valueIndex: 0,
                  textIndex: 1,
                  requiredFields: [0, 1],
                },
              ],
              getNormalize: {
                workSheetList: true,
                workSheet: {
                  companyJuristicType: {
                    sheetName: 'companyJuristicType',
                    select2Id: 'juristicType',
                    className: '.juristicType',
                    valueIndex: 0,
                    textIndex: 2,
                    requiredFields: [0, 2],
                  },
                  companyEndCustomerCategory: {
                    sheetName: 'companyEndCustomerCategory',
                    select2Id: 'endCustomerCategory',
                    className: '.endCustomerCategory',
                    valueIndex: 0,
                    textIndex: 2,
                    requiredFields: [0, 2],
                  },
                  companyBusinessCategory: {
                    sheetName: 'companyBusinessCategory',
                    select2Id: 'businessCategory',
                    className: '.businessCategory',
                    valueIndex: 0,
                    textIndex: 2,
                    requiredFields: [0, 2],
                  },
                },
              },
            },
            paramsObj: {
              paramsDataObj: {
                spreadSheetId: companySpreadsheetId,
                sheetName: companySheet,
              },
              paramsDocIdObj: {
                spreadSheetId: controlDocumentSpreadsheetId,
                sheetName: controlDocument2024Sheet,
              },
              paramsCompanyObj: {
                spreadSheetId: contactSpreadsheetId,
                sheetName: contactSheet,
              },
              paramsFolder: {
                folderName: companyUploadFolder,
              },
            },
          },
        }
        break
    }
  } catch (error) {
    catchError(error)
  }
}
