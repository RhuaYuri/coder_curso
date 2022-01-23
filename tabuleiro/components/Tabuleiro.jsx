import "../styles/Home.module.css"
export default function Tabuleiro (props){
    return (
        <>
        <div style={{height: "50px", width: "100vw", height: "100vh", background: "#6C7A89", display: "center", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            {gerarTabuleiro()}
        </div>
    </>
    ) 
}

function gerarTabuleiro(){
    var lista = []
    var listaEx = []
    var cor = "black";
    for(var u = 1; u <= 8; u++){
        for(var i = 0; i < 8; i++){
            if ((u % 2) == 0){
                cor = "#fff"
                if(i % 2 == 0){
                    cor = "black" 
                }
            }else{
                cor = "black"
                if((i % 2) == 0){
                    cor = "#fff" 
                }
            }lista.push(<div style={{background: cor, width: "50px", height: "50px", display: "flex"}}></div>)
        }listaEx.push(<div style={{background: "#6C7A89", display: "flex",  alignItems: "center"}}>{lista}</div>)
        lista = []
    }
    return listaEx
}