import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import StoreManager from './StoreManager'
import GamingManager from './GamingManager'

const Admin = () => {
    const {path} = useRouteMatch()
    return(
        <>
            <Route component={StoreManager} path={`${path}/storemanager`}/>
            <Route component={GamingManager} path={`${path}/gaming`}/>
        </>
    )
}

export default Admin