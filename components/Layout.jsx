import Head from "next/head";
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from "next/image";
import Link from "next/link";

const name = "nameDefault"

export default function Layout({children, title, description, home, nameIn}) {
    return(
        <div className={styles.container}>

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta
                    name={title}
                    content={description}/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/imgs/logo.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={nameIn}
                        />
                        <h1 className={utilStyles.heading2Xl}>{nameIn}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/imgs/logo.png"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={nameIn}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{nameIn}</a>
                            </Link>
                        </h2>
                    </>
                )}

            </header>
            <nav>
                <Link href="/">
                    <a>Inicio | </a>
                </Link>
                <Link href="/about">
                    <a>About | </a>
                </Link>
                <Link href="/blog/viajes">
                    <a>Viajes</a>
                </Link>
            </nav>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>)
}

Layout.defaultProps = {
    title: "Titulo",
    description: "Descripción de la pagina"
}