import SerialPort from 'serialport'
const Readline = SerialPort.parsers.Readline

interface Sensor {
	title: String
	value: Number
}

export default class Parser {
	private _port: SerialPort
	private _parser: any
	private _sensorsTitles: Array<String>

	constructor() {
		this._port = new SerialPort('COM7', {
			baudRate: 9600
		  })
		this._parser = new Readline({delimiter: '\r\n'})
		this._port.pipe(this._parser)
		this._sensorsTitles = ['Temperature', 'Humidity', 'Vibration', 'Smoke']
	}

	public listenArduino(socket: any): void {
		this._parser.on('data', (line: any) => {
			this._sensorsTitles.forEach(title => {
				if(line.includes(title)) {
					const arr = line.split(':')
					const sensor: Sensor = {
					   title,
					   value: parseFloat(arr[1])
					}
					socket.emit('sensors', sensor)
		   		}
			})
		})
	}
}





