import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Guias } from "../Guias/Guias"
import { Main } from "../Main/Main"

export const AppRoutes = () => {
    return (

        <BrowserRouter>
            <Routes>                
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/:guias" element={<Guias/>} />

            </Routes>
        </BrowserRouter>
    )
}