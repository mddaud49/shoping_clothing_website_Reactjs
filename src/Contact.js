import contact1 from "./images/contact1.jpg";
const Contact=()=>{
    return(
        <>
        
        <div className="main3">
            <div className="image">
                <img src={contact1} width="700px"/>

            </div>
            <div className="main4">



                <div className="form1">
                    <center>
                        <h1>GET IN TOUCH</h1>
                        <hr/>
                    </center>
                    <form>
                        <label style={{letterSpacing: "2px", fontSize: "20px"}} >Full Name </label> <br/>
                        <input type="text" placeholder="Enter your Name" style={{width: "300px", borderRadius: "5px"}}/>
                        <br/>
                        <br/>
                        <label style={{letterSpacing: "2px", fontSize: "20px"}}>E-mail</label><br/>
                        <input type="text" placeholder="Enter E-mail" style={{width: "300px", borderRadius: "5px"}}/>
                        <br/>
                        <br/>
                        <label style={{letterSpacing: "2px", fontSize: "20px"}}>Message</label><br/>
                        <input type="text" placeholder="Enter Message" style={{width: "300px", borderRadius: "5px"}} />
                        <br/>
                        <br/>
                        <button style={{letterSpacing:"2px"}}>Contact us </button>
                        
                    
                    </form>
                    <h5> WWW.QUTBEEZ.COM </h5>
                </div>
                <div className="form2">
                    <h3 style={{letterSpacing: "2px", fontSize: "25px"}}>contact </h3>
                       Daud2405khan@gmail.com
                    <br/>
                    <br/>
                    <h3 style={{letterSpacing: "2px", fontSize: "25px"}}>Based in  </h3>   
                    San Franscisco. calfornia
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                   



                </div>
            </div>

        </div>

        <br/>
       





        </>
    );
}
export default Contact;