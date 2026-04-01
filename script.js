function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    // tem que editar a foto no PS para cortar as bordas pretas
    img.setAttribute("src", "./assets/mgblackavatar.png")
    img.setAttribute("alt", "logo black")
  } else {
    //se tiver sem lightmode, manter a imagem normal
    img.setAttribute("src", "./assets/mgavatar.png")
  }
}

const tiktokLink = document.getElementById("tiktok-link")
if (tiktokLink) {
  tiktokLink.addEventListener("click", function (event) {
    event.preventDefault()
    alert("Link do TikTok em desenvolvimento 🙌")
  })
}

const websiteLink = document.getElementById("website-link")
if (websiteLink) {
  websiteLink.addEventListener("click", function (event) {
    event.preventDefault()
    alert("Link do Website em desenvolvimento 🙌")
  })
}