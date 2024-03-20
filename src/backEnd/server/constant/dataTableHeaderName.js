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
          select2EndpointAndOptions: {
            getCompanyData: {
              select2Id: 'companyNameSelect2',
              valueIndex: 0,
              textIndex: 4,
            },
            getTochPointList: {
              select2Id: 'touchPointListSelect2',
              valueIndex: 0,
              textIndex: 1,
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
