const slides = [
	{
		
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//sélectionner l'élément HTML correspondant
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
const bannerImg = document.querySelector('.banner-img');
const paragraph = document.querySelector('p');

//creation des bullet point
let dotsDiv = document.querySelector('.dots');
let dotHTML = '';

// sélectionner tous les éléments de classe "dot"
let dots = document.getElementsByClassName('dot');

// Index de l'image actuellement affichée
let currentIndex = 0; 

//rendre la fleche de gauche cliquable
arrowLeft.addEventListener("click", function () {
	// mise a jour de la variable currentIndex on evite le bloquage  
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateBannerImage();
  updateParagraphText();
  updateActiveDotIndex();
});

//rendre la fleche de gauche cliquable
arrowRight.addEventListener("click", function () {
	// mise a jour de la variable currentIndex on evite le bloquage
  currentIndex = currentIndex + 1;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateBannerImage();
  updateParagraphText();
  updateActiveDotIndex();
});

// mise a jour du lien de l'image 
function updateBannerImage() {
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  }
//mise à jour du text 
function updateParagraphText() {
	let currentSlide = slides[currentIndex];
	paragraph.innerHTML = currentSlide.tagLine;
}

// fonction pour mettre à jour la classe "dot_selected"
function updateActiveDotIndex() {
	for (let i = 0; i < dots.length; i++) {
	  dots[i].classList.remove('dot_selected');
	}
	dots[currentIndex].classList.add('dot_selected');
  }

//création du nombres de bullet point présent sur le carousel qui représente le mombre d'image présent dans le tableau
for (let i = 0; i < slides.length; i++) {
  dotHTML += '<div class="dot"></div>';
}

//inserer les balise DIV dans le html
dotsDiv.innerHTML = dotHTML;

// appel initial pour mettre en surbrillance le premier bullet point
updateActiveDotIndex();

// Ajouter un écouteur d'événement à chaque bullet point
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", function () {
	  currentIndex = i;
	  updateBannerImage();
	  updateParagraphText();
	  updateActiveDotIndex();
	});
  }