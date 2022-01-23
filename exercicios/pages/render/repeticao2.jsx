import listaProduto from "../../data/listaProduto";
export default function repeticao2() {
    const comBorda = {
        border: "1px solid #000"
    }
    function renderizarLinhas(){
        return (
            listaProduto.map(produto => {
                return (
                    <tr key={produto.id} style={comBorda}>
                        <td style={comBorda}>{produto.id}</td>
                        <td style={comBorda}>{produto.nome}</td>
                        <td style={comBorda}>{produto.preco}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div>
            <table style={comBorda}>
                <thead >
                    <th >Código</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}