//Generate random password
function generate(){

    //Set password length/complexity
    let complexity = document.getElementById("slider").value;

    //Password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-";

    let password = "";

    //Create for loop to choose password characters
    for(var i = 1; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //Add password to textbox/display area
    document.getElementById("display").value = password;

    //Add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//Set default length display of 15
document.getElementById("length").innerHTML = "Length: 15";

//Set password strength notifier based on slider length
var rangeSlider = document.getElementById("slider");

rangeSlider.addEventListener('mouseup', function() {
    if (this.value >= 8) {
        document.getElementById("strengthStrong").innerHTML = "Strong"
    } else (document.getElementById("strengthStrong").innerHTML = "")
    //Weak Password
    if (this.value < 8) {
        document.getElementById("strengthWeak").innerHTML = "Weak"
    } else (document.getElementById("strengthWeak").innerHTML = "")
});


//Set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    Swal.fire(
        'Copied to Clipboard',
        '',
        'success'
      )

}

//Email the password to someone
function prepareEmail(toEmail, emailSubject, bodyText, ePass) {
	var form = document.createElement('form');
    
    var toEmail = "abc@abc.com";
    var emailSubject = "Your Randomly Generated Password";
    var ePass = document.getElementById("display").value
    var bodyText = "Hello!" + '\r\n\r\n' + "Here is your Password:" + ' ' + ePass;

	//Set the form attributes 
	form.setAttribute('method', 'post');
	form.setAttribute('enctype', 'text/plain');
	form.setAttribute('action', 'mailto:' + escape(toEmail) + '?subject=' + escape(emailSubject) + '&body=' + escape(bodyText ? bodyText : ' '));
	form.setAttribute('style', 'display:none');
	
	//Append the form to the body
	document.body.appendChild(form);

	//Submit the form
	form.submit();
	
	//Clean up
	document.body.removeChild(form);
}

//Clears the previously created passwords
function clearPassword(){
    document.getElementById("lastNums").innerHTML = "";
}
