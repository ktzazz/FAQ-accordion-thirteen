document.addEventListener('DOMContentLoaded', function() { //this one is like a safety net, to ensure that the script will load until the html is done loading.
  const questionAnswerContainers = document.querySelectorAll('.question-answer');

  questionAnswerContainers.forEach(container => {
    const button = container.querySelector('.question-icon .arrow');
    //gets directly the button .arrow from the father container, in case there's more than one .arrow outside the container in use. It's more specific
    const answer = container.querySelector('.answer');
    const iconOpen = button.querySelector('#icon-open');
    const iconClose = button.querySelector('#icon-close');

    // in case the icon close is displayed on the css when the page loads
    iconClose.style.display = 'none';

    button.addEventListener('click', function() {
      answer.classList.toggle('active');
      // alternate the visibility of the answer using the 'active' class and CSS transitions

      // Alternate the visibility of the icons
      if (answer.classList.contains('active')) { // If the answer is visible (has the 'active' class)
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
      } else { // if the answer is not visible (doesn't have the 'active' class)
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });
  });
});

