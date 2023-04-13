const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
	{ readings: elReadings, mode }: { readings: number, mode: string },
	{ readings: wReadings }: { readings: number },
	elRate: number,
	wRate: number
): void => {
	if (mode === "double" && elReadings < 50) {
		monthPayments[0] = elReadings * elRate * 0.7;
	} else {
		monthPayments[0] = elReadings * elRate;
	}

	monthPayments[1] = wReadings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
	[el, water]: number[],
	electricityUserData: { readings: number, units: string },
	waterUserData: { readings: number, units: string }
): string => {
	const text: string = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

	return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);