// Button Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Select all element buttons with the tool-btn class
    const buttons = document.querySelectorAll(".tool-btn");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const targetUrl = button.getAttribute("data-url");

            if (targetUrl) {
                // Add click class for instant visual shrink animation
                button.classList.add("clicked");

                if (event.shiftKey) {
                    // Open in new tab immediately to bypass browser popup blockers
                    window.open(targetUrl, "_blank");

                    // Remove visual feedback after delay
                    setTimeout(() => {
                        button.classList.remove("clicked");
                    }, 150);
                } else {
                    // Open in current tab after brief animation delay
                    setTimeout(() => {
                        button.classList.remove("clicked");
                        window.location.href = targetUrl;
                    }, 150);
                }
            }
        });
    });
});
