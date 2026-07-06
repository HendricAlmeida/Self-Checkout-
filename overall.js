const itemName = document.querySelector("#item-name")
const indicator = document.querySelector("#indicator")
let overallPriceContainer = document.querySelector('#overall-price')
let itemPrice = document.querySelector("#item-price")
let times = 1
let valor = 1.90


const Catalogo = [ 
    {nome: "Maçã", price: 1.90},
    {nome: "Pera", price: 3.00},
    {nome: "Cesta de Frutas", price: 10.90}
]
itemName.innerHTML = Catalogo[0].nome
itemPrice.innerHTML = `R$${Catalogo[0].price.toFixed(2)}`
overallPriceContainer.innerHTML = `R$${valor.toFixed(2)}`


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
      }
      
   }
    
}