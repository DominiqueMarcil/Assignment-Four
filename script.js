document.querySelector('.grid__item--4').addEventListener('mouseover', function() {
    document.querySelector('.grid__item--5').classList.add('shrink');
});

document.querySelector('.grid__item--4').addEventListener('mouseout', function() {
    document.querySelector('.grid__item--5').classList.remove('shrink');
});