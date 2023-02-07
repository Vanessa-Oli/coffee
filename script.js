const form = document.querySelector("form");
const resultContainer = document.createElement("div");
resultContainer.classList.add("result-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const TipoCafe = document.querySelector("#tipo-cafe").value;
  const TamanhoCafe = document.querySelector("input[name='tamanho-cafe']:checked").value;
  
  resultContainer.innerHTML = `Seu pedido é um café: ${TamanhoCafe} ${TipoCafe}`;
});

document.body.appendChild(resultContainer);