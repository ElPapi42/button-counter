import Head from 'next/head'

export default function Counter() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button>Click here</button>
        <p>0</p>
      </main>
    </div>
  )
}