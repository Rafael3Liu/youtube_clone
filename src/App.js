import React from 'react'
import {BrowserRouter,Router,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,Feed,ChannelDetail,VideoDetail,SearchFeed} from './components';


const App = () => {
  
    <BrowserRouter>
      <Box sx={{ backgroundColor:'#000'}}>
        <Navbar  />
        <Router>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Router>
      </Box>
    </BrowserRouter>
 
}

export default App