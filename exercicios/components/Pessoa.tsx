interface PessoaProps {
    nome: string,
    idade?: number
}

export default function Pessoa(props){
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? "Idade não informada"}</div>
        </div>
    )
}