import React from 'react';
import {Form, useNavigate, redirect} from 'react-router-dom';
import {deleteClinet} from '../data/Services'


export async function action({params}) {

    await deleteClinet(params.id);

    return redirect('/');
}


function Client({client}) {

    const navigate = useNavigate();

    const {id, name, phone, email, company} = client

    return (
        <tr className='border-b'>
            <td className="p-6 w-1/3">
                <p className='text-2xl text-gray-800'>
                    {name}
                </p> 
                <p >
                    {company}
                </p>
            </td>
            <td className="p-6 w-1/3">
                <p className='text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Email: </span>{email}
                </p>
                <p className='text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Phone: </span>{phone}
                </p>
            </td>
            <td className='p-6 flex gap-3 w-1/3'>
                <button 
                    type='button' 
                    className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >
                    Edit
                </button>

                <Form
                    method='POST'
                    action={`clients/${id}/destroy`}
                    onSubmit={(e) => {
                        if(!confirm("Delete client?")){
                            e.preventDefault()
                        }
                    }}
                >
                    <button 
                        type='submit' 
                        className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
                    >
                        Delete
                    </button>
                </Form>
            </td>
        </tr>
    )
}

export default Client