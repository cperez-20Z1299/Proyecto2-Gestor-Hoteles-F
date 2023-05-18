const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('onclick', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('onclick', () => {
	container.classList.remove("right-panel-active");
});