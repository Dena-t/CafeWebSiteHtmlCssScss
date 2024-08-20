function calculateTotal()
{
    let unit_price={
      coffeeCarafe: 18,
      pastry: 4,
      pastryVegan: 4,
      sandwich: 7,
      sandwichVegan: 7, 
      dessert: 7,
      dessertVegan: 7,  
    };

    let item_price={}
    
    item_price.coffeeCarafe = ($("#qty_coffeeCarafe").val() * unit_price.coffeeCarafe).toFixed(2); 
    $("#price_coffeeCarafe").val(item_price.coffeeCarafe);
    
    item_price.pastry = ($("#qty_pastry").val() * unit_price.pastry).toFixed(2);
    $("#price_pastry").val(item_price.pastry);

    item_price.pastryVegan = ($("#qty_pastryVegan").val() * unit_price.pastryVegan).toFixed(2);
    $("#price_pastryVegan").val(item_price.pastryVegan);

    item_price.sandwich = ($("#qty_sandwich").val() * unit_price.sandwich).toFixed(2);
    $("#price_sandwich").val(item_price.sandwich);

    item_price.sandwichVegan = ($("#qty_sandwichVegan").val() * unit_price.sandwichVegan).toFixed(2);
    $("#price_sandwichVegan").val(item_price.sandwichVegan);

    item_price.dessert = ($("#qty_dessert").val() * unit_price.dessert).toFixed(2);
    $("#price_dessert").val(item_price.dessert);

    item_price.dessertVegan = ($("#qty_dessertVegan").val() * unit_price.dessertVegan).toFixed(2);
    $("#price_dessertVegan").val(item_price.dessertVegan);
    
    let total = (
      parseFloat(item_price.coffeeCarafe) + 
      parseFloat(item_price.pastry) + 
      parseFloat(item_price.pastryVegan) + 
      parseFloat(item_price.sandwich) + 
      parseFloat(item_price.sandwichVegan) + 
      parseFloat(item_price.dessert) + 
      parseFloat(item_price.dessertVegan)
    ).toFixed(2);

    $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

