import SerialPort from 'serialport'
import { ReadLine } from 'readline'
const Readline = SerialPort.parsers.Readline


export default class UserRouter {
	private _port: SerialPort
	private _parser: any

	constructor() {
		this._port = new SerialPort('COM7', {
			baudRate: 9600
		  })
		this._parser = new Readline({delimiter: '\r\n'})
		this._port.pipe(this._parser)
		this.listenArduino()
	}

	private listenArduino() {
		this._parser.on('data', (line: any) => {
			if(line.includes('Temperature')) {
			  let arr = line.split(':')
			}
			//console.log(line);
		  })
	}
}



