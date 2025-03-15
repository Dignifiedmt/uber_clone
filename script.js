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

// Add event listeners to the hamburger and close button
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