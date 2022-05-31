function timesAccurate(...args) {
  let m = 0;
  let result = 1;
  try {
    for (let i = 0, l = args.length; i < l; i += 1) {
      if (args[i].toString().indexOf('.') !== -1) {
        m = args[i].toString().split('.')[1].length;
      }
      if (result.toString().indexOf('.') !== -1) {
        m += result.toString().split('.')[1].length;
      }
      const x = Number(result.toString().replace('.', ''));
      const y = Number(args[i].toString().replace('.', ''));
      result = x * y / Math.pow(10, m);
      m = 0;
    }
  } catch (e) {
    throw new Error(e);
  }
  return result;
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
function divideAccurate(arg1, arg2) {
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
function toFixed(value, fractionDigits = 2) {
  const t = '1'.padEnd(fractionDigits + 1, '0') - 0;
  return (Math.round(accurate.multi(value, t)) / t).toFixed(fractionDigits);
}

module.exports = { timesAccurate, plusAccurate, divideAccurate, minusAccurate, toFixed };
