export default function lista1(){
    return <div>{gerarLista(10)}</div>
}

function receber(){
    return <input type="number" />
}

function gerarLista(x){
    const lista = []
    for(let i = 1; i <= x; i++){
        lista.push(<span>{i}</span>)
    }
    return lista
}
