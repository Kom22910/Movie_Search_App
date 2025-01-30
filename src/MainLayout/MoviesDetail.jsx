

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviesDetail = () => {

    const params = useParams();

    const [data, setData] = useState();

    const [load, setLoad] = useState(false);

    const Fetch = async () => {
        try {
            setLoad(true);
            let res = await axios.get(`https://www.omdbapi.com/?i=${params.id}&apikey=33f76330`)
                .catch(err => {
                    return alert(err);
                })
            console.log(res.data);
            setData(res.data);
        }
        catch (err) {
            alert(err);
        }
        finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        Fetch();
    }, []);



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


            <div className="col-12 m-auto p-0 movieContainer">

                <div className="col-12 py-4 bg-dark">
                    <h3 className='text-center text-warning fw-bold'>{data && data.Title}</h3>
                </div>

                <div className="col-12 m-auto mt-4">
                    <div className="row">

                        <div className="col-lg-4  col-md-5 col-sm-6 col-12 ">
                            <div className=" col-12 image">
                                <img src={data && data.Poster} alt="The Fame Game" />
                            </div>
                        </div>


                        <div className="col-lg-8 col-md-7 col-sm-6 col-12 ms-auto sec2">
                            <div className="col-md-11 col-12 m-auto">

                                <table className='table m-auto'>

                                    <tbody>
                                        <tr>
                                            <td>Year</td>
                                            <td>{data && data.Year}</td>
                                        </tr>

                                        <tr>
                                            <td>Rated</td>
                                            <td>{data && data.Rated}</td>
                                        </tr>

                                        <tr>
                                            <td>Released</td>
                                            <td>{data && data.Released}</td>
                                        </tr>

                                        <tr>
                                            <td>Genre</td>
                                            <td>{data && data.Genre}</td>
                                        </tr>

                                        <tr>
                                            <td>Director</td>
                                            <td>{data && data.Director}</td>
                                        </tr>

                                        <tr>
                                            <td>Writer</td>
                                            <td>{data && data.Writer}</td>
                                        </tr>

                                        <tr>
                                            <td>Actors</td>
                                            <td>{data && data.Actors}</td>
                                        </tr>

                                        <tr>
                                            <td>Plot</td>
                                            <td>{data && data.Plot}</td>
                                        </tr>

                                        <tr>
                                            <td>Language</td>
                                            <td>{data && data.Language}</td>
                                        </tr>

                                        <tr>
                                            <td>Country</td>
                                            <td>{data && data.Country}</td>
                                        </tr>

                                        <tr>
                                            <td>Awards</td>
                                            <td>{data && data.Awards}</td>
                                        </tr>

                                        <tr>
                                            <td>imdbRating</td>
                                            <td>{data && data.imdbRating}</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                </div>

            </div>


        </>
    )
}

export default MoviesDetail;