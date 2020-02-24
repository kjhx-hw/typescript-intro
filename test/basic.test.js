hw6 = require("../lib/hw6");

console.log(Date.now().toLocaleString() + '\n');

console.log('[ expected output ]');
console.log('[  actual output  ]' + '\n');

console.log('Hello, Francine!');
hw6.sayHello('Francine');

console.log('[ 8, 6, 2 ]');
console.log(hw6.doubleAll([4, 3, 1]));

console.log('20');
console.log(hw6.mapSum(["my", "fuzzy", "bunny", "slippers"], s => s.length));

val = { a: 3, b: 7, c: 4 };
console.log('21');
console.log(hw6.mapSum(["a", "b", "c", "b"], x => val[x]));

c = new hw6.Circle(10);
console.log('Circle');
console.log(c.toString());
console.log('314.1592653589793');
console.log(c.area());
c.moveTo({ x: 10, y: 20 });
console.log('Circle { radius: 10, x: 10, y: 20 }');
console.log(c);

s = new hw6.Spaceship({ x: 45, y: 55 });
console.log('Spaceship');
console.log(s.toString());
s.damage(10);
s.damage(25);
s.moveTo({ x: 15, y: -20 });
console.log('Spaceship { x: 15, y: -20, hitPoints: 65 }');
console.log(s);

s = new hw6.Spaceship(0, 0);
locs = [{ x: 13, y: 25 }, { x: 0, y: 0 }, { x: -1, y: -1 }, { x: 5, y: 7 }];
console.log('Spaceship moved to (13, 25)\nSpaceship moved to(0, 0)\nSpaceship moved to(-1, -1)\nSpaceship moved to(5, 7)');
hw6.tour(s, locs);