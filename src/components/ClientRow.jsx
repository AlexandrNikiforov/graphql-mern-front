import { FaTrash } from 'react-icons/fa';

export default function ClientRow({client}) {
    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <button className='btn btn-sm'>
                <FaTrash/>
            </button>
        </tr>
    )
}