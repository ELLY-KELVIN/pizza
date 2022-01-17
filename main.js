// let searchbtn = document.querySelector('#search');
// let searchfrm = document.querySelector('.head .search-bar');

// searchbtn.onclick = () => {
//     searchfrm.classList.toggle('active');
//     menus.classList.remove('active');
// }
// let menus = document.querySelector('.head .navbar');
// document.querySelector('#bars').onclick = () => {
//     menus.classList.toggle('active');
//     searchfrm.classList.remove('active');
// }
// window.onscroll = () => {
//     menus.classList.remove('active');
//     searchfrm.classList.remove('active');
// }
var pizzaOrder = function () {
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("toppings").value;
    var number = document.getElementById("number").value;
    if (size == "") {
        alert("enter size")
        return false;
    }
    if (crust == "") {
        alert("Indicate crust you would like")
        return false;
    }
    if (toppings == "") {
        alert("choose toppings for your pizza")
        return false;
    } 
    if (number == "") {
        alert("indicate the number of pizza you like")
        return false;
    }
}
function pizza (size, crust, toppings,number,deliver){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.deliver = deliver;
}
var sizeCost,crustCost,toppingsCost,totalCost,pizzaNumber,deliveryCost;
$(document).ready(function () {
    $('#myForm').submit(function (event) {
        event.preventDefault();
        var pizzaSize = $('#size').val();
        var pizzaCrust = $('#crust').val();
        var pizzaToppings = $('#toppings').val();
        var pizzaNumber = parseInt($('#number').val());
        var pizzaDelivery = $('#deliver').val();
        var myPizza = new pizza(pizzaSize, pizzaCrust,pizzaToppings,pizzaNumber,pizzaDelivery);

        // pizza cost against size

        if (myPizza.size == "Large") {
            sizeCost = 2000;
        }
        else if (myPizza.size == "Medium") {
            sizeCost = 1500;
        }
        else if (myPizza.size == "small") {
            sizeCost = 1000;
        }
       
        // with crust

        if (myPizza.crust =='Cripsy') {
            crustCost = 200;
        }else if (myPizza.crust == 'Stuffed') {
            crustCost = 150;
        }else{
            crustCost = 300
        }
        //with toppings

        if (myPizza.toppings == 'pinneaple') {
            toppingsCost = 100;
        }else if (myPizza.toppings == 'beef') {
            toppingsCost = 200
        }else{
            toppingsCost = 300;
        }
       totalCost = (sizeCost + crustCost + toppingsCost)*pizzaNumber;
       if (myPizza.deliver == "yes") {
           deliveryCost = 200;
            var loc = prompt("enter location")
            alert( 'delivery cost is 200')
            alert('Your order will be delivered to ' +loc)
       }else{
           deliveryCost = 0;
           $('#out').hide();
       }
       var newPrice = (totalCost + deliveryCost)
     
       $('#hidden').show();
       $("#quantity").html(pizzaNumber);
       $("#Total").html(totalCost);
       $("#type").html(pizzaCrust);
       $("#top").html(pizzaToppings);
       $('#Location').html(loc);
       $('#amount').html(newPrice);
   
       })

    })