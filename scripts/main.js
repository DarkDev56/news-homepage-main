const toggler = document.getElementById("toggler");
const linksMenu = document.getElementById("navbar-links-menu");

let toggleState = false;

function ToggleMenu()
{
    if (toggleState)
    {
        toggler.src = "./assets/images/icon-menu-close.svg";
        linksMenu.style.transform = "scale(1)";
    }
    else
    {
        toggler.src = "./assets/images/icon-menu.svg";
        linksMenu.style.transform = "scale(0)";
    }

    toggleState = !toggleState;
}