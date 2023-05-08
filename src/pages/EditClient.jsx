import React from 'react'
import { getClientById, updateClient } from '../data/Services';
import EditContactForm from '../components/Form';
import {Form, useNavigate, useLoaderData, useActionData, redirect} from 'react-router-dom'; 
import Error from '../components/Error';

export async function loader({params}) {
  const client = await getClientById(params.id);
  if(Object.values(client).length === 0) {
    throw new Response('', {
      status: 404
    })
  }

  return client;
}

export async function action({request, params}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = [];
  if(Object.values(data).includes('')){
    errors.push("All fields are needed")
  }

  if(errors.length) {
    return errors;
  }
  await updateClient(data, params.id);

  return redirect("/");
}

function EditClient () {

  const errors = useActionData();
  const navigate = useNavigate();
  const client = useLoaderData();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Edit Client</h1>
      <div className='flex justify-end'>
          <button
            type='button'
            className='bg-blue-300 hover:bg-blue-400 rounded-md px-3 py-1 font-bold uppercase'
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>      

        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>
          
        {errors?.length && errors.map((error, i) => (
          <Error
            key={i}
          >
            {error}
        </Error>))}
          
          <Form
            method='PUT'
          >
            <EditContactForm 
              client={client}
            />
            <input
              type='submit'
              className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer'
              value="Save" 
            />
          </Form>
        </div>
    </>
  )
}

export default EditClient