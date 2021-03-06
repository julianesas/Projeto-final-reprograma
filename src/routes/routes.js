import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import DicionarioFinanceiro from '../pages/DicionarioFinanceiro'
import SobreDesenvolvedora from '../pages/SobreDesenvolvedora'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dicionariofinanceiro' component={DicionarioFinanceiro} />
                <Route path='/sobredesenvolvedora' component={SobreDesenvolvedora} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes