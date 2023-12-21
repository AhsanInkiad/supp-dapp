import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css'
function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <div class="container">
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>01</h2>
          <h3>Registration</h3>
          <p>Registration of participants in the blockchain.</p>
          <button onClick={redirect_to_roles}>Register</button>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>02</h2>
          <h3>Orders</h3>
          <p>Medicine orders wil be made here.</p>
          <button onClick={redirect_to_addmed} >Order Medicines</button>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>03</h2>
          <h3>Supply Chain</h3>
          <p>Supply chain will be controlled from here.</p>
          <button onClick={redirect_to_supply}>Supply Chain</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="box">
        <div class="content">
          <h2>04</h2>
          <h3>Track Record</h3>
          <p>Track record of the medicines will be shown here.</p>
          <button onClick={redirect_to_track}>Track Record</button>
        </div>
      </div>
    </div>



  </div>
    
  );
}

export default Home;
