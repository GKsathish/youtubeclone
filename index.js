document.addEventListener('DOMContentLoaded', function() {
      var menu = document.querySelector('.men');
      var sidet = document.querySelector('.main-sidebar');
      var homeText = document.querySelector('.main-sidebarp');
      // Corrected selector
  
      menu.addEventListener('click', function() {
          sidet.classList.toggle('hidden');
          homeText.classList.toggle('hidden'); // Hide the <p> tag with class "active"

      });
  });
  
