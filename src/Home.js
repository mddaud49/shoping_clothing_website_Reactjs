import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";



const Home=()=>{
    const [mydata, setMydata]=useState([]);

    const dispatch= useDispatch();
    

  const loadData=()=>{
    let url="http://localhost:4000/product";
    axios.get(url).then((res)=>{
        setMydata(res.data);
    })
  }

  useEffect(()=>{
     loadData();
  }, []);


  const images = [
    { url: "image/slider2.jpg" },
    { url: "image/slider3.jpg" },
    { url: "image/slider4.jpg" },
    { url: "image/slider5.jpg" },
    
  ];



  const productAns=mydata.map((key)=>{
         return(
            <>
            <div class="product-container">

            
                <div className="product">
                  <img src={"image/"+ key.image} width="500"  height="300" />
                  <h3>Name: {key.name}</h3>
          <h4>Price: {key.price}</h4>
          <h4>Brand: {key.brand}</h4>
                    <button onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, price:key.price, image:key.image, brand:key.brand }))}}> Add to Cart</button>
                </div>

                </div>
                
            </>
         )
  });


    return(
        <>
         
             <div id="banner">
                     <img src={img4}width="100%" height="710" /> 
                     <hr/>  
                    
              </div>

              <div>
                


      <SimpleImageSlider
        width={1600}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
                      
    </div>


           <div id="content">
               <h1> Best Sellers </h1>
               <div id="products">
                  {productAns}        
               </div>
           </div>


        
        </>
    )
}

export default Home;