const itemName = document.querySelector("#item-name")
const indicator = document.querySelector("#indicator")
let overallPriceContainer = document.querySelector('#overall-price')
let itemPrice = document.querySelector("#item-price")
let times = 1
let valor = 1.90
let priceValueOver = 0

const Catalogo = [ 
    {nome: "Maçã", price: 1.90},
    {nome: "Uva", price: 3.00},
    {nome: "Cesta de Frutas", price: 10.90}
]
itemName.innerHTML = Catalogo[0].nome
itemPrice.innerHTML = `R$${Catalogo[0].price.toFixed(2)}`



function addItemPrice(){
   times++
   indicator.innerHTML = `${times}x`
   let price =  Catalogo[0].price * times
   result = price.toFixed(2)
   valor+= Number(Catalogo[0].price)
   console.log(result)
   overallPriceContainer.innerHTML = `R$${valor.toFixed(2)}`
   console.log(valor)
   itemPrice.innerHTML = `R$${result}` 
}

function removeItemPrice(){
   if(times > 1){


        times--
        indicator.innerHTML = `${times}x`
        let price =  Catalogo[0].price * times
        result = price.toFixed(2)


        valor -= Number(Catalogo[0].price)
        overallPriceContainer.innerHTML = `R$${valor.toFixed(2)}`
        console.log(valor)


        itemPrice.innerHTML = `R$${result}`

   } else {
      if(confirm("você quer mesmo tirar esse item?")){
         document.querySelector(".item-overall").remove()
         priceValueOver -= result
      }
      
   }
    
}

function AddItemOnOverall(nomeitem){
   //encontrar o item
   const nomeDoProduto = Catalogo.find(
      item => item.nome.toLowerCase() === nomeitem.toLowerCase()
   )

   //adição do item
   const container = document.querySelector('.container-items-overall')
   const modelHTML = `<div id="item-overall" class="item-overall">
                    <p id="indicator">1x</p>
                    <p id="item-name">${nomeDoProduto.nome}</p>
                    <p id="item-price">R$${nomeDoProduto.price.toFixed(2)}</p>
                    <div class="btn-add-remove-item">
                        <button onclick="addItemPrice()" class="btn-plus">+</button>
                        <button onclick="removeItemPrice()" class="btn-min">-</button>
                    </div>
                </div>`
   container.insertAdjacentHTML('beforeend', modelHTML)
   priceValueOver += Number(nomeDoProduto.price.toFixed(2))
   atualizarOverallPrice()
    
    
}

function atualizarOverallPrice() {
   overallPriceContainer.innerHTML = `R$${priceValueOver.toFixed(2)}`
}