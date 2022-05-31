smallest module to solve the problem of JS number calculation accuracy
# To Solve
```javascript
0.1 + 0.2 = 0.30000000000000004
9 * 0.3265 = 2.9385000000000003
1.21 / 1.1 = 1.0999999999999999
1 - 0.9 = 0.09999999999999998
```
# Install
```javascript
npm i number-accurate --save
```
# Usage
```javascript
import { plusAccurate, timesAccurate, devideAccurate, minusAccurate } from 'number-accurate';

console.log(plusAccurate(0.1, 0.2)); // output 0.3
console.log(timesAccurate(9, 0.3265)); // output 2.9385
console.log(divideAccurate(1.21, 1.1)); // output 1.1
console.log(minusAccurate(1, 0.9)); // output 0.1
console.log(toFixed(0.63355, 4)); // 0.6336
```