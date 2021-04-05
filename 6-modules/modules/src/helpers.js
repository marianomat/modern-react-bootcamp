let choice = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

let remove = (arr, item) => {
	let itemIndex = arr.indexOf(item);
	return arr.splice(itemIndex, 1);
};

export { choice, remove };
