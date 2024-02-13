let Route = {}
Route.path = function (route, callback) {
  Route[route] = callback
}

function doGet(e) {

  // contact
  Route.path('contact', loadContactPage)

  if (Route[e.parameters.v]) {
    return Route[e.parameters.v]()
  } else {
    return HtmlService.createTemplateFromFile('home').evaluate()
  }
}

function loadContactPage() {
  return render('frontEnd/page/loadContactPage')
}