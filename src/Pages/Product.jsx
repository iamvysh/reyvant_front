import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

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
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../redux/product/CartSclice';
const Product = () => {
    
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const{id}=useParams()
  const [product,setproduct]=useState([])

  const getProduct=async()=>{
    try {
    
    const response= await axios.get(`https://rayvent.onrender.com/api/product/${id}`)
    // console.log(response)
    if(response.status===200){
      setproduct(response.data.data)
    }
  } catch (error) {
    console.log(error);
  }
  }

  const AddProductToCart=()=>{
    dispatch(AddToCart(product))
    navigate("/cart")
  }
  
  useEffect(()=>{
    getProduct()
  },[])

  console.log(product);
  return (
    <div>
     
     <Navbar/>


     <div className="mainproduct">

     <MDBContainer fluid className="my-5" >
      <MDBRow className="justify-content-center" >
        <MDBCol md="8" lg="6" xl="4" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={product.image}
                fluid
                className="w-100 mx-60"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark">
                      {product.title}
                    </a>
                  </p>
                  <p className="small text-muted">Dress</p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted">Rated 4.0/5</p>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark">
                  price
                  </a>
                </p>
                <p className="text-dark">₹ {product.price}</p>
              </div>
              <p className="small text-muted"> {product.description}</p>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <a href="#!" className="text-dark fw-bold">
                  Cancel
                </a>
                <MDBBtn color="primary" onClick={()=>AddProductToCart()}>Add To Cart</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>




     </div>




     <Footer/>
    




    </div>
  )
}

export default Product