export default function Estilo(props){
    return (
        <div>
            <h1 style={{backgroundColor: props.num >= 5 ? "#2D2" : "#444"}}>
                {props.texto}
            </h1>
        </div>
    )
}
