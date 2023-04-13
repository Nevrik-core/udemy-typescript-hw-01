const currRate = "1.05";

const fetchCurr = (response: any) => {
	const data = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: any, amount: any, commission: any) {
	if (available) {
		let res = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);
