import React from 'react'

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
          <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Welcome to My Cart, where every click leads to a world of endless shopping possibilities. Dive into our curated collection of products, meticulously selected to elevate your lifestyle. With a seamless browsing experience and secure transactions, we're here to make your online shopping journey unforgettable. Discover convenience, quality, and style at your fingertips with My Cart - your ultimate destination for all things fabulous.
          </p>
        </section>

       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          
            MY-CART
        </a>
      </div>
    </MDBFooter>



    </div>
  )
}

export default Footer