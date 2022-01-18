export  default function jsx4(){
    const subtitulo = "Estou no JavaScript"
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(5, 3)}</h4>
            <h5>{entre(15, 10, 17)}</h5>
        </div>
    )
}


function entre (valor, min, max){
    if (valor >= min && valor <= max){
        return "Sim"
    }else{
        return "Não"
    }
}