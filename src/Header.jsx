import React from 'react'
import header_logo from './assets/images/logo.svg'
import ham_logo from './assets/images/icon-hamburger.svg'
import close_logo from './assets/images/icon-close.svg'
import image_mockup from './assets/images/image-mockups.png'

const Header = ({ openSidebar, closeSidebar, toggle}) => {
  return (
    <>
            <div className="main_heading">
                <div className="header">
                <div className="header_logo_div"><img className="header_logo" src={header_logo} alt="logo"/></div>
                <ul className="header_link">
                    <li className="header_link_item"><a href="#" className="nav_link">Home</a></li>
                    <li className="header_link_item"><a href="#" className="nav_link">About</a></li>
                    <li className="header_link_item"><a href="#" className="nav_link">Contact</a></li>
                    <li className="header_link_item"><a href="#" className="nav_link">Blog</a></li>
                    <li className="header_link_item"><a href="#" className="nav_link">Careers</a></li>
                </ul>
                <img className="header_close nav_ham"  onClick={openSidebar} src={ham_logo} alt="close_logo"/>
             <div className="header_first_btn"><a href="#" className="section_one_btn navbar_button">Request Invite</a></div>
            
            </div>

            <div className={toggle ? "sidebar open_sidebar" : "sidebar"}>
                <div className="sidebar_header">
                    <div className="header_logo_sidebar"><img className="header_logo" src={header_logo} alt="logo"/></div>
                    <img className="header_close" onClick={closeSidebar}  src={close_logo} alt="close_logo"/>


                </div>

                <div className="sidebar_section">
                    <ul className="sidebar_links">
                        <li className="header_sidebar_link"><a href="#" className="sidebar_nav_link">Home</a></li>
                        <li className="header_sidebar_link"><a href="#" className="sidebar_nav_link">About</a></li>
                        <li className="header_sidebar_link"><a href="#" className="sidebar_nav_link">Contact</a></li>
                        <li className="header_sidebar_link"><a href="#" className="sidebar_nav_link">Blog</a></li>
                        <li className="header_sidebar_link"><a href="#" className="sidebar_nav_link">Careers</a></li>
                    </ul>


                </div>




            </div>
            
            
            <div className="banner_section">
                <div className="section_one">
                    <img className="image_mockups" src={image_mockup} alt="image_mockups"/>
                </div>
                
                <div className="section_one_txt">
                    <h1>Next generation digital banking</h1> 
                    <p className="section_one_parg">Take your financial life online. Your Easybank
                        account will be a one-top-shop for spending,
                        saving, budgeting, investing, and much more.
                    </p>
                    <a href="#" className="section_one_btn banner_btn">Request Invite</a>
                
                </div>
            </div>
        </div>

        </>

    
  )
}

export default Header