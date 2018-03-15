const Trailpack = require('trailpack')
const winston = require('winston')

module.exports = class WinstonTrailpack extends Trailpack {

  bindEvents() {
    this.app.removeAllListeners('trails:log')
    this.app.on('trails:log', (level, msg = []) => this.logger.log(level, ...msg))
  }

  /**
   * Logging is a system function, and we thus initialize the logger in the
   * constructor phase, before the Trails app has started.
   */
  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })

    app.once('trails:configured', () => {
      this.logger = new winston.Logger(this.app.config.log)
      this.bindEvents()
    })
  }
}

