import Link from 'next/link'
import { gql } from '@apollo/client'
import Name from '../components/Name'
import Head from 'next/head'
import Layout from '../components/Layout'
import client from "../lib/with-apollo";

export default function Home({ name }: { name: string }) {
  return (
    <>
      <Head>
        <title>Demo Home</title>
      </Head>
      <Layout>
        <h1 data-testid="welcome-text" className="mb-3">
          Welcome, <Name name={name} />
        </h1>
        <nav className="nav">
          <Link className="nav-link" href="/about">
            About
          </Link>
          <Link className="nav-link" href="/users">
            Users
          </Link>
        </nav>
      </Layout>
    </>
  )
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: getNameQuery,
  })

  return {
    props: {
      name: data.name,
    },
  }
}

export const getNameQuery = gql`
  query name {
    name
  }
`