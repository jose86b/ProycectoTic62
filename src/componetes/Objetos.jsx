import React, {Fragment}from 'react'


function Objetos() {
    const listaCarros =[
         {
            marca: 'Ferari',
            modelo: 'Testarosa',
            color: 'Rojo xd',
            espesi: {
                hp: '600hp',
                nmt: '500',
                cero_a_cien: '8seg',
                traccion: 'AWD'
                    }
        },
        {
            marca: 'Lamborgini',
            modelo: 'huracan',
            color: 'verde lamborgini',
            espesi: {
                hp: '800hp',
                nmt: '700',
                cero_a_cien: '5seg',
                traccion: 'AWD'
                    }
        }
    ]
    
    return (
        <Fragment>
            <h1>hol</h1>
            {
                listaCarros.map((carro) => (
                    <div key={carro.marca}>
                        <h1>Marca:</h1>
                        <h1>{carro.marca}</h1>
                        <h1>Modelo:</h1>
                        <h1>{carro.modelo}</h1>
                        <h1>Color:</h1>
                        <h1>{carro.color}</h1>


                    </div>
                ))
            }

        </Fragment>
    )
}

export default Objetos
