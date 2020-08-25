'use strict'

{

  const openBtn = document.getElementById("open-btn")
  const closeBtn = document.getElementById("close-btn")
  const hamMenu = document.getElementById("ham-menu")

  openBtn.addEventListener("click", () => {
    hamMenu.classList.remove("hidden")
    alert("osa")
  })

  closeBtn.addEventListener("click", () => {
    hamMenu.classList.add("hidden")
  })


}