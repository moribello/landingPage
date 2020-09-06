Udacity Front-End Developer Project: Landing Page
====================================

Pre-requisites:
---------------
- Modern standards-compliant browser

Description:
------------
This project had several requirements, all to be performed using
JavaScript:
    - Dynamically create navigation using unordered list
    - Smoothly scroll to desired section
    - Indicate current section

Navigation:
-----------
The navigation section is displayed at the top right of the window and
is built dynamically based on the number of sections on the page - part
of the specification called for a fourth section to be added but an
unlimited number of sections may be added as long as the existing format
is followed. A variable "elementList" is declared in the *app.js* file and
later used to iterate through the number of sections on the page.

Scrolling:
----------
When the individual navigation items are initially created an event
listener is created and added to each navigation button. When clicked,
the *scrollIntoView* function is called to smoothly scroll to the desired
section.

Current Section:
----------------
An additional listener is created that waits for a scroll event; when the
page scrolls to a new section the *makeActive* function is called; this
function looks at the location of each section and, if the y top and
bottom are within the current viewport, sets an additional class for this
section to *your-active-class*. If the y values for a section are **not**
within the top of the current viewport the *your-active-class* class is
removed from a particular section. Note that while the majority of
functionality was performed within the *app.js* file one addition was made
to the *styles.css* file - an inner white shadow to the *your-active-class*
class that created a visible indicator that the currently viewed section
is the active one.
