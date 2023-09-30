import { gql, useQuery } from '@apollo/client';

// const GET_CLIENTS = gql`
const GET_CLIENTS = `
    query getClients {
        clients {
            id, name, email, phone
        }
    }
`

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS)
    return (
        <div>
            <h1>Clients</h1>
        </div>
    )
}