let menu_icon = document.querySelector("#menu-btn")
let mobile_menu = document.querySelector("#mobile-menu")
let menu_close_btn = document.querySelector("#close-btn")
let mobile_menu_item = document.querySelectorAll(".mobile-menu-item")

menu_icon.addEventListener("click", () => {
    mobile_menu.style.display = "block"
})
menu_close_btn.addEventListener("click", () => {
    mobile_menu.style.display = "none"
    mobile_menu.style.transition = "1000ms"
})

for(let mobile_item of mobile_menu_item){
    mobile_item.addEventListener("click", () => {
        mobile_menu.style.display = "none"
        mobile_menu.style.transition = "1000ms"
    })
}

//for header

let hero_section = document.querySelector("#hero-section")
let hero_section_height = hero_section.scrollHeight
let header = document.querySelector("#header")

document.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > hero_section_height){
        if(!header.classList.contains("solid-header")){
            header.classList.add("solid-header")
        }
    }else{
            if(header.classList.contains("solid-header")){
                header.classList.remove("solid-header")
            }
        }
    
})