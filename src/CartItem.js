// import {useSelector, useDispatch} from "react-redux";
// import {addQTY, removeQTY, removeItem} from "./cartSlice";
// import { useNavigate } from "react-router-dom";
// const CartItem=()=>{
//     const cartData= useSelector((state)=>state.mycart.cart);
//     const dispatch= useDispatch();
//     const mynav= useNavigate();
//     let netAmount=0;
//      const ans=cartData.map((key)=>{
//             netAmount+=key.price*key.qnty;
//            return(
//             <>
//               <tr>
//                 <td> <img src={"image/"+key.image} width="150" height="120"
//                 style={{borderRadius:"15px",border:"3px solid rgb(248, 248,248)"
//                , padding:"5px",margin:"15px"}} /> </td>
//                 <td> {key.name} </td> 
//                 <td> {key.brand} </td>
//                 <td> {key.price} </td>
//                 <td> 
//                  <button onClick={()=>{dispatch(addQTY({id:key.id}))}}
//                  style={{padding:"0 4px", margin:"10px",
//                  color:"white", backgroundColor:"black",
//                  width:"25px",}}>  +  </button> 
              
//                 {key.qnty} 
//                  <button onClick={()=>{dispatch(removeQTY({id:key.id}))}}
//                  style={{padding:"0 4px", margin:"10px",
//                  backgroundColor:"black",width:"25px",}}> - </button>  
                  
//                 </td>
//                 <td>  
//                   {key.price*key.qnty}   
                  
//                 </td>
//                 <td>  

//                  <button onClick={()=>{dispatch(removeItem(key.id))}}>Remove</button>   
                  
//                 </td>
//               </tr>
//               <tr align="left">
//                         <th colspan="7" bgcolor="#496989" height="1">
//                          </th>   

//                     </tr>
//             </>
//            )
//      })


// const BuyNow=()=>{
//   mynav("/buynow");
// }

//     return(
//         <>
//          <br/>
//           <h1 style={{color:"#1679AB",
//         textAlign:"center"}}> Our WishList Products Item </h1>
                 
//                  <table className="tab" >
//                     <tr align="left" style={{backgroundColor:"#496989",
//                   fontSize:"18px",textAlign:"center",}}>
//                         <th>Items </th>
//                         <th> Products Name</th>
//                         <th> Brand </th>
//                         <th> Price per Item</th>
//                         <th> Quantity </th>
//                         <th> Total Amount</th>
//                         <th>Remove Item </th>
//                     </tr>
//                     {ans}
//                     <tr align="left" style={{fontSize:"20px",textAlign:"center"}}>
//                         <th> </th>
//                         <th></th>
//                         <th> </th>
//                         <th> </th>
//                         <th > Grand Total  </th>
//                         <th>  {netAmount} </th>
//                     </tr>
//                  </table>

//               <br/>
//                <br/>
//               {/* <hr color="black" />   */}

//              <center>
//              <button  className="buynowbutton" onClick={BuyNow}> Buy Now </button>
//              </center>
//              <br/>
//              <br/>
                
//         </>
//     )
// }
// export default CartItem;   




import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQTY, removeQTY, removeItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";
// import "./CartItem.css";

const CartItem = () => {
    const cartData = useSelector((state) => state.mycart.cart);
    const dispatch = useDispatch();
    const mynav = useNavigate();
    const [netAmount, setNetAmount] = useState(0);

    const handleAddQty = (id) => {
        dispatch(addQTY({ id }));
        calculateNetAmount();
    };

    const handleRemoveQty = (id) => {
        dispatch(removeQTY({ id }));
        calculateNetAmount();
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
        calculateNetAmount();
    };

    const calculateNetAmount = () => {
        let total = 0;
        cartData.forEach((item) => {
            total += item.price * item.qnty;
        });
        setNetAmount(total);
    };

    const BuyNow = () => {
        mynav("/buynow");
    };

    const cartItems = cartData.map((item) => (
        <tr key={item.id}>
            <td>
                <img
                    src={"image/" + item.image}
                    alt={item.name}
                    width="150"
                    height="120"
                    className="cart-item-image"
                />
            </td>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>
                <button className="qty-button" onClick={() => handleAddQty(item.id)}>+</button>
                {item.qnty}
                <button className="qty-button" onClick={() => handleRemoveQty(item.id)}>-</button>
            </td>
            <td>{item.price * item.qnty}</td>
            <td>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </td>
        </tr>
    ));

    return (
        <div className="cart-item-container">
            <h1 className="cart-heading">Our Wishlist Products</h1>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price per Item</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>Remove Item</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems}
                    <tr>
                        <td colSpan="5" className="grand-total-label">Grand Total</td>
                        <td>{netAmount}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button className="buy-now-button" onClick={BuyNow}>Buy Now</button>
        </div>
    );
};

export default CartItem;
