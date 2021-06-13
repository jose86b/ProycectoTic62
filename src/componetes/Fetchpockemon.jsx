import React from 'react'

function Fetchpockemon() {
    const [pokemon, setPokemon] = React.useState([]);
    const obtenerPockemones = async () => {
        console.log('hola')
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/')
        const datos = await res.json()
        setPokemon(datos.results)

        //console.log(datos.results)
    }   
    return (
        <div>
            <table className='table table-dark'>
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                </tr>
                {
                     
                    pokemon.map((poke, index) => (
                        <tr key={index}>
                            <td>{poke.name}</td>
                            <td><a href={poke.url}>pajina del poke</a></td>
                        </tr>
                    ))
                }
            </table>
           
           
            <button onClick={() => obtenerPockemones()}>obtenerpockemones</button>
        </div>
    )
}

export default Fetchpockemon
