let randomNum = (max) => {
	return Math.floor(Math.random() * max);
};

let generarColor = () => {
	return `rgb(${randomNum(256)},${randomNum(256)},${randomNum(256)})`;
};

export { randomNum, generarColor };
