'use strict'

const header = document.querySelector('.fixed-header');
const popCourses = document.querySelector('.popular-courses');
const homeScreen = document.querySelector('.home-screen');
const quote = document.querySelector('.review-quotes');
const stickyNav = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) { //entry.isIntersecting the root with threshold 0.5 => true, mean we are in the range of 0.5
        console.log(entry); 
        header.classList.add('sticky');

    }
    else {
        console.log(entry);
        header.classList.remove('sticky')};
}

const options = {
    root: null, // the root is the target intersecting (the target is popCourses, the root element will be the element that we want out target element to intersect)
    threshold: 0, // showing the sticky nav as soon as popCourses are entirely out of view, 50% visible of our root
    // rootMargin: '70px', // optional
}

const theWatcher = new IntersectionObserver(stickyNav, options); 

theWatcher.observe(homeScreen); // we want to observe the intersection between the root and popCourses

// const theWatcher = new IntersectionObserver(
//     function(entries) {
//         const [entry] = entries;
//         entry.target.style.backgroundColor = entry.isIntersecting ? 'red' : 'black'
// }, {
//     root: null,
//     threshold: 0.2,
// })

// theWatcher.observe(popCourses);



