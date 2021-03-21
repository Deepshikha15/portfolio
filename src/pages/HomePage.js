import React from 'react'
import HeroHome from '../components/HeroHome';
import Carousel from '../components/Carousel';
function HomePage(props){
    return(
        <div>
            <HeroHome title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel/>
        </div>
        
    );
}
export default HomePage;