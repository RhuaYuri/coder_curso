export default function Titulo(props){
    console.log(props)
    /*
    if (props.pequeno){
        return (
            <>
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2>
            </>
        )
    } else{
        return (
            <>
                <p>{props.principal}</p>
                <p>{props.secundario}</p>
            </>
        )
    }
    */
   //Utilizano Operador ternário
   return props.pequeno ? (
            <>
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2>
            </>
        ) :
        (
            <>
                <p>{props.principal}</p>
                <p>{props.secundario}</p>
            </>
        )
    
}