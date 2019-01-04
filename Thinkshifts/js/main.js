/*var name = 'Chiamaka';
console.log(name);

var lastName = 'Okenwa';
console.log(lastName);

var age = 20;
console.log(age);

var fullAge = true;
console.log(fullAge);*/

/*var name = 'Chiamaka';
var age = 20;

console.log(name + " " + age);
console.log(age + age);

var job, isMarried;
console.log(job);

job = 'teacher';
isMarried = false;

console.log(job + ' is not ' + isMarried + ' and he is ' + age + ' years old ' + name);

age = 'twenty five';
job = 'driver';


console.log(job + ' is not ' + isMarried + ' and he is ' + age + ' years old ' + name);*/

// var birthYear = 2016 - 26;
// birthYear = birthYear + 26;
// console.log(birthYear)

// var name = 'Amaka';
// var age = 20;
// var isMarried = 'no';

// if (isMarried === 'yes') {
// 	console.log(name + ' is married!');
// }	else {
// 	console.log(name + ' will hopefully get married');
// }

// isMarried = false;

// if(isMarried) {
// 	console.log('YES')
// }	else {
// 	console.log('NO')
// }

// var amount = 201;

// if (amount <= 50) {
// 	console.log('Standard')
// } else if (amount >= 51 && amount <= 100) {
// 	console.log('Suite')
// }else if (amount >= 101 && amount <= 200) {
// 	console.log('Deluxe')
// }else {
// 	console.log('none')
// }

// var job = 'Teacher'

// // job = prompt('What does john do?');

// switch(job) {
// 	case 'teacher':
// 	console.log('john teaches kids');
// 	break;
// 	case 'driver':
// 	console.log('john drives a cab in lagos');
// 	break;
// 	case 'cop':
// 	console.log('john helps fight crime');
// 	break;
// 	default:
// 	console.log('john does something else');
// }

// var heightJohn = 64;
// var heightAlex = 64;
// var ageJohn = 17;
// var ageAlex = 17;
// var scoreJohn = heightJohn + 5 * ageJohn;
// var scoreAlex = heightAlex + 5 * ageAlex;

// if (scoreAlex > scoreJohn) {
// 	console.log('Alex wins!!!')
// } else if (scoreJohn > scoreAlex){
// 	console.log('John wins')
// } else if (scoreJohn === scoreAlex){
// 	console.log('Its a draw!!!')
// } else {
// 	console.log('none')
// }

// var names = ['john', 'jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);


// var john = ['john', 'Smith', 1990, 'designer', false];
// john.push('blue');
// john.unshift('Mr.')
// john.pop();
// john.shift();
// console.log(john.indexOf('Smith'));

// if (john.indexOf('teacher') === -1) {
// 	console.log('John is NOT a teacher');
// }
// console.log(john);


// var john = {
// 	name: 'John',
// 	lastName: 'Smith',
// 	yearOfBirth: '1990',
// 	job: 'Teacher',
// 	isMarried: false,
// };

// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);

// john.lastName = 'Miller';
// john['name'] = 'Mike'; 
// john.job = 'programmer';
// console.log(john);


// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;
// console.log(jane);

// function someFun(par){
// 	//code
// }

// var someFun = function(par){
// 	//code
// }

// //expressions
// // 3 + 4;
// // var x = 3;
// // //codinghereos.io


// function calculateAge(yearOfBirth) {
// 	var age = 2016 - yearOfBirth;
// 	return age;
// }
// var ageJohn = calculateAge(1990);
// var ageMary = calculateAge(1948);
// var ageMike = calculateAge(1969);
// // console.log(ageMary);

// function yearsUntilRetirement(name, year) {
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;
// 	if (retirement >= 0) {
// 		console.log(name + ' retires in ' + retirement + ' years.')
// 	} else {
// 		console.log(name + ' has already retired.');
// 	}
	
// }

// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);


/*var = john {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: '1990',
	job: 'Teacher',
	isMarried: false,
	family: ['Jane','Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};

//console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);*/
// var mike = {
// 	yearOfBirth: '1950',
// 	family: [],
// 	calculateAge: function() {
// 		this.age = 2016 - this.yearOfBirth;
// 	},
// 	addFamily: function(name1,name2,name3) {
// 		this.family.push(name1,name2,name3);
// 	}
// };

// mike.calculateAge();
// mike.addFamily('mark','peter', 'paul');
// console.log(mike);

// mike.family.push('mark', 'john');
// console.log(mike);

// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }
 
// var names = ['john', 'jane', 'mary', 'mark', 'bob'];

// // for (var i = 0; i < names.length; i++) {
// // 	console.log(names[i]);
// // }


// for (var i = names.length - 1; i >= 0; i--){
// 	console.log(names[i]);
// }

// //while loop
// var i = 0;
// while (i < names.length){
// 	console.log(names[i]); 
// 	i++;
// }

// for (var i = 1; i <= 5; i++) {
// 	console.log(i);

// 	if (i === 3) {
// 		break;
// 	}
// }

// // for (var i = 1; i <= 5; i++) {
// // 	if (i === 3) {
// // 		continue;
// // 	}
// // 	console.log(i);
// // }
 var years = [1995, 1997, 1999, 2000];
 var res = [];

  for (var i = 0; i < years.length; i++) {
  	age = 2018 - years[i];
  	res.push(age);
 	if ( age >= 18) {
		console.log(true)
	} else {
 		console.log(false);
	}
  }
  console.log(res);

