const itemName = document.querySelector("#item-name")
let overallPriceContainer = document.querySelector('#overall-price')
let priceValueOver = 0;
let foiExecutada = false

const Catalogo = [ 
    {nome: "Apple", price: 1.90, pedidos: 1, add:false},
    {nome: "Grapes", price: 3.00, pedidos: 1, add:false}
]

function addItemPrice(produto){
   
   //pegar o indice do produto, problemas: ta pegando o valor anterior então ta guardando o times 
   let index = Catalogo.findIndex(item => item.nome.toLocaleLowerCase() === produto.toLocaleLowerCase())
   let indicator = document.querySelector(`#indicator${index}`)
   let itemPrice = document.querySelector(`#item-price${index}`)
   Catalogo[index].pedidos++
   let qtdPedidos = Catalogo[index].pedidos 
   


   let valor = Catalogo[index].price
   indicator.innerHTML = `${qtdPedidos}x`
   
   let price = valor * qtdPedidos
   priceValueOver += valor
   overallPriceContainer.innerHTML = `R$${priceValueOver.toFixed(2)}`
   itemPrice.innerHTML = `R$${price.toFixed(2)}` 
   //console.log(verif)
   //console.log(produto)

   
};

function removeItemPrice(produto){

   let index = Catalogo.findIndex(item => item.nome.toLocaleLowerCase() === produto.toLocaleLowerCase());
   let indicator = document.querySelector(`#indicator${index}`);
   let itemPrice = document.querySelector(`#item-price${index}`);
   
   Catalogo[index].pedidos--;
   let qtdPedidos = Catalogo[index].pedidos;

   if(qtdPedidos >= 1){
        //para o item individual
        indicator.innerHTML = `${qtdPedidos}x`;
        let price = Catalogo[index].price * qtdPedidos;
        result = price.toFixed(2);
        priceValueOver -= Catalogo[index].price;
        //output
        itemPrice.innerHTML = `R$${result}`;

   } else {
      if(confirm("você quer mesmo tirar esse item?")){
         document.querySelector(`.item-overall.${produto}`).remove();
         priceValueOver -= Catalogo[index].price;
         Catalogo[index].add = false;
         console.log(Catalogo[index].add);
         
         
      }
      
   }

   overallPriceContainer.innerHTML = `R$${priceValueOver.toFixed(2)}`;
};

function AddItemOnOverall(nomeitem){

   const itemDisplayContainer = document.querySelector(`#item-${nomeitem}`);
   //encontrar o item
   let index = Catalogo.findIndex(item => item.nome.toLocaleLowerCase() === nomeitem.toLocaleLowerCase());
   //console.log(index)
   const nomeDoProduto = Catalogo.find( item => item.nome.toLowerCase() === nomeitem.toLowerCase());
  
   
   if(Catalogo[index].add === false){

      itemDisplayContainer.removeEventListener('click', AddItemOnOverall);

      //adição do item
      const container = document.querySelector('.container-items-overall');
      const modelHTML = `<div id="item-overall" class="item-overall ${nomeDoProduto.nome}">
                    <p id="indicator${index}">1x</p>
                    <p id="item-name">${nomeDoProduto.nome}</p>
                    <p id="item-price${index}">R$${nomeDoProduto.price.toFixed(2)}</p>
                    <div class="btn-add-remove-item">
                        <button onclick="addItemPrice('${nomeDoProduto.nome}')" class="btn-plus">+</button>
                        <button onclick="removeItemPrice('${nomeDoProduto.nome}')" class="btn-min">-</button>
                    </div>
                </div>`;
      
      container.insertAdjacentHTML('beforeend', modelHTML);
   
      priceValueOver += Number(nomeDoProduto.price.toFixed(2));
      overallPriceContainer.innerHTML = `R$${priceValueOver.toFixed(2)}`;
      itemDisplayContainer.removeEventListener('click', infoPedidoRepitido);
      Catalogo[index].add = true;

   }else{
      itemDisplayContainer.addEventListener('click', infoPedidoRepitido);
   }
}

function infoPedidoRepitido(){
      alert("You have already added this item.");
}