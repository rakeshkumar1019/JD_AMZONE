import React,{useState} from 'react'
import Banner from './Banner'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Products from './Products';
function Home() {
   let [isBanner,setIsBanner] =useState(true)
   let isBannerVivsible=()=>{
      setIsBanner(!isBanner)       
    }
    return (
        <div>
            {isBanner && 
              <IconButton onClick={isBannerVivsible} aria-label="fingerprint" color="secondary">
                <CloseIcon  /> Remove Banner
              </IconButton>
            } 
            {!isBanner && 
              <IconButton onClick={isBannerVivsible} aria-label="fingerprint" color="secondary">
                <CheckIcon /> Show Banner
              </IconButton>
            } 
            {isBanner &&  <Banner/>}
            <Products/>
        </div>
    )
}

export default Home
