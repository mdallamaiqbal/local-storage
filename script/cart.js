const handleAddProducts =()=>{
   const productEl =document.getElementById('product');
   const quantityEl =document.getElementById('quantity');
   const product=productEl.value;
   productEl.value=''
   const quantity=quantityEl.value;
   quantityEl.value=''
   displayProduct(product, quantity)
   addProductToCart(product, quantity)
   
}
const getCart =()=>{
  const cart={};
  return cart
}
const addProductToCart=(product,quantity)=>{
    const cart =getCart();
    cart[product]=quantity;
    console.log('cart', cart);
    
}
const displayProduct=(product,quantity)=>{
    const li = document.createElement('li');
    li.innerText=`${product} : ${quantity}`
    //get ul
    const ul=document.getElementById('products-container');
    ul.appendChild(li)
}