let projects=[
    {projectName:"driver detector",projectDesc:"this is the first project and made up of html css"},
    {projectName:"Till mark",projectDesc:"this is the ecommerce project and made up of html css php js"},
    {projectName:"SRMforum",projectDesc:"a forum where students can share the events"},
    {projectName:"Claroom",projectDesc:"Here teacher can assign the tast and students can submit the pdf"},
]

const text="I am a fullstack Developer and an Open Source Enthusiast ! "; 

let index=0;

function autowrite(){
    document.querySelector('.underText').innerHTML=text.slice(0,index);
    ++index;

    if(index>text.length){
        index=0;
    }
}

setInterval(autowrite,100);

const form = document.getElementById('form');
const DropyourMessage = document.getElementById('DropyourMessage');
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const Subject = document.getElementById('Subject');




function checkInputs() {
	// trim to remove the whitespaces
    const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const SsubjectValue = Subject.value.trim();
	const DropyourMessageValue =DropyourMessage.value.trim();
    
	
    if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
		return false;
	} else {
		setSuccessFor(fullname);
	}

	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
	} else {
		setSuccessFor(email);
	}



	alert("Form submitted succesfully");
    return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isnum(num) {
	return /^(([0-9]{5}-[0-9]{5}))$/.test(num);
}
var loader = document.querySelector('.pre-loader');
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        fade = loader;
        var intervalID = setInterval(function () {
              
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
              
              
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.1;
            } 
              
            else {
                clearInterval(intervalID);
            }
              
        }, 150);
        loader.style.display = "none";
    }
  };
  const toggleBtn = document.querySelector('.toggle-button');
  const navLinks = document.querySelector('.navbar-links');
  
  toggleBtn.addEventListener('click', function(){
      navLinks.classList.toggle("active");
      toggleBtn.classList.toggle("open");
  })
  navLinks.addEventListener('click', function(){
      navLinks.classList.toggle("active");
  })
