import React from 'react';

//components
import Navbar from './Navbar';
import Upload from './Upload';

class Home extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Upload/>
            </div>
        );
    }
}

export default Home;