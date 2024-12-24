 function updateDate() {
      const date = new Date();
      const formattedDate = date.toLocaleString(); // Format date and time
      document.getElementById("currentDate").textContent = formattedDate;
    }

    // Update date when the page loads
    updateDate();

    // Update date every second
    setInterval(updateDate, 1000);

