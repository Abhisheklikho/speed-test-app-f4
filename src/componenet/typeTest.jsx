
import {FaKeyboard,FaUserCircle } from "react-icons/fa";


function Type() {
  return (

      <div className="Type">
          
          {/* <p style={{color: 'yellow', fontSize: '50px'}}> Aate h thoda der me</p> */}

          <div className="header">
              <div className="header right">            {/*   right header start*/}
                <span class="logo">TypeCat</span>            
               <FaKeyboard />
              </div>

               <div className="header left">
                  <FaUserCircle/>
              </div>
          </div>

          <div className="main">
              
          </div>

          <div className="footer">
              
    </div>
      
    </div>
  );
}

export default Type;