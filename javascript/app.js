var isWelcomeBlockVisible = false;
var isProjectBlockVisible = false;
var isAboutBlockVisible = false;

window.addEventListener('scroll', function() {
  var welcomeBlock = document.querySelector('.welcome-block');
  var projectBlock = document.querySelector('.projects-block');
  var aboutBlock = document.querySelector('.about-block');
  var scrollPosition = window.scrollY + window.innerHeight;
  var welcomeBlockPosition = welcomeBlock.offsetTop;
  var projectBlockPosition = projectBlock.offsetTop;
  var aboutBlockPosition = aboutBlock.offsetTop;

  if (scrollPosition > welcomeBlockPosition && !isWelcomeBlockVisible) {
    welcomeBlock.style.opacity = 1;
    isWelcomeBlockVisible = true;
  } else if (scrollPosition <= welcomeBlockPosition && isWelcomeBlockVisible) {
    welcomeBlock.style.opacity = 0;
    isWelcomeBlockVisible = false;
  }

  if (scrollPosition > projectBlockPosition && !isProjectBlockVisible) {
    projectBlock.style.opacity = 1;
    isProjectBlockVisible = true;
  } else if (scrollPosition <= projectBlockPosition && isProjectBlockVisible) {
    projectBlock.style.opacity = 0;
    isProjectBlockVisible = false;
  }

  if (scrollPosition > aboutBlockPosition && !isAboutBlockVisible) {
    aboutBlock.style.opacity = 1;
    isAboutBlockVisible = true;
  } else if (scrollPosition <= aboutBlockPosition && isAboutBlockVisible) {
    aboutBlock.style.opacity = 0;
    isAboutBlockVisible = false;
  }
});

document.getElementById('projects-link').addEventListener('click', function(event) {
  event.preventDefault();
  var projectsSection = document.getElementById('projects-block');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault();
  var projectsSection = document.getElementById('about-block');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});