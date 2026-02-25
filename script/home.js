// element select

const allJobCards = document.querySelectorAll('.card');
const interviewCountText = document.getElementById('interview-number');
const rejectedCountText = document.getElementById('rejected-number');

const allTabBtn = document.querySelector('.btn-primary');
const interviewTabBtn = document.getElementById('btn-interview');
const rejectedTabBtn = document.querySelectorAll('.btn-outline')[1];

const noJobsSection = document.getElementById("no-jobs");

// count 
let interviewCount = 0;
let rejectedCount = 0;

// card btn logic
for (let i = 0; i < allJobCards.length; i++){
    const card = allJobCards[i];

    const interviewBtn = card.querySelector('.intBtn');
     const rejectedBtn = card.querySelector(".rejBtn");
    const deleteIcon = card.querySelector(".delIcon");
    const statusButton = card.querySelector(".btn-active");

    // interviewBtn clicked

interviewBtn.addEventListener('click', function(){
    if(card.dataset.status === 'interview'){
        return;
    }
    if(card.dataset.status === 'rejected'){
        rejectedCount--;
        rejectedCountText.innerText = rejectedCount;
    }
    card.dataset.status = 'interview';
    interviewCount++;
    interviewCountText.innerText = interviewCount;

    statusButton.innerText = 'INTERVIEW'
});

// rejectedBtn clicked

rejectedBtn.addEventListener("click", function () {

        if (card.dataset.status === "rejected") {
            return;
        }

        if (card.dataset.status === "interview") {
            interviewCount--;
            interviewCountText.innerText = interviewCount;
        }

        card.dataset.status = "rejected";

 rejectedCount++;
 rejectedCountText.innerText = rejectedCount;

     statusButton.innerText = "REJECTED";
    });

// card deleted 
deleteIcon.addEventListener("click", function () {

        if (card.dataset.status === "interview") {
            interviewCount--;
            interviewCountText.innerText = interviewCount;
        }

        if (card.dataset.status === "rejected") {
            rejectedCount--;
            rejectedCountText.innerText = rejectedCount;
        }

        card.remove();
        checkNoJobs(); 
    });
}
    // all btn add event 
    allTabBtn.addEventListener("click", function () {

    for (let i = 0; i < allJobCards.length; i++) {
        allJobCards[i].style.display = "block";
    }
    checkNoJobs();

});


interviewTabBtn.addEventListener("click", function () {

    for (let i = 0; i < allJobCards.length; i++) {

        if (allJobCards[i].dataset.status === "interview") {
            allJobCards[i].style.display = "block";
        } else {
            allJobCards[i].style.display = "none";
        }
    }
    checkNoJobs();

});

rejectedTabBtn.addEventListener("click", function () {

    for (let i = 0; i < allJobCards.length; i++) {

        if (allJobCards[i].dataset.status === "rejected") {
            allJobCards[i].style.display = "block";
        } else {
            allJobCards[i].style.display = "none";
        }
    }
checkNoJobs();
});




// toggle button
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(button => {
  button.addEventListener("click", function () {

    // all button reset 
    buttons.forEach(btn => {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-outline");
    });

    // clicked button active
   this.classList.remove("btn-outline");
   this.classList.add("btn-primary");

  });
});
// empty state function
function checkNoJobs() {

    const noJobsSection = document.getElementById("no-jobs");
    const cards = document.querySelectorAll(".card");

    let visibleCards = 0;

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].style.display !== "none") {
            visibleCards++;
        }
    }

    if (visibleCards === 0) {
        noJobsSection.classList.remove("hidden");
    } else {
        noJobsSection.classList.add("hidden");
    }
};





