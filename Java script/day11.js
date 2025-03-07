function serch (callback) {
   console.log("search flipkart");
   
callback ()
}

function click (callback) {
    console.log("click : mobile");
    callback()
}

function brand (callback) {
    console.log("scroll &  click : samsumg mobile ");
    callback()
    
}

function model (callback) {
    console.log("click :  samsung galaxy s25 5g ");
    callback()
 }

 function price (callback) {
    console.log("the price of the mobile is ₹80000");
    callback()
 }

 function box(callback) {
    console.log("Handset, Data Cable (Type C to C), Sim Ejection Pin");
    callback()
    
 }

 serch(()=>{
    click(()=>{
        brand(()=>{
            model(()=>{
                price(()=>{
                    box(()=>{console.log("decided to buy the product");
                    })
                })
            })
        })
    })

 })