const form = document.getElementById("contactForm");

const formEvent = form.addEventListener("submit", (event) => {
	event.preventDefault();
	let mail = new FormData(form);
	sendMail(mail);
})