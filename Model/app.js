const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const nameInput = document.getElementById("nameInput");
const body = document.querySelector("body");

modalBtn.addEventListener("click", function () {
  const enteredName = nameInput.value.toLowerCase();
  if (enteredName === "viratkohil") {
    displayDetails(
      "Virat Kohli born 5 November 1988 is an Indian international cricketer and the former captain of the Indian national cricket team. He is a right-handed batsman and an occasional medium-fast bowler.",
      "https://example.com/viratkohil.jpg" // Example URL for Virat Kohli's image
    );
  } else if (enteredName === "abd") {
    displayDetails(
      "He is regarded as one of the greatest cricketers in the history of the sport and as one of the best batsmen of his era. de Villiers began his international career as a wicket-keeper-batsman, but he has played most often solely as a batsman.",
      "https://example.com/abd.jpg" // Example URL for ABD's image
    );
  } else {
    alert("No such name");
  }
});

function displayDetails(details, imageUrl) {
  const modalContent = document.querySelector(".modal-container h3");
  modalContent.textContent = details;
  modal.classList.add("open-modal");
  if (imageUrl) {
    body.style.backgroundImage = `url(${imageUrl})`;
  }
}

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  body.style.backgroundImage = ""; // Reset background image
});

//simple display html details
// modalBtn.addEventListener("click",function(){
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click",function(){
//   modal.classList.remove("open-modal");
// });
