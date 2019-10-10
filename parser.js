const Readline = require('@serialport/parser-readline')
const SerialPort = require('serialport')

const Port = new SerialPort('COM7', {
  baudRate: 9600
})

const parser = new Readline()
Port.pipe(parser)

parser.on('data', async (line) => {
    let line1 = line.toString()
    let arr = line1.split(';');
    await console.log(...arr);
})