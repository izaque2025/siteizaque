document.addEventListener
("DOMContentLoaded",function(){
const signuptab = document.getElementById(
  'signup-tad'
);
const logintab = document.getElementById(
  'login-tad'
);
const signupform = document.getElementById(
  'signup'
);
const loginform = document.getElementById(
  'login'
);
function showSignup(){
  signupform.style.display ='block';

  loginform.style.display= 'none';

signuptab.parentElement.classList.add('active');
  logintab.parentElement.classList.remove('active');

}
function showlogin(){
  loginform.style.display ='block';

  signupform.style.display= 'none';

logintab.parentElement.classList.add('active');
signuptab.parentElement.classList.remove('active');

}

 signuptab.addEventListener('click', function (event){
  event.preventDefault();
  showSignup();
 });
 logintab.addEventListener('click', function (event){
  event.preventDefault();
  showlogin();
 });
 showSignup();


});