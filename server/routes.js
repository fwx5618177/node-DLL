const CancelController = require('./controller/cancel.controller.js')
const ConfigurationController = require('./controller/configuration.controller.js')
const MakeGuestCardEx = require('./controller/MakeGuestCardEx.controller')
const ReadGuestCardExController = require('./controller/ReadGuestCardExController.controller')

const routes = [
    {
        path: '/cancel',
        method: 'post',
        handler: new CancelController(),
    },
    {
        path: '/configuration',
        method: 'post',
        handler: new ConfigurationController(),
    },
    {
        path: '/make-guest-card-ex',
        method: 'post',
        handler: new MakeGuestCardEx(),
    },
    {
        path: '/read-guest-card-ex',
        method: 'post',
        handler: new ReadGuestCardExController(),
    }
]

module.exports = {
    routes
}