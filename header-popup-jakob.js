let NavListe = [
    {
    displayName: 'Forside', Link: 'home.html'
    },
    {
        displayName: 'Om', Link: 'about.html'
    },
    {
        displayName: 'Kontakt', Link: 'contact.html'
    },
]

const Nav = document.getElementById('Nav');
const FullScreenNav = document.getElementById('FullScreenNav'); /* Selve kassen for fullscreen menuen*/
const BurgerMenu = document.getElementById('BurgerMenu');

/* Burger Linjerne i svg'en */
const BurgerLineTwo = document.getElementById('burgerlinetwo');
const BurgerLineThree = document.getElementById('burgerlinethree');
const BurgerLineOne = document.getElementById('burgerlineone')

/* Tilføj ting til fullscreen menuen når den loader*/
document.addEventListener("DOMContentLoaded", function () {
    for (i = 0; i < NavListe.length; i++) {
    FullScreenNav.innerHTML += '<h1>' + NavListe[i].displayName + '</h1>' + '<br>'
    }
  });

/* BurgerMenu Toggle m. animation */
function NavPopUp () {
    FullScreenNav.style.display = FullScreenNav.style.display === 'flex' ? 'none' : 'flex';

    BurgerLineOne.classList.toggle('burgerlineone-ani')
    BurgerLineTwo.classList.toggle('burgerlinetwo-ani')
    BurgerLineThree.classList.toggle('burgerlinethree-ani')
}