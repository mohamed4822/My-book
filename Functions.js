
    //Date function
    function updateDate() {
      const date = new Date();
      const formattedDate = date.toLocaleString(); 
      document.getElementById("currentDate").textContent = formattedDate;
    }

    updateDate();

    setInterval(updateDate, 1000);


    //Rating function
    document.addEventListener("DOMContentLoaded", () => {
      const stars = document.querySelectorAll(".star");
      const feedback = document.getElementById("feedback");
      let lastRating = null; 
  
      stars.forEach(star => {
          star.addEventListener("click", () => {
              lastRating = star.getAttribute("data-value"); 
              highlightStars(lastRating);
              feedback.innerText = `You rated us ${lastRating} out of 5. Thank you!`;
              alert(feedback.innerText);
          });
  
          star.addEventListener("mouseover", () => {
              const rating = star.getAttribute("data-value");
              highlightStars(rating);
          });
  
          star.addEventListener("mouseout", () => {
              highlightStars(lastRating); 
          });
      });
  
      function highlightStars(rating) {
          stars.forEach(star => {
              if (rating && star.getAttribute("data-value") <= rating) {
                  star.classList.add("selected");
              } else {
                  star.classList.remove("selected");
              }
            
          });
      }
  });