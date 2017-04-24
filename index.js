const Trailpack = require('trailpack')
const winston = require('winston')

module.exports = class WinstonTrailpack extends Trailpack {

  async initialize () {
    this.app.log = new winston.Logger(this.app.config.log)
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

