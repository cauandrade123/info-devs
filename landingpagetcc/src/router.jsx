 import{BrowserRouter, Routes, Route} from 'react-router-dom'

import Page1 from './pages'

export default function Navegacao (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={ <Page1  />} />
            </Routes>
        </BrowserRouter>
    )
}