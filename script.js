document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-link]");

    buttons.forEach((el) => {
        el.style.cursor = "pointer";

        el.addEventListener("click", () => {
            const link = el.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card[data-link]");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
