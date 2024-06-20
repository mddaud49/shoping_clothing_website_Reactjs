import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";



const Layout = () => {
    let cartItemNo = 0;
    const cartdata = useSelector((state) => state.mycart.cart);
    if (cartdata.length >= 1) {
        cartItemNo = cartdata.length;
    }
    return (
        <>


            <nav class="nav">


                <h3>Free Shipping For Standard Order over $500 </h3>

                <div class="div1">
                    <ul type="none">
                        <li class="li1">Help & FAQs</li>
                        <li class="li2">My Account </li>
                        <li class="li3">IN </li>
                        <li class="li4">USD</li>
                        {/* <button style={{marginLeft:"20px",width:"80px"
                    ,letterSpacing:"2px",}}>sign up </button>
                        <button style={{marginLeft:"20px"}}>Login </button> */}
                    </ul>

                </div>


            </nav>


            <div id="wrapper">
                {/* <div id="header">
                 <div id="logo">
                      CybromStore
                 </div>
                 <div id="topmenu">
                    <ul>
                        <li>
                            <Link to="home">Home</Link>  </li>
                        <li> Services </li>
                        <li> Products  </li>
                        <li> <Link to="search">Search</Link>  </li>
                        <li> Cart </li>
                        <li> Gaming Earbuds </li>
                        <li> Contact us</li>
                        <li> 
                          {cartItemNo}
                          <Link to="cartitem">
                      <FaShoppingCart />
                        </Link>  
                       </li>
                    </ul>
                 </div>

             </div> */}



                {/* <Outlet />


                <div id="footer">


                </div> */}
                
      <section className="top">
        <div className="div2">
          <h3><b> QUTBEEZ</b> store.</h3>
        </div>
        <div class="div3">
          <ul type="none">


          <li>
        <Link to="home">HOME</Link>  </li>



            

            <li> <Link to="search">SEARCH</Link>  </li>
            <li> <Link to="blog">BLOG</Link>  </li>


            

            <li> <Link to="about">ABOUT</Link> </li>

            <li> <Link to="contact">CONTACT</Link> </li>

          </ul>

          <label for="click">
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
        <diV class="div4">
          <uL>
          <li> 
                          {cartItemNo}
                          <Link to="cartitem">  
                  <span style={{fontSize:"20px",color:"black",}}> <FaShoppingCart  /></span>    
                        </Link>  
                       </li>
          </uL>
        </diV>

      </section>

      <Outlet />

      
      
      <footer className="foot">


<div>



    <h4 style={{paddingLeft: "40px", lineHeight:"1px",}}>COLLECTION</h4>
    <uL type="none">
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
        <li>Qutbeez Home</li>
        <li>Digital</li>
        <li>White</li>
        <li>Collab</li>
        <li>Member</li>
        <li>Store</li>
        <li>Sale</li>
    </uL>
</div>


<div style={{paddingLeft:"200px",}}>


    <h4 style={{paddingLeft: "40px", lineHeight:"1px",}}>INFORMATION</h4>
    <uL type="none">
        <li>Return</li>
        <li>Shipping</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>FAQ</li>
        <li>Stores</li>
    </uL>
</div>


<div style={{paddingLeft: "200px",}}>


    <h4 style={{paddingLeft: "40px", lineHeight:"1px",}}>MORE</h4>
    <uL type="none">
        <li>Qutbeezlist</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>About</li>
        <li>Affiliate program</li>
        <li>Stores</li>
    </uL>
    <div className="insta">
        <h3 style={{padding:"10px", paddingLeft:"40px", lineHeight: "1px"}}>SOCIAL</h3>
        <span style={{paddingLeft:"40px"}}>Stay Connected.</span>
        <uL>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-tiktok"></i></li>
            <li><i class="fa-brands fa-pinterest"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
        </uL>

    </div>
</div>



</footer>

            </div>





            

        </>
    )
}

export default Layout;