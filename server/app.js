const express = require('express');

class App {
    routes;
    app = express();

    constructor(routes) {
        this.routes = routes;
        this.requestEntry()
    }

    requestEntry() {
        this.routes.forEach(route => {
            this.app[route.method](route.path, route.handler)
        })
    }

    listen(port) {
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }
}

module.exports = {
    App
}
