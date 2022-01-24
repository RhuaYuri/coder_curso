import { useState } from "react"
import MegaSena from "../../components/MegaSena"
import style from "./megaSena.module.css"

export default function megaSena(){
    const [number, setNumber] = useState(5)


    return (
        <div className={style.conteiner}>
            <div className={style.row}>
            <MegaSena number={number}></MegaSena>
            </div>

            <div style={{flexDirection: "column"}}>
                <input type="number" value={number} min={5} max={15} className={style.input} onChange={ev => setNumber(ev.target.value)}/>
            </div>
        </div>
    )
}