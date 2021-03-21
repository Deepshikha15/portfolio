import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import imageOne from '../assets/images/wp6418225-asteroid-planet-explosion-wallpapers.jpg';
import imageTwo from '../assets/images/wallpapertip_succulent-desktop-wallpaper_549303.jpg';
import imageThree from '../assets/images/derrick-cooper-L505cPnmIds-unsplash.jpg';
import Card from './Card';
import { Container, Row} from 'react-bootstrap';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Breaking Planet',
                    subTitle: 'An asteroid planet explosion',
                    imgSrc: imageOne,
                    //link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Calm',
                    subTitle: 'Succulent on Desk',
                    imgSrc: imageTwo,
                   // link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Trekking woods',
                    subTitle: 'All the way up to hills',
                    imgSrc: imageThree,
                   // link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id) =>{
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false :true;
        items.forEach(item =>{
            if(item.id !== id){
                item.selected = false;
            }

        });

        this.setState({
            items
        });

        
    } 
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render(){
        return(
          <Container fluid={true}>
              <Row className="justify-content-around">
                  {this.makeItems(this.state.items)}
              </Row>
          </Container>
        );

    }
}
export default Carousel;