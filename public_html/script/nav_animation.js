var cursor = document.getElementById("cursor");
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];

window.onload = function(){
	document.getElementById("top").style.display = "block";
	document.getElementById("top").style.animation = "entrance 2s";
	paint();

	setTimeout(function(){
		cursor.style.display = "none";
		writer("Bruno Monteiro", document.getElementById("name"), "25px 0 0 592px");
	}, 2000);

	setTimeout(function(){
		cursor.parentNode.removeChild(cursor);
		writer("Programador", document.getElementById("slogan"), "108px 0 0 147px");
	}, 3050);

	setTimeout(function(){
		writer("Início", document.getElementById("first"), "108px 0 0 147px");
	}, 3900);

	setTimeout(function(){
		writer("Projetos", document.getElementById("second"), "108px 0 0 147px");
	}, 4200);

	setTimeout(function(){
		writer("Contato", document.getElementById("third"), "160px 0 0 20px");
	}, 4600);

	setTimeout(function(){
		li1.style.animation = "bringUp 3s";
		li2.style.animation = "bringUp 3s";
		li3.style.animation = "bringUp 3s";

		setTimeout(function(){
			li1.style.borderTop = "solid blue";
			li2.style.borderTop = "solid blue";
			li3.style.borderTop = "solid blue";
		}, 480);
	}, 6000);

	li1.addEventListener("mouseover", function(){
		$(li1).css({"font-size": "30px", "border-top": "solid red",transition: "1s"});
	});

	li1.addEventListener("mouseout", function(){
		$(li1).css({"font-size": "20px", "border-top": "solid blue",transition: "1s"})
	});

	li2.addEventListener("mouseover", function(){
		$(li2).css({"font-size": "30px", "border-top": "solid red",transition: "1s"});
	});

	li2.addEventListener("mouseout", function(){
		$(li2).css({"font-size": "20px", "border-top": "solid blue",transition: "1s"})
	});

	li3.addEventListener("mouseover", function(){
		$(li3).css({"font-size": "30px", "border-top": "solid red",transition: "1s"});
	});

	li3.addEventListener("mouseout", function(){
		$(li3).css({"font-size": "20px", "border-top": "solid blue",transition: "1s"})
	});
}

function erase() {
	cursor.style.opacity = "0";
	setTimeout("paint()", 500);
}

function paint() {
	cursor.style.opacity = "1";
	setTimeout("erase()", 500);
}

function writer(str, el, pos) {
	var char = str.split('').reverse();		
	var typer = setInterval(function () {

		if (!char.length) 
			return clearInterval(typer);

		cursor.style.margin = pos;
		var next = char.pop();
		el.innerHTML += next;}, 40);
}

var top = document.getElementById("top");

window.addEventListener("scroll", function(){
	var topo = window.pageYOffset;

	if (topo > 200){
		document.getElementById("top").style.display = "";
		document.getElementById("top").style.animation = "";
		document.getElementById("top").style.height = "50px";
		document.getElementById("name").style.textIndent = "-999px";
		document.getElementById("name").style.fontSize = "1px";
		document.getElementById("slogan").style.textIndent = "-999px";
		document.getElementById("slogan").style.fontSize = "1px";
		document.getElementsByTagName("li")[0].style.marginTop = "8px";
		document.getElementsByTagName("li")[1].style.marginTop = "8px";
		document.getElementsByTagName("li")[2].style.marginTop = "8px";

		document.getElementsByTagName("li")[0].style.marginLeft = "22%";
		document.getElementsByTagName("li")[1].style.marginLeft = "48%";
		document.getElementsByTagName("li")[2].style.marginLeft = "70%";

		document.getElementById("separator").style.marginTop = "50px";
		document.getElementById("separator").style.transition = "1s";
		document.getElementById("top").style.transition = "1s";
		document.getElementById("name").style.transition = "1s";
		document.getElementById("slogan").style.transition = "1s";
		document.getElementsByTagName("li")[0].style.transition = "1s";
		document.getElementsByTagName("li")[1].style.transition = "1s";
		document.getElementsByTagName("li")[2].style.transition = "1s";
	} else {
		document.getElementById("top").style.display = "block";
		document.getElementById("top").style.height = "200px";
		document.getElementById("name").style.textIndent = "0px";
		document.getElementById("name").style.fontSize = "64px";
		document.getElementById("slogan").style.textIndent = "0px";
		document.getElementById("slogan").style.fontSize = "21px";
		document.getElementsByTagName("li")[0].style.marginTop = "110px";
		document.getElementsByTagName("li")[1].style.marginTop = "110px";
		document.getElementsByTagName("li")[2].style.marginTop = "110px";

		document.getElementsByTagName("li")[0].style.marginLeft = "45%";
		document.getElementsByTagName("li")[1].style.marginLeft = "60%";
		document.getElementsByTagName("li")[2].style.marginLeft = "75%";
		document.getElementById("separator").style.marginTop = "200px";
		document.getElementById("separator").style.transition = "0.5s";
		document.getElementById("top").style.transition = "0.5s";
		document.getElementById("name").style.transition = "0.5s";
		document.getElementById("slogan").style.transition = "1s";
		document.getElementsByTagName("li")[0].style.transition = "0.5s";
		document.getElementsByTagName("li")[1].style.transition = "0.5s";
		document.getElementsByTagName("li")[2].style.transition = "0.5s";
	}
})