import React from 'react'
import NavBar from '../components/Navbar';

function Layout(props){
    //const children = pops.children

    return (
        <React.Fragment>
        <div>
            <NavBar/>
            {props.children}
        </div>
        </React.Fragment>
        )
}

export default Layout