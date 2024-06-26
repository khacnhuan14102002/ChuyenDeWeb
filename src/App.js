import React, {Fragment, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {routes} from "./routes";
import DefaultComponent from "./Components/DefaultComponent/DefaultComponent";
import axios from "axios";
import {useQuery} from "react-query";

function App() {

    // useEffect(() => {
    //     fetchAPI()
    //
    // },[])
    console.log('process.env.REACT_BACKEND_API_URL', process.env.REACT_APP_API_URL)
    const fetchAPI = async () => {
        const  res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
       return res.data
    }
    const query = useQuery({queryKey:['tools'], queryFn: fetchAPI})

    console.log('query',query)

    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page
                        const Layout = route.isShowHeader ? DefaultComponent : Fragment
                        return (
                            <Route key= {route.path} path={route.path} element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }/>
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}
export default App