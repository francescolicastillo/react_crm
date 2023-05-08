import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return(
        <div>
            <h1 className='text-center text-6xl uppercase font-bold pb-10'>
                Error!
            </h1>
            <h3 className='text-center text-xl'>{ error.message }</h3>
        </div>
    )
}