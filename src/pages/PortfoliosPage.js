import React from 'react'
import Title from '../components/Title'
import PortfolioData from '../PortfolioData.js'



function PortfoliosPage() {
    return (
        <div className='PortfoliosPage'>
        <Title title={'Portfolio'} span={'Portfolio'}/>
            <div className="portfolio__container">
                <div className="cards">

 {
     PortfolioData.map((data)=>{
         return(
            <a className="card" key={data.path} href={data.path} target='__blank'>
            <div className="portfolio">
                <img src={data.image} alt="" />
            </div>
            <div className="portfolioTitle">
                {data.title}
                <span>{data.span}</span>
            </div>
        </a>

         )
     })
 }
                    
                </div>
            </div>
        </div>
    )
}

export default PortfoliosPage
