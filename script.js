let theme = "dark";

try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
        theme = saved;
    }
} catch (error) {
    theme = "dark";
}


document.documentElement.setAttribute("data-theme", theme);


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    if (!button) {
        return;
    }

    function showLabel() {
        button.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
    showLabel();

    button.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch (error) {
            
        }
        showLabel();
    });
});