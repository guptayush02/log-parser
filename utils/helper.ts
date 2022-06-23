import fs from 'fs'
import readline from 'readline'
import { DataInterface } from "../interface/interface"

export class Helper {
  constructor(){}

  createReadStream(inputFile: string) {
    return inputFile ? fs.createReadStream(inputFile) : {}
  }

  createFile(outputFile: string, logsArray:Object[]) {
    if (outputFile) {
      return fs.writeFile(outputFile, JSON.stringify(logsArray), (err) => {
        if (err) return err
      })
    } else {
      return {}
    }
  }

  createInterface(input: any, output: any, terminal: boolean) {
    return readline.createInterface({input, output, terminal})
  }

  generateFile(rl:any, logsArray:Object[], outputFile: string) {
    console.log("generateFile--->")
    rl.on('line', (line: string) => {
      logsArray.push(TriggerHelper.getLines(line))
      TriggerHelper.createFile(outputFile, logsArray)
    })
  }

  getLines(line: string) {
    const lineArray = line.split(' ')
    const time = lineArray[0]
    const loglevel = lineArray[2]
  
    let data:string = ''
    for (let i = 4; i < lineArray.length; i ++) {
      data = `${data} ${lineArray[i]}`
    }
  
    let parsedData:DataInterface
    parsedData = JSON.parse(data)
    return {
      timestamp: time,
      loglevel,
      errors: parsedData.details,
      transactionId: parsedData.transactionId
    }
  }
}

const TriggerHelper = new Helper()
export { TriggerHelper }
