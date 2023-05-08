import { useNavigate, useActionData, Form, redirect } from 'react-router-dom'
import NewClientForm from '../components/Form';
import Error from '../components/Error';
import { addContact } from '../data/Services';

export async function action({request}) {
  const formData = await (request.formData());
  const data = Object.fromEntries(formData);

  const errors = [];
  if(Object.values(data).includes('')){
    errors.push("All fields are needed")
  }

  if(errors.length) {
    return errors;
  }

  await addContact(data);

  return redirect("/");
}

function NewClient() {

  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New Client</h1>

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
          </Error>
        )) 
        }
        <Form
          method='POST'
        >
          <NewClientForm />
          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer'
            value="Save client"
          />
        </Form>
      </div>

    </>
  )
}

export default NewClient