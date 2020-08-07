/*
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const elementList = document.querySelectorAll('section');
const navbarItems = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for(let i=0; i < elementList.length; i ++){
    let newSec = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = elementList[i].id;
/*    newSec.textContent = elementList[i].id; */
    a.setAttribute('href', "#" + elementList[i].id);
    newSec.appendChild(a);
    console.log(newSec);
    navbarItems.appendChild(newSec);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
