// Create a form element
var form = document.createElement('form');
form.setAttribute('action', '/action_page.php');
form.setAttribute('target', '_blank');

// Create a div element with class 'w3-row-padding'
var div1 = document.createElement('div');
div1.setAttribute('class', 'w3-row-padding');
div1.setAttribute('style', 'margin:0 -16px;');

// Create the first half of the form for the Check In date
var div2 = document.createElement('div');
div2.setAttribute('class', 'w3-half w3-margin-bottom');
var label1 = document.createElement('label');
var i1 = document.createElement('i');
i1.setAttribute('class', 'fa fa-calendar-o');
label1.appendChild(i1);
label1.appendChild(document.createTextNode(' Check In'));
var input1 = document.createElement('input');
input1.setAttribute('class', 'w3-input w3-border');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'DD MM YYYY');
input1.setAttribute('name', 'CheckIn');
input1.setAttribute('required', '');
div2.appendChild(label1);
div2.appendChild(input1);

// Create the second half of the form for the Check Out date
var div3 = document.createElement('div');
div3.setAttribute('class', 'w3-half');
var label2 = document.createElement('label');
var i2 = document.createElement('i');
i2.setAttribute('class', 'fa fa-calendar-o');
label2.appendChild(i2);
label2.appendChild(document.createTextNode(' Check Out'));
var input2 = document.createElement('input');
input2.setAttribute('class', 'w3-input w3-border');
input2.setAttribute('type', 'text');
input2.setAttribute('placeholder', 'DD MM YYYY');
input2.setAttribute('name', 'CheckOut');
input2.setAttribute('required', '');
div3.appendChild(label2);
div3.appendChild(input2);

// Add the Check In and Check Out elements to the first div
div1.appendChild(div2);
div1.appendChild(div3);

// Create a second div element with class 'w3-row-padding'
var div4 = document.createElement('div');
div4.setAttribute('class', 'w3-row-padding');
div4.setAttribute('style', 'margin:8px -16px;');

// Create the first half of the form for the number of adults
var div5 = document.createElement('div');
div5.setAttribute('class', 'w3-half w3-margin-bottom');
var label3 = document.createElement('label');
var i3 = document.createElement('i');
i3.setAttribute('class', 'fa fa-male');
label3.appendChild(i3);
label3.appendChild(document.createTextNode(' Adults'));
var input3 = document.createElement('input');
input3.setAttribute('class', 'w3-input w3-border');
input3.setAttribute('type', 'number');
input3.setAttribute('value', '1');
input3.setAttribute('name', 'Adults');
input3.setAttribute('min', '1');
input3.setAttribute('max', '6');
div5.appendChild(label3);
div5.appendChild(input3);

// Create the second half of the form for the number of kids
var div6 = document.createElement('div');
div6.setAttribute('class', 'w3-half');
var label4 = document.createElement('label');
var i4 = document.createElement('i');
i4.setAttribute('class', 'fa fa-child');
label4.appendChild(i4);
label4.appendChild(document.createTextNode(' Kids'));
var input4 = document.createElement('input');
input4.setAttribute('class', 'w3-input w3-border');
input4.setAttribute('type', 'number');
input4.setAttribute('value', '0');
input4.setAttribute('name', 'Kids');
input4.setAttribute('min', '0');
input4.setAttribute('max', '6');
div6.appendChild(label4);
div6.appendChild(input4);

// Add the Adults and Kids elements to the second div
div4.appendChild(div5);
div4.appendChild(div6);

// Create a button element to submit the form
var button = document.createElement('button');
button.setAttribute('class', 'w3-button w3-dark-grey');
button.setAttribute('type', 'submit');
var i5 = document.createElement('i');
i5.setAttribute('class', 'fa fa-search w3-margin-right');
button.appendChild(i5);
button.appendChild(document.createTextNode(' Search availability'));

// Add all the elements to the form
form.appendChild(div1);
form.appendChild(div4);
form.appendChild(button);

// Add the form to the document
document.body.appendChild(form);