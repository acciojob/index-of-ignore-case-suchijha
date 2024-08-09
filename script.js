function indexOfIgnoreCase(s1, s2) {
  let result1=s1.toLowerCase();
	let result2=s2.toLowerCase();
	let result = result1.indexOf(result2);
	return result;

}

// Please do not change the code below
//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
