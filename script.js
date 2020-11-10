function cls(val) {
	document.getElementById("display").value = val;
}

function math(val) {
	document.getElementById("display").value += val;
}

function equal() {
	try {
		cls(eval(document.getElementById("display").value))
	} catch (equal) {
		cls('Error')
	}
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length - 1);
}

function del() {
	var value = document.getElementById("display").value;
	document.getElementById("display").value = value.substr(0, value.length - 1);
}

function sqrt() {
	var x = document.getElementById("display").value;
	document.getElementById("display").value = Math.sqrt(x);
}

function power() {
	var x = document.getElementById("display").value;
	document.getElementById("display").value = Math.pow(x, 2);
}

function cube() {
	var x = document.getElementById("display").value;
	document.getElementById("display").value = Math.pow(x, 3);
}