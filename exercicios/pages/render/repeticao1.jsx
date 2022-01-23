export default function repeticao1() {
    const lista = [
        "nome1",
        "nome2",
        "nome3",
        "nome4",
    ]
    function renderizarLista(){7
        return lista.map((nome,i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}


/* function renderizarLista(){7
    const itens = []
    for(var i = 0; i < lista.length; i++){
        itens.push(<li key={i}>{lista[i]}</li>)
    }
    return itens
} */