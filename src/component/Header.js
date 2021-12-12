/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import './Header.css'
import theme from '../assets/header/theme-switch.png'
export default function Header() {
    return (
       <div className='header'>
           <div className='logoContainer'>
               <img src={punkLogo} className='punkLogo' alt=''/>
           </div>
           <div className='searchBar'>
               <div className='searchIconContainer'>
                    <img src= {searchIcon} />           
               </div>
               <input className='searchInput' placeholder='Collection,item or user ...'/>
           </div>  
           <div className='headerItems'>
               <p>Drops</p>
               <p>Marketplace</p>
               <p>Create</p>
           </div> 
           <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src ={theme} alt='' /> 
                </div>
            </div>  
            <div className='login'>
                GET IN
            </div>     
       </div>
    )
}
