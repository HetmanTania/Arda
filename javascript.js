'use strict'


document.addEventListener("DOMContentLoaded", function () {

    let headerAdvantages = document.getElementById("header-advantages");
    let form = document.getElementById("form-questions");
    let map = document.getElementById("map");
    window.addEventListener('scroll', function (event) {
        console.log(pageYOffset);



        if (document.documentElement.clientWidth >= 1100) {
            if (pageYOffset > 3100) {
                form.classList.add("amin-form");
            }
            if (pageYOffset > 3400) {

                map.classList.add("anim-map");
            }
        }
        if (document.documentElement.clientWidth >= 80) {
            if (pageYOffset > 4400) {
                form.classList.add("amin-form");
            }
            if (pageYOffset > 4600) {

                map.classList.add("anim-map");
            }
        }
     
    });

    let dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.addEventListener('click', (event)  => {
        let dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("showDropdown");
        dropdown.classList.remove("showDropdownDisable");
    });
    let closeDropdownMenu = document.getElementById("close-dropdown-menu");
    closeDropdownMenu.addEventListener('click', (event) => {
        dropdown.classList.remove("showDropdown");
        dropdown.classList.add("showDropdownDisable");
    })

})