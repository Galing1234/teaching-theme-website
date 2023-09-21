document.addEventListener('DOMContentLoaded', () => {
  const menuDiv = document.querySelector('.menu') ;
  const firstStrokeMenu = document.querySelector('.first-stroke-menu') ;
  const secondStrokeMenu = document.querySelector('.second-stroke-menu') ;
  const thirdStrokeMenu = document.querySelector('.third-stroke-menu') ;
  const navDiv = document.querySelector('.nav') ;

  const main = document.querySelector('.main') ;

  const aboutMe = document.querySelector('.about-me') ;
  const aboutKids = document.querySelector('.about-kids') ;
  const myInspiration = document.querySelector('.my-inspiration') ;
  const myWayOfTeaching = document.querySelector('.my-way-of-teaching') ;
  const scheduleALesson = document.querySelector('.schedule-a-lesson') ;
  const reviews = document.querySelector('.reviews') ;
  const contact = document.querySelector('.contact') ;

  let isMenuClicked = false ;

  menuDiv.addEventListener('click', () => {
    if (!isMenuClicked) {
      isMenuClicked = true ;
      navDiv.style.left = 0 ;
      navDiv.style.pointerEvents = 'all' ;

      firstStrokeMenu.setAttribute('points', '20,5 40,25') ;
      secondStrokeMenu.setAttribute('opacity', 0) ;
      thirdStrokeMenu.setAttribute('points', '20,25 40,5') ;

      main.style.marginLeft = '240px' ;
    } else {
      isMenuClicked = false ;
      navDiv.style.left = '-250px' ;
      navDiv.style.pointerEvents = 'none' ;

      firstStrokeMenu.setAttribute('points', '15,5 45,5') ;
      secondStrokeMenu.setAttribute('opacity', 1) ;
      thirdStrokeMenu.setAttribute('points', '15,25 45,25') ;

      main.style.marginLeft = '10px' ;
    }
  }) ;
  
  if (aboutMe) {
    aboutMe.addEventListener('click', () => {
      location.href = 'teacher-mark-about-me.html' ;
    }) ;
  }

  if (aboutKids) {
    aboutKids.addEventListener('click', () => {
      location.href = 'teacher-mark-about-kids.html' ;
    }) ;
  }

  if (myInspiration) {
    myInspiration.addEventListener('click', () => {
      location.href = 'teacher-mark-my-inspiration.html' ;
    }) ;
  }

  if (myWayOfTeaching) {
    myWayOfTeaching.addEventListener('click', () => {
      location.href = 'teacher-mark-my-way-of-teaching.html' ;
    }) ;
  }

  if (scheduleALesson) {
    scheduleALesson.addEventListener('click', () => {
      location.href = 'teacher-mark-schedule-a-lesson.html' ;
    }) ;
  }

  if (reviews) {
    reviews.addEventListener('click', () => {
      location.href = 'teacher-mark-reviews.html' ;
    }) ;
  }

  if (contact) {
    contact.addEventListener('click', () => {
      location.href = 'teacher-mark-contact.html' ;
    }) ;
  }

  /*
  const headerMiddleSection = document.querySelector('.header-middle-section') ;
  const windowWidth = window.innerWidth ;

  if (windowWidth < 1000) {
    Array.from(headerMiddleSection.children).forEach(child => {
      child.style.marginRight = '300px' ;
      console.log('hi') ;
    }) ;
  } else {
    Array.from(headerMiddleSection.children).forEach(child => {
      child.style.marginRight = 'auto' ;
    }) ;

    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1000) {
        addChild(headerMiddleSection, headerMiddleSection.firstChild, deletedChild) ;
      } else {
        deleteChild(headerMiddleSectionFirstChild, headerMiddleSection.firstChild) ;
      }
    });

    function deleteChild(div, child) {
      deletedChild = localStorage.setItem(`${child}`, child) ;
      if (div.contains(child) && child) {
        div.removeChild(child) ;
      }
    }

    function addChild(div, position, child) {
      if (!div.contains(child)) {
        // Insert it at the beginning of the div
        div.insertBefore(child, position) ;
      }
    }

    let deletedChild ;
  }*/
}) ;