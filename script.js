// Grid Item 4 Animation Trigger 5
document.querySelector('.grid__item--4').addEventListener('mouseover', function() {
    document.querySelector('.grid__item--5').classList.add('shrink');
});

document.querySelector('.grid__item--4').addEventListener('mouseout', function() {
    document.querySelector('.grid__item--5').classList.remove('shrink');
});


// Grid Item 8 Trigger 9 Animation
// Function to handle the animationend event for grid__item--8
function handleGrid8AnimationEnd() {
    document.querySelector('.grid__item--9').style.display = 'block';
    document.querySelector('.grid__item--9').classList.add('moveUpDown');
    // Reattach the event listener for grid__item--8
    document.querySelector('.grid__item--8').addEventListener('animationend', handleGrid8AnimationEnd);
}

// Attach the event listener for grid__item--8 initially
document.querySelector('.grid__item--8').addEventListener('animationend', handleGrid8AnimationEnd);

// Function to handle the animationend event for grid__item--9
function handleGrid9AnimationEnd() {
    let item8 = document.querySelector('.grid__item--8');
    item8.classList.remove('grid__item--8');
    void item8.offsetWidth;
    item8.classList.add('grid__item--8');
    item8.style.animation = 'typing 4s steps(40), blink-caret .75s step-end infinite';
    document.querySelector('.grid__item--9').style.display = 'none';
    document.querySelector('.grid__item--9').addEventListener('animationend', handleGrid9AnimationEnd);
}

document.querySelector('.grid__item--8').addEventListener('animationend', handleGrid8AnimationEnd);
document.querySelector('.grid__item--9').addEventListener('animationend', handleGrid9AnimationEnd);

function handleGrid8AnimationEnd() {
    document.querySelector('.grid__item--9').style.display = 'block';
    document.querySelector('.grid__item--9').classList.add('moveUpDown');
}

// Attach the event listener for grid__item--9 initially
document.querySelector('.grid__item--9').addEventListener('animationend', handleGrid9AnimationEnd);
