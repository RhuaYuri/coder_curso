import { useRouter } from "next/router";
import Link from "next/link";

export default function params(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Nome: {nome}</h2>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}