const App = require('./server/app.js')
const { routes } = require('./server/routes.js')

const app = new App(routes);

app.listen(3000)