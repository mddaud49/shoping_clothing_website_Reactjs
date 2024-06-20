// import LoaderComp from "./Loader";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {cartEmpty} from "./cartSlice";
// const PaymentDone=()=>{
//     const [isLoading, setIsLoading]= useState(true);

//     const dispatch = useDispatch();

//     useEffect(()=>{
//          setTimeout(()=>{
//             setIsLoading(false);
//          }, 4000);

//          dispatch(cartEmpty());
//     }, []);
    
//     return(
//         <>
        
//         <br />
//         <br/>
//         <br/>
 
//      {  isLoading ?  <div style={{margin:"auto", width:"200px"}}>
//         <h1 style={{color:"green"}}>  Your Payment Being Process </h1>
//         <LoaderComp/> 
//         </div>   : (

         
// <h1 align="center" style={{letterSpacing:"2px",}}> Your Payment Succesfully Done ...!! <br/> 
// Your Product will we send within 2 to 3 working Days</h1>


//      ) }

//      <center>
//       <h1>Thank You</h1>
//      </center>
         
         
        
        
//         </>
//     )
// }

// export default PaymentDone;


// import LoaderComp from "./Loader";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { cartEmpty } from "./cartSlice";
// // import "./PaymentDone.css"; // Import your CSS file

// const PaymentDone = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//             dispatch(cartEmpty());
//         }, 4000);
//     }, []);

//     return (
//         <div className="payment-done-container">
//             {isLoading ? (
//                 <div className="loading-container">
//                     <h1 className="loading-text">Your Payment is Being Processed</h1>
//                     <LoaderComp />
//                 </div>
//             ) : (
//                 <div className="success-container">
//                     <h1 className="success-text">Payment Successfully Completed!</h1>
//                     <p>Your Product will be sent within 2 to 3 working days</p>
//                 </div>
//             )}
//             <div className="thank-you-container">
//                 <h1 className="thank-you-text">Thank You</h1>
//             </div>
//         </div>
//     );
// }

// export default PaymentDone;


import LoaderComp from "./Loader";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartEmpty } from "./cartSlice";
// import "./PaymentDone.css"; // Import your CSS file

const PaymentDone = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            dispatch(cartEmpty());
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="payment-done-container">
            {isLoading ? (
                <div className="loading-container">
                    <h1 className="loading-text">Your Payment is Being Processed</h1>
                    <LoaderComp />
                </div>
            ) : (
                <div className="success-container">
                    <h1 className="success-text">Payment Successfully Completed!</h1>
                    <p>Your Product will be sent within 2 to 3 working days</p>
                    <div className="thank-you-container">
                        <h1 className="thank-you-text">Thank You</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PaymentDone;

