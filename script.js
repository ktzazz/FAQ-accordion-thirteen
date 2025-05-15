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
      // alternate the visibility of the answer. If answer is not visible OR empty, 
      // because js takes the information from the html
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }

      // Alternate the visibility of the icons
      if (answer.style.display !== "none") { // If the answer is visible
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
      } else { // if the answer is not visible
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });
  });
});

