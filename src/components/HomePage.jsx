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
        <div className="w-100 h-100 bg-red">
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', gap: 20 }} className="w-100 h-100 flex items-center bg-red justify-evenly m-10">
                {/* <h1 className="text-3xl "> List of Pokemon</h1> */}

                <input

                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                />
                <select
                    value={type}
                    onChange={e => setType(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md ml-2"
                >
                    <option value="">All Types</option>
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                <div className='flex justify-evenly'>
                    {page > 1 && <button className="m-2 " onClick={() => setPage(page - 1)}>Previous</button>}
                    {page < totalPages && <button className="m-2 " onClick={() => setPage(page + 1)}>Next</button>}

                </div>


            </div>
            <img className='h-28 mx-auto' src={pkmn} alt="" />

            <img src="" alt="" />
            <div className="w-100 h-100 flex flex-wrap justify-center items-center bg ">

                {currentData.map((item, index) => (
                    <div className="  text-center p-5 rounded-lg hover:scale-105 m-2 hover:border " key={index}>
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
                <div className='flex justify-evenly'>
                    {page > 1 && <button className="m-2 " onClick={() => setPage(page - 1)}>Previous</button>}
                    {page < totalPages && <button className="m-2 " onClick={() => setPage(page + 1)}>Next</button>}

                </div>
        </div>
    );
}

export default HomePage;
