"use strict"

export default function sidebarHandler(){
    const openButton = document.querySelector(".sidebar-icon .fa-bars");
    const closeButton = document.querySelector(".sidebar-close-icon .fa-times");
    const sidebar =document.querySelector(".sidebar-wrapper")
    openButton.addEventListener("click",function(){
        sidebar.classList.remove("sidebar-close");
        sidebar.classList.add("sidebar-show");
        openButton.classList.add("hide");
        closeButton.classList.remove("hide");

    })  
    closeButton.addEventListener("click",function(){
        sidebar.classList.remove("sidebar-show");
        sidebar.classList.add("sidebar-close");
        openButton.classList.remove("hide");
        closeButton.classList.add("hide");

    })
}