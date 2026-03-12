const handleAddProducts =()=>{
   const productEl =document.getElementById('product');
   const quantityEl =document.getElementById('quantity');
   const product=productEl.value;
   productEl.value=''
   const quantity=parseInt(quantityEl.value);
   quantityEl.value=''
   displayProduct(product, quantity)
   addProductToCart(product, quantity)
   
}
const getCart =()=>{
  let cart={};
  const cartJSON=localStorage.getItem('cart')
  if(cartJSON){
    cart = JSON.parse(cartJSON)
  }
  return cart
}
const addProductToCart=(product,quantity)=>{
    const cart =getCart();
    if(cart[product]){
     cart[product]= cart[product] + quantity;
    }else{
    cart[product]=quantity;
    }
    const cartJSON=JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON)
    
}
const displayProduct=(product,quantity)=>{
    const li = document.createElement('li');
    li.innerText=`${product} : ${quantity}`
    //get ul
    const ul=document.getElementById('products-container');
    ul.appendChild(li)
}
// display products from stored Local storage
const displayStoredProducts=()=>{
    const cart = getCart();
    for(const product in cart){
        const quantity=cart[product]
        displayProduct(product,quantity)
    }
}
displayStoredProducts()
/* 
*To save object/array in the Local storage
*1. convert the object to JSON string by using JSON.stringify
*2. localstorage.setItem()
*
*
*/
