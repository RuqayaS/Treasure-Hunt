// // Real-time user tracking  - ill edit this later on
// // let activeUsers = JSON.parse(localStorage.getItem("activeUsers") || "[]");
// // const userId = Math.random().toString(36).substr(2, 9);

// // if (!activeUsers.includes(userId)) {
// //   activeUsers.push(userId);
// //   localStorage.setItem("activeUsers", JSON.stringify(activeUsers));
// // }

// // function updateUserCount() {
// //   document.getElementById("userCount").textContent = activeUsers.length;
// // }

// // window.addEventListener("storage", (e) => {
// //   if (e.key === "activeUsers") {
// //     activeUsers = JSON.parse(e.newValue);
// //     updateUserCount();
// //   }
// // });

// // window.addEventListener("beforeunload", () => {
// //   activeUsers = activeUsers.filter((id) => id !== userId);
// //   localStorage.setItem("activeUsers", JSON.stringify(activeUsers));
// // });

// import {
//   getDatabase,
//   ref,
//   set,
//   onDisconnect,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// // Initialize database
// const db = getDatabase();

// // Create a unique ID for the user
// const userId = `user_${Date.now()}`;

// // Add the user to the "activeUsers" node
// set(ref(db, `activeUsers/${userId}`), true);

// // Remove the user on disconnect
// onDisconnect(ref(db, `activeUsers/${userId}`)).remove();

// // Reference the "activeUsers" node
// const activeUsersRef = ref(db, "activeUsers");

// // Listen for changes to the "activeUsers" node
// onValue(activeUsersRef, (snapshot) => {
//   const activeUsers = snapshot.val();
//   const count = activeUsers ? Object.keys(activeUsers).length : 0;

//   // Display the count on your webpage

//   document.getElementById("userCount").textContent = count;
// });

// Added this event Listner below
 document.addEventListener("DOMContentLoaded", () => {
// Hints are here
const modal = document.getElementById("hintModal");
const hintBtn = document.querySelector(".hint-btn");
const span = document.querySelector(".close");

hintBtn.addEventListener("click", () => {
  document.getElementById("hintText").textContent = hintBtn.dataset.hint;
  modal.style.display = "block";
});

span.onclick = () => {modal.style.display = "none"};
window.onclick = (e) =>{
if (e.target === modal) {
             modal.style.display = "none"; // Hide the modal
         }
        };
      });
// Answer Check
//document.getElementById("answerForm").addEventListener("submit", (e) => {
 // e.preventDefault();
 // const form = e.target;
 // const userAnswer = document
 //   .getElementById("answerInput")
 //   .value.trim()
 //   .toLowerCase();
 // const correctAnswer = form.dataset.correctAnswer.toLowerCase();
//RUQYA
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("answerForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const form = e.target;
      const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
      const correctAnswer = form.dataset.correctAnswer.toLowerCase();
      const currentLevel = parseInt(form.dataset.level);

      if (userAnswer === correctAnswer) {
          switch (currentLevel) {
              case 1:
                  window.location.href = 'Clue01.HTML';
                  break;
              case 2:
                  window.location.href = 'Clue02.HTML';
                  break;
              case 3:
                  window.location.href = 'Clue03.HTML';
                  break;
              case 4:
                  window.location.href = 'Clue04.HTML';
                  break;
              default:
                  alert('No matching clue found.');
                  break;
          }
      } else {
          alert('Incorrect answer! Try again.');
      }
  });
});





  //  const currentLevel = parseInt(form.dataset.level);

     // Check if the user's answer is correct
 // if (userAnswer === correctAnswer) {
    // const userProgress = Math.max(
    //    currentLevel + 1,
    //    parseInt(localStorage.getItem("userProgress") || 1)
    //  );
    //  localStorage.setItem("userProgress", userProgress);
     
    // Added the page reference below if answer is correct 
   // window.location.href = "Clue_01.HTML";
  //} else {
  //  alert("Incorrect answer! Try again.");
  //}
//});



// Progress Check
// const currentPageLevel = parseInt(
//   document.getElementById("answerForm").dataset.level
// );
// const userProgress = parseInt(localStorage.getItem("userProgress") || 1);

// if (currentPageLevel > userProgress) {
//   window.location.href = `level${userProgress}.html`;
// }
