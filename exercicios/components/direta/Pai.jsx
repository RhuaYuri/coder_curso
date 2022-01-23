import Filho from "./Filho";

export default function Pai(props){
    return (
        <div> 
            <Filho nome="Yuri" familia="Sardinha"/>
            <Filho nome="Andressa" familia={props.familia}/>
            <Filho {...props} nome="Sandy"/>
        </div>
    )
}