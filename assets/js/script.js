onSubmit = (event) =>{
	let email = document.getElementById("Email").value;
	let url = document.getElementById("ur").value;
	fetch('https://git.heroku.com/aqueous-chamber-48923.git/register',{
		method:'post',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			email:email,
			url:url
		})
	})
	.then(response=> response.json())
	.then(response=>console.log(response))
	window.location.href = "file:///D:/kartik/javascript%20and%20html/Glitchy/glitchey/thanks1.html";

}
