import React, {  useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../redux/product/ProduxSlice';


const Navbar = () => {

    const [openBasic, setOpenBasic] = useState(false);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [value,setValue]=useState("")
    



    const handleSearch=()=>{
      dispatch(searchProducts(value))
    }
  return (
    <div>

<MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>MY-CART</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
             <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>mens wear</MDBDropdownItem>
                  <MDBDropdownItem link>ladies wear</MDBDropdownItem>
                  <MDBDropdownItem link>kids wear</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
              <FaShoppingCart className='fs-4'  onClick={()=>navigate("/cart")}/>

              </MDBNavbarLink>
            </MDBNavbarItem>
            

            
          </MDBNavbarNav>


          <form className='d-flex input-group w-auto'>


            <input type='search' className='form-control' onChange={(e)=>setValue(e.target.value)} placeholder='Search Product' aria-label='Search' />
            <MDBBtn color='primary' onClick={handleSearch} >Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Navbar