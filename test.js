var greet = function(name) {
  console.log("Hello " + name + "!");
}

var fibonnaci = function(n) {
    if (n == 0){
	return 0;
    }
    if (n == 1){
	return 1;
    }
    return (fibonnaci(n - 1) + fibonnaci(n - 2));
};

var gcd = function(a, b){
    if (b == 0){
	return a;
    }
    temp = a
    a = b
    b = temp % b
    return gcd(a, b);
};

var students = ["Bob", "Steve", "Kevin", "Tim", "Wally", "Tom", "Jane", "Stewart"];

var randomStudent = function() {
    rand = Math.floor(Math.random()*students.length);
    return students[rand];
};

greet("John Smith"); //Expected Result: Hello John Smith!
console.log(fibonnaci(7)); //Expected Result: 13
console.log(gcd(36, 24)); //Expected Result: 12
console.log(randomStudent());
