function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem, levando em consideração o dark ou light mode
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Nicole usando uma blusa azul, cabelo longo solto com um fundo amarelo atrás"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Nicole com uma foto no espelho, ela está de tranças, blusa rosa e casaco quadriculado"
    )
  }
}
