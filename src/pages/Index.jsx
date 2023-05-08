import {useLoaderData} from "react-router-dom";
import Client from "../components/Client";
import {getAllContacts} from "../data/Services";

export function loader() {
  const contacts = getAllContacts();
  return contacts;
}

function Start() {

  const clients = useLoaderData();

  return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
        <p className='mt-3'>Manage your clients</p>

        {clients.length > 0 ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Clients</th>
                <th className="p-2">Contacts</th>
                <th className="p-2">Accions</th>
              </tr>
            </thead>

            <tbody>
              {clients.map(client => (
                <Client 
                  key={client.id}
                  client={client}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No data available</p>
        )}

      </>
    )
}

export default Start