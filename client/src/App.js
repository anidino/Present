
import React from 'react';
import Profile from './components/Profile';
import Time from './components/Time';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Logout from './components/Logout';
import Logo from './components/Logo';
import Playlists from './components/Playlists';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div>
      <div>
      <Nav></Nav>

      </div>


      <div>
      <Logo></Logo>
     
      <Time></Time>
      </div>
    
      <main>
      <Playlists></Playlists>
      <Gallery></Gallery>
      <Quote></Quote>
      <Donate></Donate>
      <Profile></Profile>
    

      </main>
      <div>
        <Logout></Logout>
      </div>
      <footer><Footer></Footer></footer>
    </div>
 
  );
}

export default App;
