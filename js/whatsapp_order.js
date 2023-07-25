/**
 * Copyright (C) MITS-Meridian IT Solutions - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Author asaftirur@gmail.com
 */

function whatsapp_order() {
    const phone = '+919656474444' // Your Whatsapp Number, on which you want to send message.

    for (let field of document.getElementById('whatsAppAnyForm').elements) {
        if (field.checkValidity() == false) {
            console.error(`${field.name} does not pass vaildation`)
            return
        }
            
    }

    const order = ['ORDER DETAILS']
    const form_fields = [
        document.getElementById('name'),
        document.getElementById('phonenumber'),
        document.getElementById('address'),
        //document.getElementById('message'),
    ]

    for(let field of form_fields) {
        const label = field.getAttribute('placeholder')
        const value = field.value
        order.push(`${label} : ${value}`)
    }

   // const delivery_field = document.querySelector('input[name="delivery"]:checked')
   // order.push(`${delivery_field.getAttribute('placeholder')} : ${delivery_field.value}`)

    //const total_cart_label = document.getElementById('billprice').getAttribute('placeholder')
    //const total_cart = shoppingCart.totalCart()
    //order.push(`${total_cart_label} : ${total_cart}`)

    let item_no = 1;
    for(let item of shoppingCart.listCart()) {
        const label = `Order-${item_no}`
        order.push(`${label} : ${item.name}`)
        order.push(`${label} Quantity : ${item.count}`)
        ++item_no
    }

    console.log(order.join('\n'))

    const url = "https://api.whatsapp.com/send?phone="+encodeURIComponent(phone)+"&text="+encodeURIComponent(order.join('\n'))+"%0a"+"google.com/maps?q="+document.getElementById('display').value;
    window.open(url, '_blank');

}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var y = position.coords.latitude;
  var z = position.coords.longitude;
 
  document.getElementById('display').value = y+","+z;

}   











