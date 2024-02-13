function serverFormInput(formDataObj) {
  try {
    console.log('serverFormInput :', formDataObj)
    return true
  } catch (error) {
    catchError(error)
    return false
  }
}
