// document.addEventListener('DOMContentLoaded', function() {
//       var menu = document.querySelector('.men');
//       var sidet = document.querySelector('.main-sidebar');
//       var homeText = document.querySelector('.main-sidebarp');
//       // Corrected selector
  
//       menu.addEventListener('click', function() {
//           sidet.classList.toggle('hidden');
//           homeText.classList.toggle('hidden'); // Hide the <p> tag with class "active"

//       });
//   });
//   // AIzaSyBXiH0HirEW10DT5JULJNuDXi0Fu1rOSak
//   // AIzaSyCnI5mjRuE5f0ORI98T6bPx74YBkHE3Sg0
//   const API_KEY = 'AIzaSyBXiH0HirEW10DT5JULJNuDXi0Fu1rOSak'; // Replace with your API key
//   const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';

// async function fetchPopularVideos() {
//   try {
//     const response = await fetch(`${BASE_URL}?part=snippet&chart=mostPopular&maxResults=10&key=${API_KEY}`);
//     const data = await response.json();
//     displayVideos(data.items);
//   } catch (error) {
//     console.error('Error fetching videos:', error);
//   }
// }


// function displayVideos(videos) {
//   const videoMenu = document.getElementById('video-menu');
//   videos.forEach(video => {
//     const videoSubMenu = document.createElement('div');
//     videoSubMenu.className = 'video-sub-menu';

//     const thumbnail = document.createElement('img');
//     thumbnail.src = video.snippet.thumbnails.default.url;
//     thumbnail.alt = video.snippet.title;

//     const videoLink = document.createElement('a');
//     videoLink.href = `/play.html?videoId=${video.id}`; // Pass video ID to play.html
//     videoLink.className = 'video-sub-inner';

//     const videoThumbnail = document.createElement('img');
//     videoThumbnail.src = video.snippet.thumbnails.default.url;
//     videoThumbnail.alt = video.snippet.title;

//     const videoDescription = document.createElement('p');
//     videoDescription.textContent = video.snippet.title;

//     videoLink.appendChild(videoThumbnail);
//     videoLink.appendChild(videoDescription);
//     videoSubMenu.appendChild(thumbnail);
//     videoSubMenu.appendChild(videoLink);
//     videoMenu.appendChild(videoSubMenu);
//   });
// }

// // Fetch popular videos when the page loads
// window.onload = fetchPopularVideos;
// document.addEventListener('DOMContentLoaded', () => {

//   var menu = document.querySelector('.men');
//   var sidet = document.querySelector('.main-sidebar');
//   var homeText = document.querySelector('.main-sidebarp');
//   // Corrected selector

//   menu.addEventListener('click', function() {
//       sidet.classList.toggle('hidden');
//       homeText.classList.toggle('hidden'); // Hide the <p> tag with class "active"

//   });
//   // const searchButton = document.getElementById('search-button');
//   // const searchBar = document.getElementById('search-bar');

//   // searchButton.addEventListener('click', () => {
//   //     const query = searchBar.value;
//   //     alert(`Search for: ${query}`);
//   //     // Implement search functionality here
//   //     searchmethod(query);
//   // });
//   const searchBar = document.getElementById('searchBar');
//   const searchButton = document.getElementById('searchButton');
//   const videoMenu = document.getElementById('video-menu');
//   document.querySelectorAll('.navmiddle input').forEach(function(input) {
//     input.style.border = 'none';
// });

//   searchButton.addEventListener('click', () => {
//       const query = searchBar.value;
//       alert(`Search for: ${query}`);
//       // Implement search functionality here
//       searchMethod(query);
//   });
  
//   async function searchMethod(query) {
//       try {
//           const response = await fetch(`${BASE_URL}?part=snippet&q=${query}&maxResults=10&key=${API_KEY}`);
//           const data = await response.json();
//           displayVideos(data.items);
//       } catch (error) {
//           console.error('Error fetching videos:', error);
//       }
//   }
//   const sidebarLinks = document.querySelectorAll('.sidebar-link');
//   const activeLink = localStorage.getItem('activeLink');
//   if (activeLink) {
        
  

 
// document.querySelector(`[data-link="${activeLink}"]`).classList.add('active');
// }






//   sidebarLinks.forEach(link => {
//       link.addEventListener('click', (event) => {
//           event.preventDefault();
//           const url = link.getAttribute('data-link');
//           // alert(`Navigating to: ${url}`);
//           window.location.href = url;
//           // Implement navigation functionality here
//       });
//   });
// });

// function filterVideos(category) {
//   alert(`Filter videos by: ${category}`);
//   // Implement filter functionality here
// }
const API_KEY = 'AIzaSyBXiH0HirEW10DT5JULJNuDXi0Fu1rOSak';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';
document.addEventListener('DOMContentLoaded', function() {
  // Sidebar link navigation and active state
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  // Set the active link based on local storage
  const activeLink = localStorage.getItem('activeLink');
  if (activeLink) {
      const activeElement = document.querySelector(`[data-link="${activeLink}"]`);
      if (activeElement) {
          activeElement.classList.add('active');
      }
  }

  sidebarLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const url = this.getAttribute('data-link');

          // Remove active class from all links
          sidebarLinks.forEach(link => link.classList.remove('active'));

          // Add active class to the clicked link
          this.classList.add('active');

          // Store the active link in local storage
          localStorage.setItem('activeLink', this.getAttribute('data-link'));

          // Navigate to the URL
          window.location.href = url;
      });
  });

  // Function to fetch and display popular videos
  async function fetchPopularVideos() {
      try {
          const response = await fetch(`${BASE_URL}?part=snippet&chart=mostPopular&maxResults=10&key=${API_KEY}`);
          const data = await response.json();
          displayVideos(data.items);
      } catch (error) {
          console.error('Error fetching videos:', error);
      }
  }

  // Function to display videos
  function displayVideos(videos) {
      const videoMenu = document.getElementById('video-menu');
      videoMenu.innerHTML = ''; // Clear previous videos
      videos.forEach(video => {
          const videoSubMenu = document.createElement('div');
          videoSubMenu.className = 'video-sub-menu';

          const thumbnail = document.createElement('img');
          thumbnail.src = video.snippet.thumbnails.default.url;
          thumbnail.alt = video.snippet.title;

          const videoLink = document.createElement('a');
          videoLink.href = `/play.html?videoId=${video.id}`; // Pass video ID to play.html
          videoLink.className = 'video-sub-inner';

          const videoThumbnail = document.createElement('img');
          videoThumbnail.src = video.snippet.thumbnails.default.url;
          videoThumbnail.alt = video.snippet.title;

          const videoDescription = document.createElement('p');
          videoDescription.textContent = video.snippet.title;

          videoLink.appendChild(videoThumbnail);
          videoLink.appendChild(videoDescription);
          videoSubMenu.appendChild(thumbnail);
          videoSubMenu.appendChild(videoLink);
          videoMenu.appendChild(videoSubMenu);
      });
  }

  // Fetch popular videos on load
  window.onload = fetchPopularVideos;

  // Search functionality
  const searchBar = document.getElementById('searchBar');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
      const query = searchBar.value;
      alert(`Search for: ${query}`);
      searchMethod(query);
  });

  async function searchMethod(query) {
      try {
          const response = await fetch(`${BASE_URL}?part=snippet&q=${query}&maxResults=10&key=${API_KEY}`);
          const data = await response.json();
          displayVideos(data.items);
      } catch (error) {
          console.error('Error fetching videos:', error);
      }
  }
});

function filterVideos(category) {
  alert(`Filter videos by: ${category}`);
  // Implement filter functionality here
}
