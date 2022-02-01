import Link from "next/link"
import { useRouter } from "next/router"

export default function index(){
    const router = useRouter()

    function navegacaoSimples(url){
        router.push(url)
    }

    function navegacaoParams(){
        router.push({
            pathname:"/rotas/params",
            query: {
                id: 1,
                nome: 'Yuri'
            }
        })
    }



    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Yuri" passHref>
                    <li>Parms</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/daniel" passHref>
                    <li>Dinamico</li>
                </Link>
            </ul>

            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={navegacaoParams}>Params</button>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/123/daniel")}>Daniel</button>
            </div>
        </div>
    )
}