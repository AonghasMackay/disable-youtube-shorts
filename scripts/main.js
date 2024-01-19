'use strict';

const shortsDataAttribute = 'is-shorts';
let shorts = document.querySelectorAll('[' + shortsDataAttribute + ']');

shorts.forEach(function (short) 
{
    //delete each shorts element from the dom
    short.remove();
});

//scroll to top of the page
window.scrollTop(0);