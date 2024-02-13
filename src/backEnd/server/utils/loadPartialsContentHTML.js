function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial)
  return htmlServ.evaluate().getContent()
}

function loadCompanyListPage() {
  return loadPartialHTML_('frontEnd/page/loadCompanyListPage')
}
function loadContactListPage() {
  return loadPartialHTML_('frontEnd/page/loadContactListPage')
}