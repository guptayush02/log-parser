import { TriggerHelper } from "../utils/helper"
import { functionMock } from "../utils/mockFunctions"

describe('Hepler function tests', () => {

  // CreateReadStream
  describe('CreateReadStream', () => {

    beforeEach(() => {
      functionMock(TriggerHelper, 'createReadStream')
    });

    it('should resolve with correct file', async () => {
      const result = TriggerHelper.createReadStream("log/app.log")
      expect(result).toEqual(true)
    })
  
    it('should not resolve because file not exists', async () => {
      const result = TriggerHelper.createReadStream("")
      expect(result).toEqual(false)
    })
  })

  // CreateFile
  describe('CreateFile', () => {

    beforeEach(() => {
      functionMock(TriggerHelper, 'createFile')
    });

    it('should resolve with correct file', async () => {
      const result = TriggerHelper.createFile("log/app.log", [])
      expect(result).toEqual(true)
    })
  
    it('should not resolve because file not exists', async () => {
      const result = TriggerHelper.createFile("", [])
      expect(result).toEqual(false)
    })
  })

  // createInterface
  describe('CreateInterface', () => {

    beforeEach(() => {
      functionMock(TriggerHelper, 'createInterface')
    });

    it('should resolve with correct file', async () => {
      const result = TriggerHelper.createInterface({}, {}, false)
      expect(result).toEqual(true)
    })

    it('should not resolve because parameters wrong', async () => {
      const result = TriggerHelper.createInterface("", {}, false)
      expect(result).toEqual(false)
    })
  })

  // getLines
  describe('GetLines', () => {

    beforeEach(() => {
      functionMock(TriggerHelper, 'getLines')
    });

    it('should resolve with correct file', async () => {
      const result = TriggerHelper.getLines("test line")
      expect(result).toEqual(true)
    })

    it('should not resolve because parameters wrong', async () => {
      const result = TriggerHelper.getLines("")
      expect(result).toEqual(false)
    })
  })
})
