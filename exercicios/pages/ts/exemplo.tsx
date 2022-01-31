import Pessoa from "../../components/Pessoa";

export default function exemplo() {
    return (
        <div>
            <Pessoa nome="Yuri" idade={17}/>
            <Pessoa nome="Peter" />
        </div>
    )
}