import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
      return(
     <div className=" header">
       <div className="logo-container"> 
       <img className="logo"
       src="https://github.com/chetannada/Namaste-React/blob/main/Chapter%2004%20-%20Talk%20is%20Cheap,%20show%20me%20the%20code/Images/Food%20Fire%20Logo.png?raw=true"
            />   
       </div>

        <div className="nav-items">
          <ul>
            <li> Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>   

     </div>
     );
};
 RestroCard=()=>{
  return(
    <div className="card">
      <img 
      classname="res-logo"
      alt="res-logo" 
      src="https://img.freepik.com/free-vector/hand-drawn-chicken-biryani_23-2148729557.jpg?w=996&t=st=1697251096~exp=1697251696~hmac=e8ea7c491d9139e5b20419461e27072ee514d628f27e01e156eccf2430eb0f05"
      />
       <h3>Meghna foods</h3>
       <h3>Biryani,North Indian</h3>
       <h3>4.5 stars</h3>
       <h3>25 minutes</h3>

    </div>
  );
 };

const Body =()=>{
return(
  <div className="body">
    <div className="search">Search</div>
  <div className="res-container">
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
  </div>

  </div>

);

};

const AppLayout=()=>{
      return  (
      <div className="Layout"> 
        <Header/>
          <Body/> 
        </div>  
      
      ) ;  
};



     
const root= ReactDOM.createRoot(document.getElementById("root")); 

root.render(<AppLayout/>);