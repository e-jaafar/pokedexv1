import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bgpkmn from "../img/1073995.jpg"
import pkball from "../img/Poke_Ball_icon.svg.png"
import Loading from "./Loading"

function PokemonPage() {
    const { name } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // ----------------------

    useEffect(() => {
        setLoading(true); 
        axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
            .then((response) => {
                setTimeout(() => {
                    setData(response.data);
                    setLoading(false);
                }, 3000); // delay of 3 seconds
            })
            .catch((error) => console.log(error));
    }, [name]);

    if (loading) {
        return <Loading />;
    }

    // useEffect(() => {
    //     axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
    //         .then((response) => setData(response.data))
    //         .catch((error) => console.log(error));
    // }, [name]);

    // if (!data) {
    //     return <div style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" /></div>;
    // }

    const types = [...new Set(data.apiTypes.map(t => t.name))];

    return (
        <div style={{ backgroundColor: 'rgb(55 48 163)', borderRight: '13px solid black', backgroundImage: `url(${bgpkmn})`, backgroundSize: 'cover', backgroundPosition: '' }} className="w-7/12 h-100 flex flex-col items-center">
            <div className="p-5 rounded-lg mx-auto mt-10  bg-opacity-50 backdrop-blur w-4/6 text-white">
            <div className="flex flex-col items-center">
    <p className="text-3xl">Type : {types.join(', ')}</p>
    <div className="flex">
        {data.apiTypes.map((type, index) => (
            <img style={{ width: 100, height: 100 }} key={index} src={type.image} alt={type.name} />
        ))}
    </div>
    
</div>
    <hr className=' w-100 my-4 mx-auto' />

                <img  style={{ width: 400, height: 400 }} className="mx-auto" src={data.image} alt={data.name} />
                <div className="flex flex-col items-center">
                    <div>ID Pokédex : <span className='ml-1'>{data.id}</span></div>
                    <h3 className="text-3xl">{data.name}</h3>
                    <div className='text-xl'>
                        {/* <p>Height: {data.height}</p> */}
                        {data.apiEvolutions.length > 0 && (
    <div>
    <p className='text-xl flex mr-2 '>Evolution :  {data.apiEvolutions.map((evolution, index) => (
            <div className='flex items-center' >
        <Link key={index} to={`/pokemon/${evolution.name}`}>
            <span className='flex ml-1'> {evolution.name}
            <img className='w-10' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.pokedexId}.png`} alt={evolution.name} />
            </span>
        </Link>
            </div>
    ))}</p>
</div>

)}
                    </div>
                </div>
                <p>{data.description}</p>
                <p>{data.types && data.types.map(type => type.name).join(', ')}</p>
                {/* <h4>Stats</h4> */}
                {data.stats && (
                    <>
                        {/* <p>HP: {data.stats.HP}</p>
                      <p>Attack: {data.stats.attack}</p>
                      <p>Defense: {data.stats.defense}</p>
                      <p>Special Attack: {data.stats.special_attack}</p>
                      <p>Special Defense: {data.stats.special_defense}</p>
                      <p>Speed: {data.stats.speed}</p> */}
                    </>
                )}
                {/* <h4>Resistances</h4>
                {data.apiResistances && data.apiResistances.map(resistance => (
                    <p key={resistance.name}>{resistance.name}: {resistance.damage_multiplier} ({resistance.damage_relation})</p>
                ))} */}
            </div>
        </div>
    );
}

export default PokemonPage;
