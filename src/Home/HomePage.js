import React from 'react'
import cover from '../data/imgs/9b549664066ee3397022ea36d5bad565.jpg'
import logo from '../data/imgs/logo.jpg'
import whoareyou from './whoarewe'
function HomePage() {
    return (
        <>
            <div style={{ position:"absolute"}}>
            <img src={cover} alt="cover"
            style={{width:"1000px" , height:"450px",position:"absolute"}}
                />
                <div style={{padding:"250px 0 0 450px"}}>
                
                    <div class="company-header-avatar" ></div>
                    <p style={{color:"white",position:"relative",paddingTop:"90px"}}> here is the name </p>
                </div>
            <div style={{position:"absolute",}}>

            
            <h1 style={{ color: "black",paddingTop:"120px",paddingLeft:"390px" }}>
                Who are we
                    </h1>
                    <br />
                    <whoarewe />
            </div>
                
                

            </div>
            
            
        </>
    )
}

export default HomePage
