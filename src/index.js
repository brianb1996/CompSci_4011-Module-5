import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './containers/Admin'
import Customer from './containers/Customer'
import { BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/NavBar'



const AppContainer = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Route component={Customer} exact path='/'/>
            <Route component={Admin} path='/admin'/>

        </BrowserRouter>
    )
}

//-------Without browser router---------------
//
//
// const AppContainer = () => {
//     return(
//         <>
//             <Admin />
//         </>
//     )
// }

ReactDOM.render(<AppContainer/>, document.querySelector('#root'))