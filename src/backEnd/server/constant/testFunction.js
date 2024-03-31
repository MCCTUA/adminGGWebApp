//  async function getData(
//     formName,
//     select2EndpointAndOptions,
//     selectedValues = false
//   ) {
//     try {
//       let index = 0

//       for (const [endpoint, config] of Object.entries(
//         select2EndpointAndOptions
//       )) {
//         if(endpoint.workSheetList){
//           const ss = await googelScriptrun(endpoint)

//           for (const [endpointInner, configInner] of Object.entries(endpointInner.workSheet)){
//             const dataInner = await getSheetDisplayData(ss, configInner.sheetName)
//             const dataInnerWithoutHeader = dataInner.slice(1)

//           }

//         } else {
//             const { data } = await googelScriptrun(endpoint)
//             const dataWithoutHeader = data.slice(1)

//             // ตรวจสอบว่า select2Id นั้นมี options หรือยัง
//             if (Array.isArray(config)) {
//               config.forEach((item, itemIndex) => {
//                 createAutoCompleteAndSelect2Options(
//                   formName,
//                   item,
//                   endpoint,
//                   dataWithoutHeader,
//                   selectedValues
//                 )
//               })
//             } else {
//               createAutoCompleteAndSelect2Options(
//                 formName,
//                 config,
//                 endpoint,
//                 dataWithoutHeader,
//                 selectedValues
//               )
//             }
//         }
//       }
//       index++
//     } catch (error) {
//       catchError(error)
//     }
//   }
