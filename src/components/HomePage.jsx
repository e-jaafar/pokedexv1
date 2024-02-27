import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pkmn from "../img/Pokemon_logo.png"

function HomePage({ data }) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 25;

    const types = [...new Set(data.flatMap(pokemon => pokemon.apiTypes.map(t => t.name)))];

    const filteredData = data.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
        (type === '' || pokemon.apiTypes.map(t => t.name.toLowerCase()).includes(type.toLowerCase()))
    );

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);
    
    return (
        <div className="w-100 h-100 bg-indigo-800 overflow-scroll h-screen">
            
            <Link to={'/'}> <img className='h-28 mx-auto' src={pkmn} alt="" /> </Link>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} className="w-100 h-100 flex items-center  justify-evenly my-10">
                {/* <h1 className="text-3xl "> List of Pokemon</h1> */}

                <select
                    value={type}
                    onChange={e => setType(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md ml-2"
                >
                    <option key="all" className='outline-blue' value="">All Types</option>
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                <input

                    name="search"
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md outline-blue-600"
                />
                <div className='flex justify-evenly text-white'>
                    {page > 1 && <button className="m-2 " onClick={() => setPage(page - 1)}>Previous</button>}
                    <select name="" value={page} onChange={e => setPage(parseInt(e.target.value))} className="text-black rounded outline-none" id="">
                        {[...Array(totalPages)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    {page < totalPages && <button className="m-2 " onClick={() => setPage(page + 1)}>Next</button>}

                </div>


            </div>

            <img src="" alt="" />
            <div className="w-100 h-100 grid grid-cols-1 md:grid-cols-3 justify-center items-center bg ">

                {currentData.map((item, index) => (
                    <div style={{border:" 0.01px indigo solid"}} className="  text-center p-5 rounded-lg hover:scale-105 m-2 hover:border-blue-500  " key={index}>
                        <Link to={`/pokemon/${item.name}`} className="text-blue-500">
                            <p className='text-black'>#{item.id}</p>
                            <h3 className="text-white text-2xl">{item.name}</h3>
                            <img style={{ width: 150, height: 150 }} className="w-300" src={item.image} alt={item.name} />
                        </Link>
                    </div>
                ))}
                <div>
                </div>
            </div>
            <div className='flex justify-evenly text-white'>
                    {page > 1 && <button className="m-2 " onClick={() => setPage(page - 1)}>Previous</button>}
                    <select name="" value={page} onChange={e => setPage(parseInt(e.target.value))} className="text-black rounded outline-none" id="">
                        {[...Array(totalPages)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    {page < totalPages && <button className="m-2 " onClick={() => setPage(page + 1)}>Next</button>}

                </div>        </div>
    );
}

export default HomePage;
