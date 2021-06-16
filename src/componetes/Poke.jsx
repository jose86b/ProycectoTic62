import React from 'react'

function Poke() {
    const [pokemon, setPokemon] = React.useState([]);
    const obtenPokemones = async () => {
        const spes = await fetch ('https://pokeapi.co/api/v2/pokemon/3/')
        const datos = await spes.json()
        setPokemon(datos.abilities)
        
        
    }
    return (
        <div>
            <table className='table table-dark'>
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                </tr>
                {
                    pokemon.map((pokes, index) => (
                        <tr key={index}>
                            <td>{pokes.ability.name}</td>
                            
                        </tr>
                    ))
                }
            </table>
            <button onClick={()=> obtenPokemones()}>AS</button>
        </div>
    )
}

export default Poke
