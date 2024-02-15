import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Carouselhero from '../Components/Carouselhero'
import "../styles/Landing.css"
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
import Footer from '../Components/Footer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts } from '../redux/product/ProduxSlice';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
    
   const navigate=useNavigate()
   const dispatch=useDispatch()
   const product=useSelector((state)=>state.product.products)
  const getAllProducts=async()=>{
    const products= await axios.get("https://rayvent.onrender.com/api/getproduct")
    dispatch( AllProducts(products.data.data));
  }
    useEffect(()=>{
      getAllProducts()
    },[])
  console.log(product);
  return (
    <div>

        <Navbar/>
        
        <Carouselhero/>

      
        <div className="showproducts">

        <MDBContainer fluid className=" text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>
       
        

      <MDBRow   > 
      
        {product?.map((item)=>(
        <MDBCol md="12" lg="2" className="mb-4 d-flex flex-wrap" key={item._id}>
          <MDBCard   onClick={()=>navigate(`/product/${item._id}`)}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={item.image}
                fluid
                className="w-100 mh-100"

              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">{item.title}</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">₹ {item.price}</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
          ))}
        
       
      
        
      </MDBRow>
      
       
    </MDBContainer>





        </div>
       <Footer/>       
    </div>
  )
}

export default Landing