
// ELEMENT SELECT
const allJobCards = document.querySelectorAll('.card');

const interviewCountText = document.getElementById('interview-number');
const rejectedCountText = document.getElementById('rejected-number');

const allTabBtn = document.getElementById('btn-all');
const interviewTabBtn = document.getElementById('btn-interview');
const rejectedTabBtn = document.getElementById('btn-rejected');

const noJobsSection = document.getElementById("no-jobs");

const filterButtons = document.querySelectorAll(".filter-btn");


// COUNT VARIABLE

let interviewCount = 0;
let rejectedCount = 0;


// CARD BUTTON LOGIC
for (let i = 0; i < allJobCards.length; i++) {

    const card = allJobCards[i];

    const interviewBtn = card.querySelector('.intBtn');
    const rejectedBtn = card.querySelector('.rejBtn');
    const deleteIcon = card.querySelector('.delIcon');
    const statusButton = card.querySelector('.btn-active');

    //- Interview Click
    interviewBtn.addEventListener('click', function () {

        if (card.dataset.status === "interview") {
            return;
        }

        if (card.dataset.status === "rejected") {
            rejectedCount--;
            rejectedCountText.innerText = rejectedCount;
        }

        card.dataset.status = "interview";
        interviewCount++;
        interviewCountText.innerText = interviewCount;

        statusButton.innerText = "INTERVIEW";

        checkNoJobs();
    });

    //  Rejected Click 
    rejectedBtn.addEventListener('click', function () {

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

        checkNoJobs();
    });

    //Delete Click 
    deleteIcon.addEventListener('click', function () {

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

// TAB FILTER LOGIC
// ALL TAB
allTabBtn.addEventListener("click", function () {

    for (let i = 0; i < allJobCards.length; i++) {
        allJobCards[i].style.display = "block";
    }

    checkNoJobs();
});

// INTERVIEW TAB
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

// REJECTED TAB
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

// FILTER BUTTON ACTIVE COLOR
const filterButton = document.querySelectorAll(".filter-btn");

filterButton.forEach(button => {

    button.addEventListener("click", function () {

// remove active style from all
    filterButton.forEach(btn => {
    btn.classList.remove("btn-primary");
    btn.classList.remove("btn-outline");
     btn.classList.add("btn-outline");
        });

        // add active style to clicked
        this.classList.remove("btn-outline");
        this.classList.add("btn-primary");
    });

});


// empty state
function checkNoJobs() {

    let visibleCards = 0;

    for (let i = 0; i < allJobCards.length; i++) {

        if (allJobCards[i].style.display !== "none") {
            visibleCards++;
        }
    }

    if (visibleCards === 0) {
        noJobsSection.classList.remove("hidden");
    } else {
        noJobsSection.classList.add("hidden");
    }
};