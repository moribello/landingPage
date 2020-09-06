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
// Add class 'active' to section when it is near top of viewport
function makeActive() {
  for (const section of elementList) {
    const box = section.getBoundingClientRect(); 
    if (box.top <= 10 && box.bottom >= 150) {
        let activeElm = document.getElementById(section.id);
        activeElm.classList.add("your-active-class")
//        console.log(section.id + " top is " + box.top)
    } else {
      let inactiveElm = document.getElementById(section.id);
        inactiveElm.classList.remove("your-active-class")
    }
  }
}



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
    newSec.appendChild(link);
    newSec.addEventListener('click', function(){
        document.getElementById(elementName).scrollIntoView({behavior:"smooth"});
    }); //add event listener for each li

    navbarItems.appendChild(newSec);
    

}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/*function scrollToSection(evt){
    let section = event.target;
    console.log(section);
    document.getElementById(event.target.id).scrollIntoView({behavior:"smooth"})
}*/



/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener("scroll", function() {
  makeActive();
});
// Build menu

// Scroll to section on link click

// Set sections as active
