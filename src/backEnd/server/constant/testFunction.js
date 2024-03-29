// /**
//  * objKey : ใช้สำหรับจัดเรียงข้อมูล (Sort) ให้ลำดับจัดเรียงตาม column (headerTableName) ใน google sheet
//  * select2EndpointAndOptions : สำหรับ select2 jquery
//  *    • โดย valueIndex คือ ID ใน table ที่ดึงข้อมูลมา และ
//  *    • textIndex คือ ชื่อตาม valueIndex
//  */
// function getHeaderTableName(indentifier) {
//   const endPointParams = {
//     paramsDocIdObj: {
//       spreadSheetId: 'controlDocumentSpreadsheetId',
//       sheetName: 'controlDocument2024Sheet',
//     },
//     praramContactObj: {
//       spreadSheetId: 'contactSpreadsheetId',
//       sheetName: 'contactSheet',
//     },
//     paramsComapanyObj: {
//       spreadSheetId: 'companySpreadsheetId',
//       sheetName: 'companySheet',
//     },
//     paramsTouchPointsObj: {
//       spreadSheetId: 'touchPointListSpreadsheetId',
//       sheetName: 'touchPointList',
//     },
//     paramsFolder: {
//       contactUploadFolder: 'contactUploadFolder',
//       companyUploadFolder: 'companyUploadFolder',
//     },
//   }
//   switch (indentifier) {
//     case 'docControl':
//       return {
//         objKey: ['sequence', 'abbrDocCat', 'docFor', 'createAt'],
//       }
//       break
//     case 'contact':
//       return {
//         contact: {
//           headerTableName: [
//             'รหัสลูกค้า',
//             'ชื่อ-สกุล',
//             'ชื่อเล่น',
//             'รูปไลน์ profile',
//             'ชื่อ Line',
//             'เบอร์มือถือหลัก',
//             'เบอร์มือถือสำรอง',
//             'Email',
//             'เพศ',
//             'ตำแหน่งงาน',
//             'เบอร์บริษัท',
//             'เบอร์ต่อภายใน',
//             'รายชื่อบริษัท',
//             'ช่องทางที่ลูกค้าติดต่อเข้ามา',
//             'หมายเหตุ',
//             'Upload เอกสาร',
//             'แก้ไข',
//             'ลบ',
//           ],
//           objKey: [
//             'contactId',
//             'contactName',
//             'contactNickName',
//             'contactLineProfileFile',
//             'contactLineName',
//             'contactMobile1',
//             'contactMobile2',
//             'contactEmail',
//             'contactSex',
//             'contactPosition',
//             'companyPhone1',
//             'extensionNo',
//             'companyName',
//             'touchPointList',
//             'contactNote',
//             'contactDocumentFile',
//             'createAt',
//           ],
//           indexFileDataColumn: [3, 15],
//           sheetColumn: {
//             name: 1,
//             lineName: 4,
//             contactId: 0,
//             companyId: 12,
//             touchPointId: 13,
//             companyTbCompanyName: 1,
//             touchPointTbTouchPointName: 1,
//           },
//           select2EndpointAndOptions: {
//             getContactData: [
//               {
//                 select2Id: 'contactName',
//                 valueIndex: 0,
//                 textIndex: 1,
//                 editForm: true,
//               },
//               {
//                 select2Id: 'contactLineName',
//                 valueIndex: 0,
//                 textIndex: 4,
//                 editForm: true,
//               },
//             ],
//             getCompanyData: {
//               select2Id: 'companyNameSelect2',
//               valueIndex: 0,
//               textIndex: 1,
//               editForm: false,
//             },
//             getTochPointList: {
//               select2Id: 'touchPointListSelect2',
//               valueIndex: 0,
//               textIndex: 1,
//               editForm: false,
//             },
//           },
//           paramsObj: {
//             praramDataObj: {
//               spreadSheetId: 'contactSpreadsheetId',
//               sheetName: 'contactSheet',
//             },
//             paramsDocIdObj: {
//               spreadSheetId: 'controlDocumentSpreadsheetId',
//               sheetName: 'controlDocument2024Sheet',
//             },
//             paramsComapanyObj: {
//               spreadSheetId: 'companySpreadsheetId',
//               sheetName: 'companySheet',
//             },
//             paramsTouchPointsObj: {
//               spreadSheetId: 'touchPointListSpreadsheetId',
//               sheetName: 'touchPointList',
//             },
//             paramsFolder: {
//               contactUploadFolder: 'contactUploadFolder',
//               companyUploadFolder: 'companyUploadFolder',
//             },
//           },
//         },
//       }
//       break
//     case 'company':
//       return {
//         company: {
//           headerTableName: [
//             'รหัสลูกค้า',
//             'ชื่อบริษัท',
//             'เลขผู้เสียภาษี',
//             'รหัสสาขา',
//             'ประเภททะเบียนนิติบุคคล',
//             'ที่อยู่',
//             'รหัสไปรษณีย์',
//             'เบอร์โทรหลัก',
//             'เบอร์โทรอื่นๆ',
//             'เบอร์ Fax',
//             'website',
//             'email',
//             'line(บริษัท)',
//             'ประเภทการติดต่อ',
//             'กลุ่มลูกค้าหลัก',
//             'ทำธุรกิจเกี่ยวกับ',
//             'เครติด Term',
//             'เอกสารหนังสือรับรอง',
//             'ส่งงบการเงินล่าสุด',
//             'เอกสารวางบิลเก็บเช็ค',
//             'รายชื่อผู้ติดต่อ',
//             'รายชื่อ Line ผู้ติดต่อ',
//             'คะแนนการชำระเงิน',
//             'แก้ไข',
//             'ลบ',
//           ],
//           objKey: [
//             'companyId',
//             'companyName',
//             'companyTaxId',
//             'brandId',
//             'juristicType',
//             'companyAddress',
//             'zipCode',
//             'phoneNumberMain',
//             'phoneNumberOther',
//             'faxNumber',
//             'companyWebsite',
//             'companyEmail',
//             'companyLine',
//             'contactCategory',
//             'endCustomerCategory',
//             'businessCategory',
//             'creditTerm',
//             'businessRegCertFile',
//             'dbdFinancialStatementFile',
//             'billingRegulationsFile',
//             'contactName',
//             'contactLineName',
//             'paymentScore',
//             'createAt',
//           ],
//           indexFileDataColumn: [18, 19, 20],
//           sheetColumn: {
//             companyId: 0,
//             companyTaxId: 2,
//             branchId: 3,
//             companyName: 1,
//             contactCategory: 13,
//             endCustomerCategory: 14,
//             businessCategory: 15,
//             creditTerm: 16,
//           },
//           select2EndpointAndOptions: {},
//           paramsObj: {
//             praramDataObj: {
//               spreadSheetId: 'companySpreadsheetId',
//               sheetName: 'companySheet',
//             },
//           },
//         },
//       }
//   }
// }

// const tCon = getHeaderTableName('contact')

// console.log(tCon)

// const commonParams = {
//   praramDataObj: {
//     spreadSheetId: 'controlDocumentSpreadsheetId',
//     sheetName: 'controlDocument2024Sheet',
//   },
//   paramsFolder: {
//     contactUploadFolder: 'contactUploadFolder',
//     companyUploadFolder: 'companyUploadFolder',
//   },
// }

// const contactParams = {
//   ...commonParams,
//   paramsComapanyObj: {
//     spreadSheetId: 'companySpreadsheetId',
//     sheetName: 'companySheet',
//   },
//   paramsTouchPointsObj: {
//     spreadSheetId: 'touchPointListSpreadsheetId',
//     sheetName: 'touchPointList',
//   },
// }

// const companyParams = {
//   ...commonParams,
//   praramContactObj: {
//     spreadSheetId: 'contactSpreadsheetId',
//     sheetName: 'contactSheet',
//   },
// }
// console.log('....... Object Spread Operator : Company......')
// console.log(companyParams)
