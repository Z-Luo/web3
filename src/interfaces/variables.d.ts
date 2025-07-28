type ISize = { [key: keyof typeof EDeviceSize]: number };
type IDevices = { [key: keyof typeof EDeviceSize]: string };
type IColor = { [key: string]: string };

interface IInputColor {
	borderColor: string;
	placeholderColor: string;
	formLabelColor: string;
}

export { IColor, IDevices, IInputColor, ISize };
