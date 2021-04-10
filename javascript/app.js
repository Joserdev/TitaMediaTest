const clientID = "-d2025FO8Cn9OFrT1X09HxCA8hcgcfjOAOYb5l2iXyA"
const baseURL = `https://api.unsplash.com/search/photos?client_id=${clientID}&`


const Request = (query) => {

    baseURLF = `${baseURL}query=${query}`;
    
    if (document.getElementById('gallery')) {
        remGallery = document.getElementById('gallery');
        remGallery.remove()
    }

    var fgallery = document.createElement('div');
    fgallery.id = "gallery";
    var containerg = document.getElementById('gallery-container');
    containerg.appendChild(fgallery);

    if (fgallery) {
        firstImage = document.createElement('div');
        firstImage.classList.add("first-image");
        fgallery.appendChild(firstImage);
        text0 = document.createTextNode("CREATIVE LOGO");
        text1 = document.createTextNode("________________");
        text2 = document.createTextNode("Branding");
        for (var i = 0; i < 3; i++) {
           
            parrafo = document.createElement('p');
            firstImage.appendChild(parrafo)
            
        }
        firstImage.children[0].appendChild(text0);
        firstImage.children[0].style.fontWeight = "bolder";
        firstImage.children[0].style.letterSpacing = "5px";
        firstImage.children[1].appendChild(text1);
        firstImage.children[2].appendChild(text2);
        
        
    }
    
    fetch(baseURLF)
        .then((response) => {
            return response.json();
        }) 

        .then((data) => {
            console.log(data.results);
            resultados = data.results;
            resultados.forEach(element => {
                image = document.createElement("img");
                image.src = element.urls.regular;
                image.c
                var gallery = document.getElementById("gallery");
                gallery.appendChild(image);
            });
        })
    
}

/* Grid view - List view */

const changeView = () => {
    
    if (document.getElementById("list")) {
        list = document.getElementById("list");
        list.removeAttribute('id');
        list.id = "gallery"
    }else{
        if (document.getElementById("gallery")) {
            grid = document.getElementById("gallery");
            grid.removeAttribute('id');
            grid.id = "list"
        }
    }
    
}


/* button search */

var myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', hideShow);

function hideShow(){
  
    // toggle button background color to green
    var myBtn = document.getElementById('mybtn');
    myBtn.classList.toggle('bg-green');

    // toggle search icon to white
    var searchIcon = document.querySelector('.fas');
    searchIcon.classList.toggle('color-white');

    // toggle to expand searchbar.
    var inputEl = document.querySelector('.input');
    inputEl.classList.toggle('active-width');
    // get searchbar focus after toggle.
    inputEl.focus();
    // clear searchbar after toggle.
    inputEl.value = "";
  
  
};

// When the user clicks anywhere outside the searchbox, close it... (not working.)


const inputEl = document.querySelector('.input');
const hideSearch = function (){
  
    // toggle button background color to green
    var myBtn = document.getElementById('mybtn');
    myBtn.classList.toggle('bg-green');

    // toggle search icon to white
    var searchIcon = document.querySelector('.fas');
    searchIcon.classList.toggle('color-white');

    inputEl.classList.toggle('active-width');
} 

inputEl.addEventListener('blur', hideSearch);

/*Active button */

var header = document.querySelector(".menu");

var btns = document.querySelectorAll(".btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.querySelectorAll(".active");
    current[0].className = current[0].classList.remove("active");
    this.className += " active";
    });
}