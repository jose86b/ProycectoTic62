import React, {Fragment} from 'react'
   


function Suma() {
    const [resultados, setResultados] = React.useState(0)
    const [resultador, setResultador] = React.useState(0)
    const [resultadom, setResultadom] = React.useState(0)
    const [resultadod, setResultadod] = React.useState(0)
    const [Valor1, setValor1] = React.useState(0);
    const [Valor2, setValor2] = React.useState(0);
    const Calcular = () => {
        console.log("Click")
        setResultados(parseInt(Valor1) + parseInt(Valor2));
        setResultador(parseInt(Valor1) - parseInt(Valor2));
        setResultadom(parseInt(Valor1) * parseInt(Valor2));
        setResultadod(parseInt(Valor1) / parseInt(Valor2));
        
    }
    return (
        <Fragment>
            
            <input type="number" placeholder="Preimer Valor" onChange= {(e)=>setValor1(e.target.value)}/>
            <input type="number" placeholder="Segundo Valor" onChange= {(e)=>setValor2(e.target.value)}/>
            <input type="number" value={resultados}/>
            <input type="number" value={resultador}/>
            <input type="number" value={resultadom}/>
            <input type="number" value={resultadod}/>
            <button onClick={ () =>Calcular ()}>Calcular</button>

            
        </Fragment>
    )
}

export default Suma
