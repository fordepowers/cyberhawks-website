import React from 'react';
import { Button, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import picture from './tanner.jpg';
import NavbarCustom from '../NavbarCustom/NavbarCustom';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className='Home'>
        <NavbarCustom activeTab='/home' />
        <Card className='bg-dark text-white' style={{ marginTop: '64px', height: '80vh' }}>
          <Card.Img src={picture} alt='Card image' />
          <Card.ImgOverlay>
            <div>
              <Card.Title><h1 className='welcome'>Columbia Basin College Cyberhawks</h1></Card.Title>
              <Card.Text>
                <p className='welcome-text'>
                  An elite cybersecurity club, we come from a small school but have big ambitions.
                  <br />
                  We regularly <Link to='/awards' className='in-text-link'>attend and place</Link> at nationally ranked cybersecurity competitions.
                  <br />
                </p>
                <p>
                  <Nav.Link target='_blank' href='https://discord.gg/XBgxUnc'><Button size='lg' variant='dark'>Join the Discord</Button></Nav.Link>
                </p>
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Home;
