function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("overlay").style.display = "none";
}

// Close the side menu when clicking outside of it
document.addEventListener('click', function(event) {
    var sidenav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");
    if (sidenav.style.width === "250px" && !sidenav.contains(event.target) && !event.target.closest(".sidenav")) {
        closeNav();
    }
});

function toggleSearchField() {
    var searchField = document.getElementById("searchField");
    if (searchField.style.display === "block") {
        searchField.style.display = "none";
    } else {
        searchField.style.display = "block";
    }
}

function rotateIcon() {
    var icon = document.getElementById("icon");
    icon.classList.toggle("rotated");
}
