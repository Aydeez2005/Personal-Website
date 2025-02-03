
// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});



// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden, .fade-in-top, .fade-in-bottom, .fade-in-left, .fade-in-right');
  hiddenElements.forEach((el) => observer.observe(el));
  
  // SCrollbar Animation
  let progress = document.getElementById('progressbar');
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  
  // Function to update the progress bar height
  function updateProgressBar() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  }
  
  // Update the progress bar on page load
  updateProgressBar();
  
  // Update the progress bar on scroll
  window.onscroll = function() {
    updateProgressBar();
  };
  
  // Drag and drop functionality
  let isDragging = false;
  let initialMousePosition = 0;
  let initialScrollPosition = 0;
  
  // Function to handle mouse down event
  function handleMouseDown(e) {
    isDragging = true;
    initialMousePosition = e.clientY;
    initialScrollPosition = window.pageYOffset;
    e.preventDefault();
  }
  
  // Function to handle mouse up event
  function handleMouseUp(e) {
    if (isDragging) {
      isDragging = false;
      e.preventDefault();
    }
  }
  
  // Function to handle mouse move event
  function handleMouseMove(e) {
    if (isDragging) {
      let mouseDifference = e.clientY - initialMousePosition;
      let scrollDifference = (mouseDifference / window.innerHeight) * totalHeight;
      let newScrollPosition = initialScrollPosition + scrollDifference;
      window.scrollTo(0, newScrollPosition);
    }
  }
  
  // Add event listeners for mouse events
  progress.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('mousemove', handleMouseMove);


// Slideshow
const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('img');
const progressBar = document.querySelector('.progress-bar');
const dots = [];

let currentIndex = 0;
let timerId;

// Create dots for each slide
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === currentIndex) {
    dot.classList.add('active');
  }
  progressBar.appendChild(dot);
  dots.push(dot);
}

// Change slide every 5 seconds
timerId = setInterval(nextSlide, 5000);
slides[0].classList.add('active');

// Change slide when arrow buttons are clicked
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
prevButton.addEventListener('click', () => {
  clearTimeout(timerId);
  prevSlide();
  timerId = setInterval(nextSlide, 5000);
});
nextButton.addEventListener('click', () => {
  clearTimeout(timerId);
  nextSlide();
  timerId = setInterval(nextSlide, 5000);
});

function prevSlide() {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function nextSlide() {slides[currentIndex].classList.remove('active');
dots[currentIndex].classList.remove('active');
currentIndex++;
if (currentIndex >= slides.length) {
currentIndex = 0;
}
slides[currentIndex].classList.add('active');
dots[currentIndex].classList.add('active');
}





// // Show Resume on Button Click
// const resume = document.querySelector('.interactive-resume');
// const resumeBtn = document.querySelector('.interactive-resume-btn');
// const wrapper = document.querySelector('.interactive-resume-wrapper');
// const closeBtn = document.querySelector('.cls-resume-btn');
// const body = document.body;

// resumeBtn.addEventListener('click', function() {
//   resume.classList.add('resume-show');
//   wrapper.classList.add('resume-wrapper-show');
//   body.classList.add('no-scroll');
// });

// closeBtn.addEventListener('click', function() {
//   wrapper.classList.remove('resume-wrapper-show');
//   resume.classList.remove('resume-show');
//   body.classList.remove('no-scroll');
// });


// const resumeNavItems = document.querySelectorAll('.resume-side-nav-content li');
// const resumeBoxes = document.querySelectorAll('.iresume-box');
// // Toggle resume box function
// function toggleResumeBox(boxName) {
//   resumeBoxes.forEach((box) => {
//     if (box.classList.contains(boxName)) {
//       box.classList.add('iresume-box-show');
//     } else {
//       box.classList.remove('iresume-box-show');
//     }
//   });
// }

// // Event listeners
// resumeNavItems.forEach((item) => {
//   item.addEventListener('click', function() {
//     const boxName = item.textContent.toLowerCase().replace(/\s+/g, '');
//     toggleResumeBox(boxName);
//   });
// });



// // Hobbies card carousel
// const hobby_carousel = document.querySelector('.hobby-content');
// const hobby_item = document.querySelectorAll('.hobby-item');
// const prevHobby = document.querySelector('.prev-hobby');
// const nextHobby = document.querySelector('.next-hobby');

// prevHobby.addEventListener('click', () => {
//   prevHobbyCard();
// });
// nextHobby.addEventListener('click', () => {
//   nextHobbyCard();
// });

// function prevHobbyCard() {
//   let currentNumber = Array.from(hobby_item).findIndex(item => item.classList.contains('active-now'));
//   hobby_item[currentNumber].classList.remove('active-now');
//   currentNumber--;
//   if (currentNumber < 0) {
//     currentNumber = hobby_item.length - 1;
//   }
//   hobby_item[currentNumber].classList.add('active-now');
// }

// function nextHobbyCard() {
//   let currentNumber = Array.from(hobby_item).findIndex(item => item.classList.contains('active-now'));
//   hobby_item[currentNumber].classList.remove('active-now');
//   currentNumber++;
//   if (currentNumber >= hobby_item.length) {
//   currentNumber = 0;
//   }
//   hobby_item[currentNumber].classList.add('active-now');
// }



// Chatbot
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotModal = document.getElementById("chatbot-modal");
const chatbotClose = document.getElementById("chatbot-close");

chatbotToggle.addEventListener("click", () => {
  chatbotModal.style.display = "flex";
});

chatbotClose.addEventListener("click", () => {
  chatbotModal.style.display = "none";
});

const chatbotSend = document.getElementById("chatbot-send");
const chatbotInput = document.getElementById("chatbot-input-field");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotSend.addEventListener("click", () => {
  const userMessage = chatbotInput.value.trim();
  if (userMessage) {
    // Append user's message to chat area
    const userMsgElem = document.createElement("p");
    userMsgElem.className = "user-message";
    userMsgElem.textContent = userMessage;
    chatbotMessages.appendChild(userMsgElem);

    // Clear the input field
    chatbotInput.value = "";

    // Scroll to the bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Here you can add code to send the message to your bot backend
  }
});