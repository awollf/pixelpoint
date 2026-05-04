document.querySelectorAll("[data-link]").forEach((el) => {
    el.addEventListener("click", () => {
        const link = el.getAttribute("data-link");
        if (link) {
            window.location.href = link;
        }
    });
});
