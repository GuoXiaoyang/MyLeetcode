// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

// jshint esversion:6
var Person = function(firstAndLast) {
	// Complete the method below and implement the others similarly
    let firstName = '';
    let lasttName = '';
	this.getFirstName = function() {
		return firstName;
	};
	this.getLastName = function() {
		return lastName;
	};
	this.getFullName = function() {
		return firstName + ' ' +lastName;
	};
	this.setFirstName = function(first) {
		firstName = first;
	};
	this.setLastName = function(last) {
		lastName = last;
	};
	this.setFullName = function(firstAndLast) {
		let name = firstAndLast.split(' ');
		firstName = name[0];
		lastName = name[1];
	};
	this.setFullName(firstAndLast);
};
var bob = new Person('Bob Ross');
bob.getFullName();
