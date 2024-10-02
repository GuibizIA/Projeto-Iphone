const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-img");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)
        // Para apagar a cor anterior
        buttons.forEach((btn) => 
            btn.querySelector(".color").classList.remove("selected")
        );

        const button = e.target; // Usar e.currentTarget
        const id = button.getAttribute("id");

        // Adiciona a classe selecionada
        button.querySelector(".color").classList.add("selected");

        // Efeito de opacity
        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`); // Ajuste o caminho da imagem

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});
