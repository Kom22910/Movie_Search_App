
import React, { useState } from 'react'
import Search from './Search';

import '../App.css'
const Layout = () => {

    const [load, setLoad] = useState(false);


    const Loading = (s)=> {
        s === true ? setLoad(true) : setLoad(false)
    }


    return (
        <>

            {
                load &&
                <div className="col-12 loading">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            <div className="container-fluid p-0 MainLayout">
                <div className="col-12 bg-dark py-4">
                    <h1 className='text-center fw-bold text-warning'>Movie Search Platform</h1>
                </div>



                <Search fun={Loading} />





            </div>

        </>
    )
}

export default Layout;