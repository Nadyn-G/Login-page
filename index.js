let form = document.getElementById('form');
let email = document.getElementById('email');
let checkbox = document.getElementById('myCheck');
let mysuccess = document.getElementsByClassName('container-success')[0];
let roll= document.getElementsByClassName('rollUp')[0];


form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});


function checkInputs()
{
   let emailValue = email.value.trim();
   let regexp = /^\w+(?:[\.-]?\w+)*@\w+(?:[\.-]?\w+)*(?:\.(\w{2,3})+$)/;
   let found = regexp.exec(emailValue);
   let error = false;
   setErrorFor(email, '');
   setErrorFor(myCheck, ''); 
   if (emailValue === '')
   {
      setErrorFor(email, 'Email address is required');
	  error=true;
   }
   else if (found === null)
   {
      setErrorFor(email, 'Please provide a valid e-mail address');
	  error=true;
   }
    else if (found[1] === 'co')
   {
      setErrorFor(email,'We are not accepting subscriptions from Colombia emails');
	  error=true;
   }
   
   
   if (checkbox.checked == false)
   {
      setErrorFor(myCheck, 'You must accept the terms and conditions');
	  error=true;
   }
    if (error == false)
       setSuccessForAll();
}


function setErrorFor(input, message) {
	if (input === email)
	   input.parentElement.className = 'form-control error';
	else
	   input.parentElement.className = 'checkbox_container error';     
	input.parentElement.querySelector('small').innerText = message;
}

function setSuccessForAll() {
	email.parentElement.className = 'form-control success';
	myCheck.parentElement.className = 'checkbox_container success';
}

function setSuccessForAll() {
	mysuccess.style.visibility = 'visible';
	roll.style.visibility = 'hidden';
	
}