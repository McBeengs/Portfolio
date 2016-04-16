var projects = document.getElementsByClassName("project");
var images = document.getElementsByClassName("fill");
var texts = document.getElementsByClassName("desc");

window.addEventListener("scroll", function(){
	var topo = window.pageYOffset;
	console.log(topo)

	if (topo == 0){
		$(projects[0]).css({height: "100px", "border-radius": "0px", transition: "1s"});
		$(images[0]).css({width: "30%", height: "100px", "border-radius": "0px", 
			margin: "0 0 0 0", "background-image": "none", transition: "1s"});
		texts[0].innerHTML = "lorem ipsum 1";
		$(texts[0]).css({transition: "1s"});
	}

	if (topo >= 100){
		$(projects[0]).css({height: "300px", "border-radius": "25px", transition: "1s"});
		$(images[0]).css({width: "320px", height: "209px", "border-radius": "25px", 
			margin: "45px 55px 0 0", "background-image": "url(img/placeholder2.png)", transition: "1s"});
		texts[0].innerHTML = "Este é um texto amostra para o 1º projeto";
		$(texts[0]).css({transition: "1s"});

		$(projects[1]).css({height: "100px", "border-radius": "0px", transition: "1s"});
		$(images[1]).css({width: "30%", height: "100px", "border-radius": "0px", 
			margin: "0 0 0 0", "background-image": "none", transition: "1s"});
		texts[1].innerHTML = "lorem ipsum 2";
		$(texts[1]).css({transition: "1s"});
	}


	if (topo >= 450){
		$(projects[0]).css({height: "100px", "border-radius": "0px", transition: "1s"});
		$(images[0]).css({width: "30%", height: "100px", "border-radius": "0px", 
			margin: "0 0 0 0", "background-image": "none", transition: "1s"});
		texts[0].innerHTML = "lorem ipsum 1";
		$(texts[0]).css({transition: "1s"});

		$(projects[1]).css({height: "300px", "border-radius": "25px", transition: "1s"});
		$(images[1]).css({width: "320px", height: "209px", "border-radius": "25px", 
			margin: "45px 55px 0 0", "background-image": "url(img/placeholder2.png)", transition: "1s"});
		texts[1].innerHTML = "Este é um texto amostra para o 2º projeto";
		$(texts[1]).css({transition: "1s"});

		$(projects[2]).css({height: "100px", "border-radius": "0px", transition: "1s"});
		$(images[2]).css({width: "30%", height: "100px", "border-radius": "0px", 
			margin: "0 0 0 0", "background-image": "none", transition: "1s"});
		texts[2].innerHTML = "lorem ipsum 3";
		$(texts[2]).css({transition: "1s"});
	}

	if (topo >= 600){
		$(projects[1]).css({height: "100px", "border-radius": "0px", transition: "1s"});
		$(images[1]).css({width: "30%", height: "100px", "border-radius": "0px", 
			margin: "0 0 0 0", "background-image": "none", transition: "1s"});
		texts[1].innerHTML = "lorem ipsum 2";
		$(texts[1]).css({transition: "1s"});

		$(projects[2]).css({height: "300px", "border-radius": "25px", transition: "1s"});
		$(images[2]).css({width: "320px", height: "209px", "border-radius": "25px", 
			margin: "45px 55px 0 0", "background-image": "url(img/placeholder2.png)", transition: "1s"});
		texts[2].innerHTML = "Este é um texto amostra para o 3º projeto";
		$(texts[2]).css({transition: "1s"});
	}
});