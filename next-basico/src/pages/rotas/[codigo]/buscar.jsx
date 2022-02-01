import { useRouter } from "next/router"
import Link from "next/link"

export default function buscar(){
    const router = useRouter()
    const codigo = router.query.codigo

    console.log(codigo)

    return (
        <div>
            <h1>Rotas / {codigo} / Buscar</h1>
            <Link href="/rotas" passHref>
                <a>
                    <button>Voltar</button>
                </a>
            </Link>
        </div>
    )
}