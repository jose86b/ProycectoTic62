import React, {Fragment} from 'react'
   


function Suma() {
    const [resultados, setResultados] = React.useState(0)
    const [resultador, setResultador] = React.useState(0)
    const [resultadom, setResultadom] = React.useState(0)
    const [resultadod, setResultadod] = React.useState(0)
    const [Valor1, setValor1] = React.useState(0);
    const [Valor2, setValor2] = React.useState(0);
    const Sumar = () => {
        console.log("Click")
        setResultados(parseInt(Valor1) + parseInt(Valor2));
    }
    const Restar = () => {
        console.log("Click")
        setResultador(parseInt(Valor1) - parseInt(Valor2));
    }
    const Multiplicar = () => {
        console.log("Click")
        setResultadom(parseInt(Valor1) * parseInt(Valor2));
    }
    const Dividir = () => {
        console.log("Click")
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
            <button onClick={ () =>Sumar ()}>Sumar</button>
            <button onClick={ () =>Restar ()}>Restar</button>
            <button onClick={ () =>Multiplicar ()}>Multiplicar</button>
            <button onClick={ () =>Dividir ()}>Dividir</button>



            
        </Fragment>
    )
}

export default Suma
