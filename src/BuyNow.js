
import Banking from "./Banking";
import CashOnDelivery from "./CashOnDelivery";
import Upi from "./Upi";
import Card from "./Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BuyNow = () => {
    const [paymethod, setPaymethod]=useState("");
    const navigate = useNavigate();

    const handlePayMethod = (e) => {
        
        let method=e.target.value;
  
        if (method=="cashPay")
        {
            setPaymethod(<CashOnDelivery/>)
        }
        if (method=="UPIPay")
        {
            setPaymethod(<Upi/>)
        }
        if (method=="CardPay")
        {
            setPaymethod(<Card/>)
        }
        if (method=="BankingPay")
        {
            setPaymethod(<Banking/>)
        }
     
    }

    const paymentDone = () => {

      navigate("/paydone")
    }
    

    return(
        <>
        <div className="buyNowpage">
        <div className="buynowForm">
            <form action="">
            <h1> Your Shipping Address</h1>    
             <br />
                 <input type="text" placeholder="Enter Name" />
              <br />
                <input type="email" placeholder="Email"/>
               <br />
                 <input type="text" placeholder="Contact No."/>
              <br />
                 <input type="text" placeholder="Address"/>
              <br />
                 <input type="text" placeholder="Zip Code"/>
            </form>
        </div>
        <div className="paymentdiv">
        <h1> Select Your Payement Method</h1>
        <br /> <br />    
                    <input type="radio" name="m1" value="cashPay" onClick={handlePayMethod} /> Cash On Delivery 
                    <br />
                    <input type="radio" name="m1"  value="UPIPay" onClick={handlePayMethod}  /> UPI / Phone Pe 
                    <br />
                    <input type="radio" name="m1"  value="CardPay" onClick={handlePayMethod}  /> Credit/Debit Card 
                    <br />
                    <input type="radio" name="m1"  value="BankingPay" onClick={handlePayMethod}  /> Internet Banking 
            <br /> <br />
                    <hr color="black" />
                  {paymethod}
               
        </div>
        </div>
        <br /><br />
        
          
        <center>
          <button style={{padding:"10px", backgroundColor:"#1679AB", 
          color:"white", fontSize:"20px", fontWeight:"bold",borderRadius:"8px",
          width:"250px",marginRight:"550px",}} onClick={()=>{paymentDone()}}> Make Payment</button>
          
       </center>

       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        {/* <div>
          <table width="90%" align="center" border="0">
            <tr>
                <td>
                 <h1> Your Shipping Address</h1>    

                 Enter name : <input type="text" />
                 <br/>
                 Enter city: <input type="text" />
                 <br/>
                 Enter Contact no : <input type="text" />
                 <br/>
                 Enter Address : <input type="text" />
                  
                 </td>
                <td>
                 <h1> Select Your Payement Method</h1>    
                    <input type="radio" name="m1" value="cashPay" onClick={handlePayMethod} /> Cash On Delivery 
                    <input type="radio" name="m1"  value="UPIPay" onClick={handlePayMethod}  /> UPI/Phone Pe 
                    <input type="radio" name="m1"  value="CardPay" onClick={handlePayMethod}  /> Credit/Debit Card 
                    <input type="radio" name="m1"  value="BankingPay" onClick={handlePayMethod}  /> Internet Banking 
                  <hr size="3" color="lightblue" />

                  {/* {paymethod} */}
                 
                 {/* </td>
            </tr>
          </table>
                </div>
          <br/> <br/>
        <center>
        <button style={{padding:"10px", backgroundColor:"blue", 
        color:"white", fontSize:"20px", fontWeight:"bold"}}> Make Payment</button>
        </center>
           
        <br/> <br/> */} 
        
        </>
    )
}

export default BuyNow;