function timesAccurate(arg1, arg2) {
	let m = 0;
	const s1 = arg1.toString();
	const s2 = arg2.toString();
	try {
		if (s1.indexOf('.') !== -1) {
			m += s1.split('.')[1].length;
		}
	} catch (e) {
		throw new Error(e);
	}
	try {
		if (s2.indexOf('.') !== -1) {
			m += s2.split('.')[1].length;
		}
	} catch (e) {
		throw new Error(e);
	}
	return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}
function plusAccurate(...arg) {
	let decimalX = 0;
	let decimalY = 0;
    let result = arg.shift();
    let waitCalNum = 0;
    let m = 0;
    while (arg.length) {
	  	waitCalNum = arg.shift();
	  	try {
		  	decimalX = result.toString().split('.')[1].length;
	  	} catch (e) {
		    decimalX = 0;
	  	}
	  	try {
		    decimalY = waitCalNum.toString().split('.')[1].length;
	  	} catch (e) {
		 	decimalY = 0;
	  	}
	  	m = Math.pow(10, Math.max(decimalX, decimalY));
	  	result = (timesAccurate(result, m) + timesAccurate(waitCalNum, m)) / m;
  	}
 return result;
}
function devideAccurate(arg1, arg2) {
	const reg = /(^([-])?[1-9]\d*(\.\d+)?$)|(^([-])?0(\.\d+)?$)/;
	if (!reg.test(arg1) || !reg.test(arg2)) {
		throw new Error('arguments only be number');
		return;
	}
	return timesAccurate(arg1, 1/arg2);
}
function minusAccurate(arg1, arg2) {
	const reg = /(^([-])?[1-9]\d*(\.\d+)?$)|(^([-])?0(\.\d+)?$)/;
	if (!reg.test(arg1) || !reg.test(arg2)) {
		throw new Error('arguments only be number');
		return;
	}
	return plusAccurate(arg1, -arg2);
}

module.exports = { timesAccurate, plusAccurate, devideAccurate, minusAccurate };
