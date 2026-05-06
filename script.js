document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-link], [data-action]");

    buttons.forEach((el) => {
        el.style.cursor = "pointer";

        el.addEventListener("click", () => {
            const action = el.getAttribute("data-action");
            const link = el.getAttribute("data-link");

            if (action === "back") {
                window.history.back();
                return;
            }

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

document.querySelectorAll("[data-link]").forEach((el) => {
    el.addEventListener("click", () => {
        const link = el.getAttribute("data-link");
        if (link) {
            window.location.href = link;
        }
    });
});
