import Layout from "../components/Layout";
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";

export default function Home({data}) {
  return (
      <Layout
        title={"home"}
        description={"descripcion del home"}
        nameIn={"Lord Fabi"}
        home>

        <section className={utilStyles.headingMd}>
            <h1>Viajes</h1>
            {
                data.map((post) => (
                    <div key={post.id}>
                        <Link href={`/blog/${post.id}`}><a>{post.id}. {post.title}</a></Link>
                    </div>
                ))
            }
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}

export async function getStaticProps () {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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