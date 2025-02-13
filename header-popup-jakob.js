const Nav = document.getElementById('Nav');
const FullScreenNav = document.getElementById('FullScreenNav'); /* Selve kassen for fullscreen menuen*/
const BurgerMenu = document.getElementById('BurgerMenu');

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


setTimeout(function(){
    for (i = 0; i < NavListe.length; i++) {
        FullScreenNav.innerHTML += '<h1>' + NavListe[i].displayName + '</h1>' + '<br>'
        }
}, 1000);


/* Burger Linjerne i svg'en */
const BurgerLineTwo = document.getElementById('burgerlinetwo');
const BurgerLineThree = document.getElementById('burgerlinethree');
const BurgerLineOne = document.getElementById('burgerlineone')


/* BurgerMenu Toggle m. animation */
function NavPopUp () {
    FullScreenNav.style.display = FullScreenNav.style.display === 'flex' ? 'none' : 'flex';

    BurgerLineOne.classList.toggle('burgerlineone-ani')
    BurgerLineTwo.classList.toggle('burgerlinetwo-ani')
    BurgerLineThree.classList.toggle('burgerlinethree-ani')
}