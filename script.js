document.addEventListener("DOMContentLoaded", () => {
    const backButtons = document.querySelectorAll("[data-action='back']");

    backButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.history.back();
        });
    });
});

const stayType = document.getElementById("stayType");
const roomGroup = document.getElementById("roomGroup");
const bungalowGroup = document.getElementById("bungalowGroup");
const roomSelect = document.getElementById("roomSelect");
const bungalowSelect = document.getElementById("bungalowSelect");
const roomImage = document.getElementById("roomImage");
const roomTitle = document.getElementById("roomTitle");
const roomOverlay = document.getElementById("roomOverlay");
const bookingPlaceholder = document.getElementById("bookingPlaceholder");

const roomData = {
    room1: {
        title: "The King Room",
        image: "images/room 1.png",
    },
    room2: {
        title: "The Queen Room",
        image: "images/room 2.png",
    },
    room3: {
        title: "Two King Room",
        image: "images/room 3.png",
    },
    room4: {
        title: "Two Queen Room",
        image: "images/room 4.png",
    },
    bungalow1: {
        title: "Private Bungalow",
        image: "images/bungalow 1.png",
    },
    bungalow2: {
        title: "Private Pool Bungalow",
        image: "images/bungalow 2.png",
    },
    bungalow3: {
        title: "4 Bedroom Pool Villa",
        image: "images/bungalow 3.png",
    },
    bungalow4: {
        title: "4 Bedroom Villa",
        image: "images/bungalow 4.png",
    },
};

stayType.addEventListener("change", () => {
    if (stayType.value === "room") {
        roomGroup.style.display = "flex";
        bungalowGroup.style.display = "none";
    } else {
        bungalowGroup.style.display = "flex";
        roomGroup.style.display = "none";
    }
});

roomSelect.addEventListener("change", () => {
    updatePreview(roomSelect.value);
});

bungalowSelect.addEventListener("change", () => {
    updatePreview(bungalowSelect.value);
});

function updatePreview(selectedRoom) {
    const selected = roomData[selectedRoom];

    bookingPlaceholder.style.display = "none";
    roomImage.style.display = "block";
    roomOverlay.style.display = "flex";
    roomImage.src = selected.image;
    roomTitle.textContent = selected.title;
}

const activityTags = document.querySelectorAll(".activity-tag");

activityTags.forEach((tag) => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    });
});

const calendarDates = document.querySelectorAll(".calendar-date");
const checkInInput = document.getElementById("checkInDate");
const checkOutInput = document.getElementById("checkOutDate");

let checkInSelected = false;

calendarDates.forEach((date) => {
    date.addEventListener("click", () => {
        const selectedDay = date.textContent.trim();

        if (!selectedDay) return;

        const formattedDate = `2026-11-${selectedDay.padStart(2, "0")}`;

        if (!checkInSelected) {
            calendarDates.forEach((d) => {
                d.classList.remove("active");
                d.classList.remove("range");
            });

            date.classList.add("active");
            checkInInput.value = formattedDate;
            checkOutInput.value = "";
            checkInSelected = true;
        } else {
            date.classList.add("active");
            checkOutInput.value = formattedDate;
            const checkInDay = Number(checkInInput.value.split("-")[2]);
            const checkOutDay = Number(selectedDay);
            calendarDates.forEach((d) => {
                const currentDay = Number(d.textContent);
                if (currentDay > checkInDay && currentDay < checkOutDay) {
                    d.classList.add("range");
                }
            });

            checkInSelected = false;
        }
    });
});
