import fs from 'fs'
import readline from 'readline'
import stream from 'stream'

class Parser {
  constructor() {}

  logParser() {
    console.log("log parser")
  }
}

const triggerParser = new Parser()
triggerParser.logParser()
