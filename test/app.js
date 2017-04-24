const winston = require('winston')

module.exports = {
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: { },
    controllers: { },
    services: { }
  },
  config: {
    main: {
      packs: [
        require('../')
      ]
    },
    log: {
      level: 'silly',
      transports: [
        new winston.transports.Console({
          prettyPrint: false,
          colorize: false
        })
      ]
    }
  }
}
