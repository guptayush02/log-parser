import { Parser } from "../parser"
const TriggerParser = new Parser('log/app.log')
import { TriggerHelper } from "../utils/helper"
import { functionMock } from "../utils/mockFunctions"
// functionMock(TriggerHelper, 'generateFile')

describe('Generate a errors log file', () => {

  // beforeAll(() => {
    
  // })

  describe('logParser', () => {

    beforeEach(() => {
      functionMock(TriggerParser, 'logParser')
    })

    it('should resolve with correct file', async () => {
      const TriggerParser = new Parser('log/app.log')
      const result = TriggerParser.logParser()
      expect(result).toEqual(true)
    })
  
    it('should not resolve because file not exists', async () => {
      const TriggerParser = new Parser('')
      const result = TriggerParser.logParser()
      expect(result).toEqual(false)
    })
  })
})
