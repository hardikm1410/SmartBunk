const daysContainer = document.querySelector(".days"),
    NextMonth = document.querySelector(".next-btn"),
    PrevMonth = document.querySelector(".prev-btn"),
    month= document.querySelector(".month");
    todayBtn = document.querySelector(".today-btn");

const months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

const days=["Mon","Tue","Wednesday","Thursday","Friday","Saturday","Sunday"];

const date= new Date();
let currentMonth = date.getMonth()

let currentYear = date.getFullYear()

function renderCalendar() {
    // get prev, current and next month days
    date.setDate(1);
    const firstDay= new Date(currentYear, currentMonth, 1);
    const lastDay= new Date(currentYear, currentMonth+ 1,0);
    const lastDayIndex= lastDay.getDay();
    const lastDayDate= lastDay.getDate();
    const prevLastDay= new Date(currentYear, currentMonth, 0);
    const prevLastDayDate= prevLastDay.getDate();
    const nextDays = 7- lastDayIndex -1;

    
    month.innerHTML= `${months[currentMonth]} ${currentYear}`;




// update days html
let days = "";

// prev days html
for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDate - x + 1}</div>`;
}

// current month days
for (let i = 1; i <= lastDayDate; i++){
    // check if its today then add today class
    if (
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
    ) {
        // if date month year matches
        days += `<div class="day today">${i}</div>`;
    } else {
        days += `<div class="day">${i}</div>`;
    }
}

// next month days
for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
}


daysContainer.innerHTML = days;
}
renderCalendar();

nextBtn.addEventListener("click", () => {
    // increase current month by one
    currentMonth++;
    if (currentMonth > 11) {
        // if month gets greater that 11 make it 0 and increase year by one
        currentMonth = 0;
        currentYear++;
    }
    // rerender calendar
    renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
    // set month and year to current
    currentMonth = new Date().getMonth();
    currentYear = new Date().getFullYear();
    // rerender calendar
    renderCalendar();
});

// lets hide today btn if its already current month and vice versa
function hideTodayBtn() {
    if (
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
    ) {
        todayBtn.style.display = "none";
    } else {
        todayBtn.style.display = "flex";
    }
}

