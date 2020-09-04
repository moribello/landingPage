/**
 * Define Global Variables
 *
*/
const elementList = document.querySelectorAll('section');
const navbarItems = document.querySelector('#navbar__list');
let currentSection = document.querySelector('#section1') /*initializes current selection and sets its value to section 1 */

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
    let newSec = document.createElement('li'); //creates new li element
    let elementName = elementList[i].id;    //gets element name using element list and current iteration number
    let link = document.createElement('a'); //creates link
    link.href = "#"+elementName; //creates href value
    newSec.textContent = elementName; //adds element name to text content
    //newSec.id = elementName; 
    newSec.appendChild(link);
    //add event listener for each li
    newSec.addEventListener('click', function(){
        document.getElementById(elementName).scrollIntoView({behavior:"smooth"});
    });

    navbarItems.appendChild(newSec);
    

}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function scrollToSection(evt){
    let section = event.target.id;
    section.href = "#"+event.target.id;
    console.log(section);
//    section.scrollIntoView({behavior: "smooth"});
}



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
