const x = document.querySelector(".r1");
const w = document.querySelector(".aside");
const y = document.querySelector(".home");
const q = document.querySelector(".container");
const comprar = document.querySelector("#comprar");


function Fer() {
  document.querySelector(".content-center").classList.add("none");
  document.querySelector(".row").classList.add("none");
  document.querySelector(".silva").classList.remove("none");
}
function Cart() {
  const w = document.querySelector(".aside");
  if (w.className === "aside") {
    document.querySelector(".aside").classList.add("ax");
  } else {
    document.querySelector(".aside").classList.remove("ax");
    document.querySelector(".container").classList.add("blur");
  }
}
function voltars() {
  document.querySelector(".container").classList.remove("blur");
  document.querySelector(".aside").classList.add("ax");
}
function add() {
  document.querySelector('.image-product').classList.remove('remover-product')
}
function removeee(){
  document.querySelector('.image-product').classList.add('remover-product')
  
}
