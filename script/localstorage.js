const addNumbersTools=()=>{
 const number =Math.ceil(Math.random()*100);
 console.log(number);
 localStorage.setItem('number', number);
}
const setObjectTools=()=>{
    const customer ={name: 'rakib',product:3, price:200};
    const customerJSON =JSON.stringify(customer);
    localStorage.setItem('customer', customerJSON)
    
}

const readObject=()=>{
    const customerJSON=localStorage.getItem('customer');
    const customerObject=JSON.parse(customerJSON)
    console.log(customerObject.name);
    console.log(customerObject.price);
    
}

const getNumbersFromLs=()=>{
    const number=localStorage.getItem('number')
    console.log("from saved local storage", number);
    
}