import Filho from "./Filho";

export default function Pai(props){
    function faleComigo(param){
        console.log(param)
    }
    return (
        <div> 
            <Filho funcao={faleComigo}/>
        </div>
    )
}