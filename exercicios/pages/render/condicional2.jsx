import If from "../../components/If";
import SomentePar from "../../components/somentePar";

export default function condicional2(){
    const numero = 1
    return (
        <div>
            <If teste={numero % 2 == 0}>
                <h1>O número {numero} é Par</h1>
            </If>
            <If teste={numero % 2 == 1}>
                <h1>O número {numero} é Ímpar</h1>
            </If>
        </div>
    )
}