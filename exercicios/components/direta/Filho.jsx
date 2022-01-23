export default function Filho(props){
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <h1> {props.nome} </h1>
            <h1> {props.familia} </h1>
        </div>
    )
}