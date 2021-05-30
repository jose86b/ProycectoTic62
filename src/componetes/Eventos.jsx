import React ,{Fragment} from 'react'


function Eventos() {
    const [saludo, setSaludo] = React.useState('hola mundo ');
    const cambiarEstado = () =>{
        console.log ("diste un clic")
        setSaludo ("a sos re puto")
    }

    return (
        <Fragment>
            { saludo}
            <button onClick={()  => cambiarEstado ()}>Click</button>
          
        </Fragment>
    )
}

export default Eventos
