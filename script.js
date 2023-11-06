function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains("light")) {
        html.classList.remove("light")
    } 
    else {
        html.classList.add("light")
    }
// podemos fazer de outra forma, mais simplicado: html.classList.toggles("light")

// pegar a tag img e substituir a imagem, porém tem duas condições: se tiver light mode, adicionar a imagem light, caso contrário manter a imagem normal

const img = document.querySelector("#profile img")
if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-light2.png")
    img.setAttribute("alt", "Modo light")
}
else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil")
}

}