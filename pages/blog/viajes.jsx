import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function viajes() {
    return(
        <Layout
            title={"Viajes"}
            description={"Aqui van los viajes"}>
            <p>viajar es chimba</p>
            <Link href="/about">
                <a>Volver al abaut</a>
            </Link>
            

        </Layout>)
}