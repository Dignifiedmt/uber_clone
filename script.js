const aboutDropdown = document.getElementById("aboutDropdown");
const dropdownToggle = aboutDropdown.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("click", function() {
    aboutDropdown.classList.toggle("active");
});

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const mobileNavContent = document.querySelector('.mobile-nav-content');

hamburger.addEventListener('click', () => {
    mobileNavContent.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    mobileNavContent.style.display = 'none';
});

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function showMessage(msg) {
    const pop = document.getElementById("popMessage");
    pop.innerHTML = msg;
    pop.style.display = "block";
    setTimeout(function() {
        pop.style.display = "none";
    }, 3000);
}

setTimeout(function() {
    const allow = confirm("Allow this site to access your location?");
    if (allow) {
        showMessage("Location access granted.");
    } else {
        showMessage("Location access denied.");
    }
}, 10000);

function handleCookieResponse(response) {
    let msg = "";
    if (response === "accept") {
        msg = "Cookies accepted.";
    } else if (response === "disable") {
        msg = "Cookies disabled.";
    } else if (response === "settings") {
        msg = "Cookie settings.";
    }
    showMessage(msg);
    document.getElementById("cookieBox").style.display = "none";
}

document.getElementById("cookieSettings").addEventListener("click", function() {
    handleCookieResponse("settings");
});
document.getElementById("cookieDisable").addEventListener("click", function() {
    handleCookieResponse("disable");
});
document.getElementById("cookieAccept").addEventListener("click", function() {
    handleCookieResponse("accept");
});

const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');

dateInput.addEventListener('focus', function() {
    this.type = 'date';
});
dateInput.addEventListener('blur', function() {
    if (!this.value) this.type = 'text';
});

timeInput.addEventListener('focus', function() {
    this.type = 'time';
});
timeInput.addEventListener('blur', function() {
    if (!this.value) this.type = 'text';
});

function toggleDropdown(event) {
    const dropdown = event.currentTarget.parentElement;
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', toggleDropdown);
});

document.addEventListener("DOMContentLoaded", () => {
    const langIcons = document.querySelectorAll(".lang-icon");
    const langLocSection = document.querySelector(".language-location-section");

    langIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            const isLanguage = icon.querySelector("span").textContent === "En";
            langLocSection.classList.add("active");
            langLocSection.innerHTML = `
                <span class="close-btn">&times;</span>
                <h2>Search ${isLanguage ? "Language" : "Location"}</h2>
                <form>
                    <input type="text" placeholder="Enter ${isLanguage ? "language" : "location"}..." />
                    <button type="button">Search</button>
                </form>
            `;
            attachCloseEvent();
        });
    });

    function attachCloseEvent() {
        const closeBtn = langLocSection.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
            langLocSection.classList.remove("active");
        });
    }
});
