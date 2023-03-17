const navItems = document.querySelectorAll(".nav-item")

navItems.forEach((navItem) => {
    navItem.onclick = () => {
        document.querySelector('.nav-item.active').classList.remove('active')
        navItem.classList.add('active')
    }
})