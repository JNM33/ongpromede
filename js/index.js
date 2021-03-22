const form = document.getElementById("contactForm");

const formEvent = form.addEventListener("submit", (event) => {
	event.preventDefault();
	let mail = new FormData(form);
	sendMail(mail);
})


const sendMail = (mail) => {
	fetch("file:///C:/Users/OpenSky/Desktop/Ecole/ong/index.html/send", {
		method: "post",
		body: mail,
	}).then((response) => {
		return response.json();
	});
};



