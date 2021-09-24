
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');

const decreaseNumber = (incDec , itemPrice) =>{
  var itemval = document.getElementById(incDec);
  var itemP = document.getElementById(itemPrice);
  // console.log(itemval);
  // console.log(incDec);
  // console.log(itemP);

  if(itemval.value <=0){
    itemval.value = 0;
    alert('Minimum one product required!');
  }else{
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = '#fff';
    itemval.style.color = '#000';
    itemP.innerHTML = parseInt(itemP.innerHTML) - 15;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

    // var a = parseInt(total_cart_amt.innerHTML);
    // var b = parseInt(shipping_charge.innerHTML);
    // console.log(a);
    // console.log(b);

  }
} // end



const increaseNumber = (incDec , itemPrice) =>{
  var itemval = document.getElementById(incDec);
  var itemP = document.getElementById(itemPrice);
  // console.log(itemval.value);
  // console.log(itemP);
  // console.log(itemP.innerHTML);

  if(itemval.value >=5){
    itemval.value = 5;
    alert('max 5 allowed!');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';
  }else{
    itemval.value = parseInt(itemval.value) + 1;
    itemP.innerHTML = parseInt(itemP.innerHTML) + 15;

    var h = product_total_amt.innerHTML;
    var i = parseInt(h)+15;
    product_total_amt.innerHTML = i;
    // product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;


    // total_cart_amt.innerHTML = parseInt(total_cart_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    // var p = parseInt(total_cart_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    
    total_cart_amt.innerHTML = i + parseInt(shipping_charge.innerHTML);

  }
} // end


