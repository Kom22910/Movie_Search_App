


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCards = ({ CardData }) => {

    let cardinfo = CardData;

    const nav = useNavigate();


    const funcId = (id)=>{
        id ?
         nav(`movies/${id}`) : alert("Click proper Cards")
    }

    return (
        <>

            <div className="col-12 p-3 cardContainer py-5">
                <div className="row">

                    {
                        cardinfo ?
                        cardinfo.map((val) => {
                            return (
                                <div className=" cards m-auto my-4" key={val.imdbID} onClick={()=>funcId(val.imdbID)}>
                                    <div className="col-10 m-auto inner-card">
                                        <div className="row">

                                            <div className=" col-12 card-header">
                                                <img src={val.Poster} alt={val.Title} />
                                            </div>


                                            <div className=" col-12 card-body my-md-3 my-4">
                                                <h4 className='text-center'>
                                                    {val.Title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <h4 className='text-center'>No Data Found</h4>
                    }




                </div>
            </div>


        </>
    )
}

export default MovieCards;