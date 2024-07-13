document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = toggle.nextElementSibling;
            const isOpen = content.style.display === 'block';
            closeAllDropdowns();
            if (!isOpen) {
                content.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', function (event) {
        const isDropdown = event.target.closest('.dropdown');
        if (!isDropdown) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        const dropdownContents = document.querySelectorAll('.content1');
        dropdownContents.forEach(content => {
            content.style.display = 'none';
        });
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const container1 = document.getElementsByClassName('container1')[0]

toggleButton.addEventListener('click', () => {
    container1.classList.toggle('active')
})
