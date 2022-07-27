import Head from "next/head"

function about() {
    return (
        <>
            <Head>
                <title>About | Ninja</title>
                <meta name='keywords' content='ninjas'/>
            </Head>
            <div>
                <h1>About</h1>
                <p>Mock NextJS application that shows how the framework simplifies React and offers great speed with Server Side Rendering (SSR)</p>
            </div>
        </>
    )
}

export default about
