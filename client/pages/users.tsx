import Link from 'next/link'
import client from '../lib/with-apollo'
import { ApolloProvider } from '@apollo/client'
import { User } from "../types/auto-generated"
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import LoadMoreUsers from '../components/LoadMoreUsers'
import { getUsersQuery } from '../queries/user.query'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Users({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Layout>
        <ApolloProvider client={client}>
          <div>
            <h1 className="mb-3">Users Page</h1>
            <Link href="/">Go Back</Link>
            <LoadMoreUsers users={users} />
          </div>
        </ApolloProvider>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  users: User[]
}> = async () => {
  const { data } = await client.query({
    query: getUsersQuery,
    variables: {
      limit: 10,
      offset: 0,
    },
  })

  return {
    props: {
      users: data.users,
    },
  }
}