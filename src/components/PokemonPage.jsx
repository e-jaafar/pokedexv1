import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PokemonPage() {
    const { name } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));
    }, [name]); 

  if (!data) {
    return <div><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" /></div>;
  }

  return (
    <div style={{backgroundColor: 'red', borderRight: '33px solid grey'}} className="  w-6/12	 h-100 flex flex-col  items-center     "
    
    //  style={{backgroundImage: `url('./img/1073995.jpg')`}}
     >
        <div>
          {/* <img src="./img/1073995.jpg" alt="" /> */}
        </div>
        {/* <img  src="./img/1073995.jpg" alt="" /> */}
        <div className=" p-5 rounded-lg  mx-auto mt-56  bg-opacity-50 backdrop-blur w-4/6 text-white">
            <div>
              <p>type : {data.types && data.types.map(type => type.name).join(', ')}</p>
            </div>
          <img  style={{width: 400, height: 400}} className="" src={data.image} alt={data.name} />
          <div>
            <div > ID Pokédex :{data.id} </div>
            <div>
              <p>Height: {data.height}</p>
            </div>
          </div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <p>{data.types && data.types.map(type => type.name).join(', ')}</p>
          <h4>Stats</h4>
          {data.stats && (
            <>
              {/* <p>HP: {data.stats.HP}</p>
              <p>Attack: {data.stats.attack}</p>
              <p>Defense: {data.stats.defense}</p>
              <p>Special Attack: {data.stats.special_attack}</p>
              <p>Special Defense: {data.stats.special_defense}</p>
              <p>Speed: {data.stats.speed}</p>
               */}
            </>
          )}
          {/* <h4>Resistances</h4>
          {data.apiResistances && data.apiResistances.map(resistance => (
            <p key={resistance.name}>{resistance.name}: {resistance.damage_multiplier} ({resistance.damage_relation})</p>
          ))} */}
        </div>
    </div>
  )
}
export default PokemonPage
