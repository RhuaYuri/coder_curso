function acao1(){
    console.log('acao1')
}
export default function  botao(){
    return (
        <div>
            <button onClick={acao1}>
                Click aqui
            </button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}