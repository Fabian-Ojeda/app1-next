import Link from "next/link";
import Layout from "../components/Layout";

export default function about() {
    return(
        <Layout
            title={"About"}
            description={"este es el abaut"}>
            <p>wenas</p>
            <Link href="/blog/viajes">
                <a>Ir al blog</a>
            </Link>
        </Layout>)
}