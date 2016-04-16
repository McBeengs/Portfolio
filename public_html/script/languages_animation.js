var javax = document.getElementById("Java");
var html = document.getElementById("HTML5");
var css = document.getElementById("CSS3");
var javascript = document.getElementById("Javascript");
var bg = document.getElementsByClassName("bg");
var displayer = document.getElementById("displayer");
var language = document.getElementById("languages");
var clicked = false;
var javaClkd = false;
var htmlClkd = false;
var cssClkd = false;
var jsClkd = false;

function javaClick(){
	if (!clicked){
		$(javax).css({margin: "330px 0px 0px 46%", "border-radius": "50%", transition: "1s"});
		$(bg[0]).css({padding: "180px", transition: "0.5s"});
		$(html).css({margin: "20px 0px 0px 21%", transition: "1s"});
		$(css).css({margin: "20px 0px 0px 46%", transition: "1s"});
		$(javascript).css({margin: "20px 0px 0px 71%", transition: "1s"});
		$(displayer).css({margin: "630px 0 0 0", transition: "1s"});
		$(language).css({height: "750px", transition: "1s"});
		
		clicked = true;
		javaClkd = true;
		writeJavaText();
	} else {
		$(javax).css({margin: "20px 0px 0px 10%", "border-radius": "10px", transition: "1s"});
		$(bg[0]).css({padding: "0px", transition: "0.5s"});
		$(html).css({margin: "20px 0px 0px 33%", transition: "1s"});
		$(bg[1]).css({padding: "0px", transition: "0.5s"});
		$(css).css({margin: "20px 0px 0px 56%", transition: "1s"});
		$(bg[2]).css({padding: "0px", transition: "0.5s"});
		$(javascript).css({margin: "20px 0px 0px 78%", transition: "1s"});
		$(bg[3]).css({padding: "0px", transition: "0.5s"});
		$(displayer).css({margin: "300px 0 0 0", transition: "1s"});
		$(language).css({height: "390px", transition: "1s"});
		
		clicked = false;
		javaClkd = false;
		writeJavaText();
	}
}

function htmlClick(){
	if (!clicked){
		$(javax).css({margin: "20px 0px 0px 21%", transition: "1s"});
		$(html).css({margin: "330px 0px 0px 46%", "border-radius": "50%", transition: "1s"});
		$(bg[1]).css({padding: "180px", transition: "0.5s"});
		$(css).css({margin: "20px 0px 0px 46%", transition: "1s"});
		$(javascript).css({margin: "20px 0px 0px 71%", transition: "1s"});
		$(displayer).css({margin: "630px 0 0 0", transition: "1s"});
		$(language).css({height: "750px", transition: "1s"});
		
		clicked = true;
		htmlClkd = true;
		writeHtmlText();
	} else {
		$(javax).css({margin: "20px 0px 0px 10%", transition: "1s"});
		$(bg[0]).css({padding: "0px", transition: "0.5s"});
		$(html).css({margin: "20px 0px 0px 33%", "border-radius": "10px", transition: "1s"});
		$(bg[1]).css({padding: "0px", transition: "0.5s"});
		$(css).css({margin: "20px 0px 0px 56%", transition: "1s"});
		$(bg[2]).css({padding: "0px", transition: "0.5s"});
		$(javascript).css({margin: "20px 0px 0px 78%", transition: "1s"});
		$(bg[3]).css({padding: "0px", transition: "0.5s"});
		$(displayer).css({margin: "300px 0 0 0", transition: "1s"});
		$(language).css({height: "390px", transition: "1s"});
		
		clicked = false;
		htmlClkd = false;
		writeHtmlText();
	}
}

function cssClick(){
	if (!clicked){
		$(javax).css({margin: "20px 0px 0px 21%", transition: "1s"});
		$(html).css({margin: "20px 0px 0px 46%", transition: "1s"});
		$(css).css({margin: "330px 0px 0px 46%", "border-radius": "50%", transition: "1s"});
		$(bg[2]).css({padding: "180px", transition: "0.5s"});
		$(javascript).css({margin: "20px 0px 0px 71%", transition: "1s"});
		$(displayer).css({margin: "630px 0 0 0", transition: "1s"});
		$(language).css({height: "750px", transition: "1s"});
		
		clicked = true;
		cssClkd = true;
		writeCssText();
	} else {
		$(javax).css({margin: "20px 0px 0px 10%", transition: "1s"});
		$(bg[0]).css({padding: "0px", transition: "0.5s"});
		$(html).css({margin: "20px 0px 0px 33%", transition: "1s"});
		$(bg[1]).css({padding: "0px", transition: "0.5s"});
		$(css).css({margin: "20px 0px 0px 56%", "border-radius": "10px", transition: "1s"});
		$(bg[2]).css({padding: "0px", transition: "0.5s"});
		$(javascript).css({margin: "20px 0px 0px 78%", transition: "1s"});
		$(bg[3]).css({padding: "0px", transition: "0.5s"});
		$(displayer).css({margin: "300px 0 0 0", transition: "1s"});
		$(language).css({height: "390px", transition: "1s"});
		
		clicked = false;
		cssClkd = false;
		writeCssText();
	}
}

function jsClick(){
	if (!clicked){
		$(javax).css({margin: "20px 0px 0px 21%", transition: "1s"});
		$(html).css({margin: "20px 0px 0px 46%", transition: "1s"});
		$(css).css({margin: "20px 0px 0px 71%", transition: "1s"});
		$(javascript).css({margin: "330px 0px 0px 46%", "border-radius": "50%", transition: "1s"});
		$(bg[3]).css({padding: "180px", transition: "0.5s"});
		$(displayer).css({margin: "630px 0 0 0", transition: "1s"});
		$(language).css({height: "750px", transition: "1s"});
		
		clicked = true;
		jsClkd = true;
		writeJsText();
	} else {
		$(javax).css({margin: "20px 0px 0px 10%", transition: "1s"});
		$(bg[0]).css({padding: "0px", transition: "0.5s"});
		$(html).css({margin: "20px 0px 0px 33%", transition: "1s"});
		$(bg[1]).css({padding: "0px", transition: "0.5s"});
		$(css).css({margin: "20px 0px 0px 56%", transition: "1s"});
		$(bg[2]).css({padding: "0px", transition: "0.5s"});
		$(javascript).css({margin: "20px 0px 0px 78%", "border-radius": "10px", transition: "1s"});
		$(bg[3]).css({padding: "0px", transition: "0.5s"});
		$(displayer).css({margin: "300px 0 0 0", transition: "1s"});
		$(language).css({height: "390px", transition: "1s"});
		
		clicked = false;
		jsClkd = false;
		writeJsText();
	}
}

var text = document.getElementById("lang_text");

function writeJavaText(){
	if (javaClkd){
		text.style.fontSize = "16px";
		text.innerHTML = "(esse é o texto do java) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	} else if (!javaClkd){
		text.style.fontSize = "20px";
		text.innerHTML = "Selecione uma linguagem...";
	}
}

function writeHtmlText(){
	if (htmlClkd){
		text.style.fontSize = "16px";
		text.innerHTML = "(esse é o texto do html) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	} else if (!htmlClkd){
		text.style.fontSize = "20px";
		text.innerHTML = "Selecione uma linguagem...";
	}
}

function writeCssText(){
	if (cssClkd){
		text.style.fontSize = "16px";
		text.innerHTML = "(esse é o texto do css) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	} else if (!cssClkd){
		text.style.fontSize = "20px";
		text.innerHTML = "Selecione uma linguagem...";
	}
}

function writeJsText(){
	if (jsClkd){
		text.style.fontSize = "16px";
		text.innerHTML = "(esse é o texto do javascript) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	} else if (!jsClkd){
		text.style.fontSize = "20px";
		text.innerHTML = "Selecione uma linguagem...";
	}
}