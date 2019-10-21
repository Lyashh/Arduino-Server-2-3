import SerialPort from 'serialport'
import TemperatureDB from '../db/models/temperature'
const Readline = SerialPort.parsers.Readline

export interface Sensor {
	title: String
	value: Number
}

export default class Parser {
	private _port: SerialPort
	private _parser: any
	private _sensorsTitles: Array<String>
	private _temperatureDB: TemperatureDB

	constructor() {
		this._port = new SerialPort('COM7', {
			baudRate: 9600
		  })
		this._parser = new Readline({delimiter: '\r\n'})
		this._port.pipe(this._parser)
		this._temperatureDB = new TemperatureDB
		this._sensorsTitles = ['Temperature', 'Humidity', 'Vibration', 'Smoke']
	}

	public listenArduino(socket: any): void {
		this._parser.on('data', (line: any) => {
			this._sensorsTitles.forEach(title => {
				if(line.includes(title)) {
					if(title == 'Vibration')
					{	
						const arr = line.split(':')
						const sensor: Sensor = {
							title,
							value: parseFloat(arr[1])
						}
						if(sensor.value) {
							socket.emit('sensors', sensor)
						}
					} else {
						const arr = line.split(':')
						const sensor: Sensor = {
							title,
							value: parseFloat(arr[1])
						}

						if(title == 'Temperature') {
							this._temperatureDB.insert(sensor)
								.then((res:any) => console.log('save to db    ' + res))
								.catch((err: any) => console.log(err))
						}
						socket.emit('sensors', sensor)
					}
					
		   		}
			})
		})
	}
}





