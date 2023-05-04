import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
//import { Button } from '@material-ui/core/' → not ideal because it imports all of material-ui/core which is very large


// require('./NavBar.css')

const buttonStyle = {
    marginRight: '10px'
}

class NavBar extends React.Component{
    render() {
        return(
            <div id="navbar">
                <Link to='/'>
                    <Button variant="contained" color="primary" style={buttonStyle}>
                        Customer Page
                    </Button>
                </Link>
                <Link to='/admin/storemanager'>
                    <Button variant="contained" color="primary" style={buttonStyle}>
                        Store Manager
                    </Button>
                </Link>
                <Link to='/admin/gaming'>
                    <Button variant="contained" color="primary" style={buttonStyle}>
                        Gaming Manager
                    </Button>
                </Link>
            </div>
        )
    }
}

export default NavBar