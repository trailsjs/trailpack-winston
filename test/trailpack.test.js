const assert = require('assert')

describe('Trailpack', () => {
  let pack
  before(() => {
    pack = global.app.packs.winston
  })
  it('should be loaded into the app.packs collection', () => {
    assert(pack)
  })
  it.skip('should create a logger once trails is configured', () => {
    assert(pack.logger)
  })
  describe('#initialize', () => {
    const oldWrite = process.stdout.write.bind(process.stdout)
    afterEach(() => {
      //process.stdout.write = oldWrite
    })
    it('app.log.silly', () => {
      global.app.log.silly('123')
    })
    it('app.log.debug', () => {
      global.app.log.debug('234')
    })
    it('app.log.info', () => {
      global.app.log.info('345')
    })
    it('app.log.warn', () => {
      global.app.log.debug('456')
    })
    it('app.log.error', () => {
      global.app.log.error('567')
    })
  })
})
