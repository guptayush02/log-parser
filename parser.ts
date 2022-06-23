import stream from 'stream'
import { TriggerHelper } from './utils/helper'

export class Parser {

  inputFile: string
  instream: any
  outstream: any

  constructor(inputFile: string) {
    this.inputFile = inputFile
    this.instream = TriggerHelper.createReadStream(this.inputFile)
    this.outstream = new stream
    this.outstream.readable = true
    this.outstream.writable = true
  }

  logParser() {
    if (this.inputFile) {
      let logsArray:Object[] = []
      const outputFile:string = process.env.npm_config_output || 'log/errors.json'

      if (this.instream) {
        const rl = TriggerHelper.createInterface(this.instream, this.outstream, false)

        TriggerHelper.generateFile(rl, logsArray, outputFile)
      }
      return true
    } else {
      return false
    }
  }
}

const inputFile:string = process?.env?.npm_config_input || 'log/app.log'
const TriggerParser = new Parser(inputFile)
TriggerParser.logParser()
