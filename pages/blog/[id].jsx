import Layout from "../../components/Layout";
import Link from "next/link";

export default function post({data}) {
    return(
        <Layout
            title={"Post"}
            description={"Este es un post"}>
            <p>viajar es chimba</p>
            <h1>{data.id}. {data.title}</h1>
            <p>{data.body}</p>
        </Layout>)
}

export async function getStaticPaths(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({id}) => ({params:{id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (error){
        console.log(error)
    }
}


export async function getStaticProps ({params}) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
        const data = await res.json()
        return {
            props:{
                data
            }
        }
    } catch (error) {
        console.log("Ay dios mio, mire: "+error)
    }
}