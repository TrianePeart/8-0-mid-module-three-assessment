import formatPrice from "../helpers/formatPrice";

//On my website we keep checkout and input data apart for easier debugging. Please let me know if its not needed. 

let cart =({cart, total, subtotal}) =>{
    let tax = formatPrice(
     subtotal * 0.05 || formatPrice(0)) 

     return (
         <div className ="cart">
             <h2>Cart</h2>
             <ul className ="cartList">{cart}</ul>
             <p>Subtotal: {subtotal}</p>
             <p>Tax: {tax}</p>
             <p>Total: {total}</p>
         </div>
     )
}