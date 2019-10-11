import SerialPort from 'serialport'
const Readline = SerialPort.parsers.Readline

const port = new SerialPort('COM7', {
  baudRate: 9600
})

const parser = new Readline({delimiter: '\r\n'})
port.pipe(parser)


let data: Array<object> = []

parser.on('data', (line) => {
  if(line.includes('Temperature')) {
    let arr = line.split(':')
  }
  //console.log(line);
})
