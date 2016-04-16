var sliderFilm = document.getElementById("slide-film");
var slidesCont = document.querySelectorAll('.slide').length;
var sliderLength;
var width = 0;
var c = 0;

sliderFilm.style.width = 1200 * slidesCont + "px";

var primeiroSlide = document.querySelector(".slide");
var larguraPrimeiroSlide = primeiroSlide.width;
larguraSlider = parseInt(larguraPrimeiroSlide);
sliderFilm.style.width = larguraSlider * slidesCont + "px";

function next(){
	c++;

	if (c >= slidesCont){
		c = 0;
	}

	sliderFilm.style.transform = "translate(-" + 1200*c + "px)";
}

function before(){
	c--;

	if (c < 0){
		c = slidesCont - 1;
	}

	sliderFilm.style.transform = "translate(-" + 1200*c + "px)";
}

setInterval("next()", 7000);

var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("mouseover", function(){
	$(leftArrow).css({padding: "5px", opacity: "1", transition: "1s"});
});

leftArrow.addEventListener("mouseout", function(){
	$(leftArrow).css({padding: "0px", opacity: "0.65", transition: "1s"})
});

rightArrow.addEventListener("mouseover", function(){
	$(rightArrow).css({padding: "5px", opacity: "1", transition: "1s"});
});

rightArrow.addEventListener("mouseout", function(){
	$(rightArrow).css({padding: "0px", opacity: "0.65", transition: "1s"})
});