


import React, { useState } from 'react';
import axios from 'axios';
import MovieCards from './MovieCards';

const Search = ({fun}) => {


    const [search, setSearch] = useState({
        "title" : ""
    });



    const[data , setData]= useState([]);

    const ChangeData = (e) => {
        const { name, value } = e.target;
        setSearch({...Search , [name] : value});
    }

    const Submit = (e) =>{
        e.preventDefault();

        const Fetch = async()=>{
            try{
                fun(true);
                await axios.get(`https://www.omdbapi.com/?s=${search.title}&apikey=33f76330`)
                .then((res)=>{
                    alert("Search Successfully");
                    console.log(res.data.Search);
                    setData(res.data.Search);
                })
                .catch((err)=>{
                    alert(err);
                });
            }
            catch(err){
                alert(err);
            }
            finally{
                fun(false)
            }
        }
        Fetch();
    }



    return (
        <>

            <div className="col-6 m-auto py-3 searchBar">
                <form action="" onSubmit={(e)=>Submit(e)}>
                    <div className="row">


                        <div className="col-6">
                            <input type="text" placeholder='Enter movie name' value={search.title} name='title' onChange={(e)=>ChangeData(e)} className='form-control py-2' />
                        </div>

                        <div className="col-3">
                            <button className='btn btn-danger'>Search</button>
                        </div>
                    </div>
                </form>
            </div>


            <MovieCards CardData={data}/>




        </>
    )
}

export default Search;