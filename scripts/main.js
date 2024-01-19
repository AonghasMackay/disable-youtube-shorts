'use strict';

const shortsDataAttribute = 'is-shorts';
let shorts = document.querySelectorAll('[' + shortsDataAttribute + ']');
let shortsMenuItem = document.querySelector('[title="Shorts"]');

if(shortsMenuItem) 
{
    shortsMenuItem.remove();
}

shorts.forEach(function (shortsElement) 
{
    //delete each shorts element from the dom
    shortsElement.remove();
});

//scroll to top of the page
window.scrollTo(0, 0);