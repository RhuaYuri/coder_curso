import { useState } from "react"

export default function contador(){
    const [valor, setValor] = useState(0)
    const estilo = {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function decrementar(){
        setValor(valor - 1)
    }

    function incrementar() {
        setValor(valor + 1)
    }

    return (
        <div style={estilo}>
            <button onClick={decrementar}>Decrementar</button>
            <h1>Valor: {valor}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}