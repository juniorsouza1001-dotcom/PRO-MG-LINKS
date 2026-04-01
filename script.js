function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    // tem que editar a foto no PS para cortar as bordas pretas
    img.setAttribute("src", "./assets/jravatar oculos2.png")
    img.setAttribute(
      "alt", "Foto do Gil Jr sorrindo, usando uma camisa preta, óculos, barba e fundo branco.")
  } else {
    //se tiver sem lightmode, manter a imagem normal
    img.setAttribute("src", "./assets/jravatar.png")
  }
}
