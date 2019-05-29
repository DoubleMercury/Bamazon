$.get("/api/products", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("merchandise");
  
        row.append("<p>" + data[i].product_name + "</p>");
        row.append("<p>Department: " + data[i].department_name + "</p>");
        row.append("<p>$" + data[i].price + "</p>");
        row.append("<p>In Stock: " + data[i].stock_quantity + "</p>");
        row.append("<button type='button' class='btn btn-success'>Add to Cart</button>")
        row.append("<button type='button' class='btn btn-danger'>Remove Item</button>")
        row.append("<p>======================================================</p>");
  
        $("#merchandise-area").prepend(row);
  
      }
  
    }
  
  });

  // this is where I figure out how to get the add to cart buttons 
  //to update the database by subtracting 1 from quantity.
  //I think its possible to use .this on the button click and 
  //it actually correspond with it's proper ID, but I'm not positive.

  //then I would have to figure out how to take all those button clicks 
  //and add up all the prices and append it to the HTML ID of cart-area