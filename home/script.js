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

                // Check if Shift key was held down during the click
                const openInNewTab = event.shiftKey;

                // Briefly pause so the user sees the animation before tab changes
                setTimeout(() => {
                    button.classList.remove("clicked");
                    
                    if (openInNewTab) {
                        window.open(targetUrl, "_blank"); // Open in new tab if Shift held
                    } else {
                        window.location.href = targetUrl; // Open in current tab
                    }
                }, 150);
            }
        });
    });
});
