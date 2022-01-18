import React from "react"
//retornar elementos fragmentados ou seja apenas um h1 e h2 não funciona, é preciso importar o React
export default function fragment(){
    return (
            <React.Fragment>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
            </React.Fragment>
    )
}