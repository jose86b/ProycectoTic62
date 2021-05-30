import React, {Fragment} from 'react'
   


function Suma() {
    const [resultado, setResultado] = React.useState(0)
    const [Valor1, setValor1] = React.useState(0);
    const [Valor2, setValor2] = React.useState(0);
    const Sumar = () => {
        console.log("Click")
        setResultado(parseInt(Valor1) + parseInt(Valor2));
    }
    return (
        <Fragment>
            
            <input type="number" placeholder="Preimer Valor" onChange= {(e)=>setValor1(e.target.value)}/>
            <input type="number" placeholder="Segundo Valor" onChange= {(e)=>setValor2(e.target.value)}/>
            <input type="number" value={resultado}/>
            <button onClick={ () =>Sumar ()}>Sumar</button>

            
        </Fragment>
    )
}

export default Suma
