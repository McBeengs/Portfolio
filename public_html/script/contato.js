

function checkForm(){
	if (feedback.name.value == ""){
		return false;
	} else if (feedback.name.value.length < 10){
		alert("O nome informado está muito pequeno");
		return false;
	}

	if (feedback.email.value == ""){
		return false;
	} else {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var validate = re.test(feedback.email.value);

		if (!validate){
			alert("O e-mail é inválido");
			return false;
		}
	}

	if (feedback.title.value == ""){
		return false;
	} else if (feedback.title.value.length < 10){
		alert("O título informado está muito pequeno");
		return false;
	}

	if (feedback.text.value == ""){
		return false;
	}

	alert("mensagem enviada com sucesso");
}