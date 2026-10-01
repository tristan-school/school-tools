document.addEventListener("DOMContentLoaded", () => {
    // Select all element buttons with the tool-btn class
    const buttons = document.querySelectorAll(".tool-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetUrl = button.getAttribute("data-url");

            if (targetUrl) {
                // Add click class for instant visual shrink animation
                button.classList.add("clicked");

                // Briefly pause so the user sees the animation before tab changes
                setTimeout(() => {
                    button.classList.remove("clicked");
                    window.open(targetUrl, "_blank");
                }, 150);
            }
        });
    });
});
