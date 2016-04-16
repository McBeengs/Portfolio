var cursor = document.getElementById("cursor");
var text = document.getElementById("text");
var textbox = document.getElementById("textbox");
var string = "";
var temp = "package bm_portfolio;\n\nimport java.io.FileNotFoundException;\nimport java.io.FileReader;\nimport java.util.logging.Level;\n" + "import java.util.logging.Logger;\nimport javax.script.ScriptEngineManager;\nimport javax.script.ScriptEngine;\nimport javax.script.ScriptException;" + "	\n\npublic class teste {\n\n    public static void main(String[] args) {\n        Start str = new Start();\n\n        str.run();\n    }" + "\n\n    private static class Start implements Runnable {\n        @Override\n        public void run() {\n            try {\n                " +"ScriptEngineManager factory = new ScriptEngineManager();\n                ScriptEngine engine = factory.getEngineByName(\"JavaScript\");\n\n        " +"        engine.eval(new FileReader(\"printText.js\"));\n\n            } catch (ScriptException ex) {\n                " + "Logger.getLogger(teste.class.getName()).log(Level.SEVERE, null, ex);\n            } catch (FileNotFoundException ex) {\n                " +"Logger.getLogger(teste.class.getName()).log(Level.SEVERE, null, ex);\n            }\n        }\n    }\n}\n\n\n"  +"     /*\n      *  Scripts are ready to go, (Logger.getLogger(this.class.getName()).log(Level.FINEST, null, \"${name}.class is up to date\");" +	"\n      *\n      *\n      *  Digite \"startSite();\" para começar...\n      */\n\n\n>";
var c = 0;
var i = 0;
var pressedShift = false;

function erase() {
	cursor.style.opacity = "0";
	setTimeout("paint()", 500);
}

function paint() {
	cursor.style.opacity = "1";
	setTimeout("erase()", 500);
}

window.onload = function() {
	paint();
	setTimeout("typeSampleText()", 3000);
	setTimeout("typeCommand(624)", 9800);
}

function writer(str, el) {
	var char = str.split('').reverse();		
	var typer = setInterval(function () {

		if (!char.length) 
			return clearInterval(typer);

		cursor.style.margin = "0 0 0 -100px";
		window.scrollBy(0, 100);
		var next = char.pop();
		el.innerHTML += next;}, 3);

	paint();
}

function typeSampleText() {
	writer(temp, textbox);
}

function typeCommand(posY){
	document.body.addEventListener("keydown", function(ev){
		var tecla = ev.keyCode || ev.which;
		var posX = 43;
		var temp;

		switch(tecla){
			case 16:
			pressedShift = true;
			break;

			case 81:
			if (pressedShift == true) {
				temp = "Q";
			} else {
				temp = "q"
			}

			string += temp;
			c++;
			i = 
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 87:
			if (pressedShift == true) {
				temp = "W";
			} else {
				temp = "w";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 69:
			if (pressedShift == true) {
				temp = "E";
			} else {
				temp = "e";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 82:
			if (pressedShift == true) {
				temp = "R";
			} else {
				temp = "r";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 84:
			if (pressedShift == true) {
				temp = "T";
			} else {
				temp = "t";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 89:
			if (pressedShift == true) {
				temp = "Y";
			} else {
				temp = "y";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 85:
			if (pressedShift == true) {
				temp = "U";
			} else {
				temp = "u";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 73:
			if (pressedShift == true) {
				temp = "I";
			} else {
				temp = "i";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 79:
			if (pressedShift == true) {
				temp = "O";
			} else {
				temp = "o";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 80:
			if (pressedShift == true) {
				temp = "P";
			} else {
				temp = "p";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 65:
			if (pressedShift == true) {
				temp = "A";
			} else {
				temp = "a";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 83:
			if (pressedShift == true) {
				temp = "S";
			} else {
				temp = "s";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 68:
			if (pressedShift == true) {
				temp = "D";
			} else {
				temp = "d";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 70:
			if (pressedShift == true) {
				temp = "F";
			} else {
				temp = "f";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 71:
			if (pressedShift == true) {
				temp = "G";
			} else {
				temp = "g";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 72:
			if (pressedShift == true) {
				temp = "H";
			} else {
				temp = "h";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 74:
			if (pressedShift == true) {
				temp = "J";
			} else {
				temp = "j";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 75:
			if (pressedShift == true) {
				temp = "K";
			} else {
				temp = "k";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 76:
			if (pressedShift == true) {
				temp = "L";
			} else {
				temp = "l";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 186:
			if (pressedShift == true) {
				temp = "Ç";
			} else {
				temp = "ç";
			}
		
			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 90:
			if (pressedShift == true) {
				temp = "Z";
			} else {
				temp = "z";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 88:
			if (pressedShift == true) {
				temp = "X";
			} else {
				temp = "x";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 67:
			if (pressedShift == true) {
				temp = "C";
			} else {
				temp = "c";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 86:
			if (pressedShift == true) {
				temp = "V";
			} else {
				temp = "v";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 66:
			if (pressedShift == true) {
				temp = "B";
			} else {
				temp = "b";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 78:
			if (pressedShift == true) {
				temp = "N";
			} else {
				temp = "n";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 77:
			if (pressedShift == true) {
				temp = "M";
			} else {
				temp = "m";
			}

			string += temp;
			c++;
			i = 0;
			pressedShift = false;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 191:
			string += ";";
			c++;
			i = 0;
			posX = (posX + (8*c));
			cursor.style.margin = posY + "px 0 0 " + posX + "px";
			break;

			case 8:
			var temp = string;
			string = temp.substring(0, (temp.length)-1);

			if (c>0){
				c--;
				i++;

				//Não me orgulho disso
				var fix = parseInt(document.getElementById("cursor").getAttribute("style").substring(34, 40));
				cursor.style.margin = posY + "px 0 0 " + (fix - 8) + "px";
				text.style.color = "white";
			}
			break;

			case 57:
			if (pressedShift == true){
				string += "(";
				pressedShift = false;
				c++;
				i = 0;
				posX = (posX + (8*c));
				cursor.style.margin = posY + "px 0 0 " + posX + "px";
			}
			break;

			case 48:
			if (pressedShift == true) {
				string += ")";
				pressedShift = false;
				c++;
				i = 0;
				posX = (posX + (8*c));
				cursor.style.margin = posY + "px 0 0 " + posX + "px";
			}
			break;

			case 13:
			if (string != "startSite();") {
				text.style.color = "red";
				writer("    \\\\O código digitado não coincide com o método \"startSite();\". Tente novamente", text);
			} else {
				endAnimation();
			}
		}

		text.innerHTML = string;
		window.scrollBy(0, 2000);
		text.style.display = "block";
	});
}

function endAnimation() {
	text.parentNode.removeChild(text);
	cursor.parentNode.removeChild(cursor);
	var less = textbox.innerHTML;
	var char = less.split('');
	var init;

	var eraser = setInterval(function (){
		if (!char.length) 
			return clearInterval(eraser);

		less = less.substring(0, less.length - 1);
		textbox.innerHTML = less;

		window.scrollBy(0, -0.001);

		if (less.length == 0)
			return clearInterval(eraser);}, 1);

	setTimeout(function() {
		var intro = document.getElementById("intro");
		intro.parentNode.removeChild(intro);

		document.body.style.background = "#0d0d0d";

		var temp = document.createElement("p");
		
		document.body.appendChild(temp);

		init = document.getElementsByTagName("p")[0];
		init.style.color = "white";
		init.style.padding = "20px";
		init.style.position = "absolute";
	}, 5500);

	setTimeout(function() {
		init.innerHTML = "Redirecting to the index..."
	}, 6100)

	setTimeout(function() {
		window.location.replace("home.html");
	}, 6700)
}