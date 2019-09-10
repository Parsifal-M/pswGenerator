//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 15
document.getElementById("length").innerHTML = "Length: 15";

//function to set length based on slider position
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
    var bodyText = "Hello! \n\nYour Password is: " + ePass + "\n\nHave a nice day!";

	//Set the form attributes 
	form.setAttribute('method', 'post');
	form.setAttribute('enctype', 'text/plain');
	form.setAttribute('action', 'mailto:' + escape(toEmail) + '?Subject=' + escape(emailSubject) + '&Body=' + escape(bodyText ? bodyText : ' ') );
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