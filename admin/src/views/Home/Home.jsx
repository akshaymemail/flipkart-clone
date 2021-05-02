import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import {useSelector} from 'react-redux'

function Home(props) {
  // admin signin state 
  const {isLoggedIn} = useSelector(state => state.adminSignin)
  if(!isLoggedIn){
    props.history.push('/login')
  }

  return (
    <div>
      <Jumbotron className='bg-light' fluid>
        <Container>
          <h1>Admin Dashboard</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellendus necessitatibus officiis placeat eius, explicabo neque incidunt sed doloremque rem quasi at voluptatum molestiae. Nihil odit sequi soluta quibusdam. Ea!
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
