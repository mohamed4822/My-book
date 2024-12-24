
    //Date function
    function updateDate() {
      const date = new Date();
      const formattedDate = date.toLocaleString(); 
      document.getElementById("currentDate").textContent = formattedDate;
    }

    updateDate();

    setInterval(updateDate, 1000);



            
          });
      }
  });
