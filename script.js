const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const month = document.querySelector(".month");
const todayBtn = document.querySelector(".today-btn");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar() {
    // Set the date to the first day of the month
    date.setDate(1);

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 6 - lastDayIndex;

    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    let daysHtml = "";

    // Previous month's days
    for (let x = firstDay.getDay(); x > 0; x--) {
        daysHtml += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }

    // Current month's days
    for (let i = 1; i <= lastDayDate; i++) {
        const isToday =
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear();

        daysHtml += `<div class="day${isToday ? " today" : ""}">${i}</div>`;
    }

    // Next month's days
    for (let j = 1; j <= nextDays; j++) {
        daysHtml += `<div class="day next">${j}</div>`;
    }

    hideTodayBtn();
    daysContainer.innerHTML = daysHtml;
}

function hideTodayBtn() {
    const today = new Date();
    if (
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()
    ) {
        todayBtn.style.display = "none";
    } else {
        todayBtn.style.display = "flex";
    }
}

nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

todayBtn.addEventListener("click", () => {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendar();
});

renderCalendar();
