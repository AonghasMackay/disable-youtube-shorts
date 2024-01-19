'use strict';

//timeout to get round irregular page load times.
//Is a bit hacky but youtube doesn't seem to consistently trigger document_end
setTimeout(function() {
    const shortsDataAttribute = 'is-shorts';
    let shorts = document.querySelectorAll('[' + shortsDataAttribute + ']');
    let guideButton = document.getElementById('guide-button');

    removeShortsMenuItem();

    shorts.forEach(function (shortsElement) 
    {
        //delete each shorts element from the dom
        shortsElement.remove();
    });

    guideButton.addEventListener('click', function() {
        removeShortsMenuItem();
    });

    //scroll to top of the page
    window.scrollTo(0, 0);
}, 1000);

function removeShortsMenuItem() {
    let shortsMenuItem = document.querySelector('[title="Shorts"]');

    if(shortsMenuItem) 
    {
        shortsMenuItem.remove();
    }
}