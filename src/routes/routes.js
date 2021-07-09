import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import DicionarioFinanceiro from '../pages/DicionarioFinanceiro'
import SobreAutora from '../pages/SobreAutora'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dicionariofinanceiro' component={DicionarioFinanceiro} />
                <Route path='/sobreautora' component={SobreAutora} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes