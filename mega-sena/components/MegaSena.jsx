import style from "../pages/css/megaSena.module.css"

export default function MegaSena(props) {
    var lista = []
    var listaDiv = []
    var num = 0

    function gerarNum() {
        num = parseInt(Math.random() * 61)
        if(!lista.includes(num)){
            lista.push(num)
        }else{
            return gerarNum()
        }
    }

    for(var i = 0; i < props.number; i++){
        gerarNum()
    }

    lista.sort((a, b) => a - b)

    for(var i = 0; i < lista.length; i++){
        listaDiv.push(<div className={style.circulo} key={i}><h2>{lista[i]}</h2></div>)
    }

    
    
    return listaDiv
}