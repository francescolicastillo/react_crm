import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import NewClient, {action as NewClientAction} from '../pages/NewClient'
import EditClient, {loader as editClientLoader, action as EditClientAction} from '../pages/EditClient'
import {action as ClientAction} from '../components/Client'
import Index, {loader as indexLoader} from '../pages/Index'
import ErrorPage from '../components/ErrorPage'

export function Router() {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
          loader: indexLoader,
          errorElement: <ErrorPage />
        },
        {
          path: '/clients/newclient',
          element: <NewClient />,
          action: NewClientAction,
          errorElement: <ErrorPage />
        },
        {
          path: '/clients/:id/edit',
          element: <EditClient />,
          loader: editClientLoader,
          action: EditClientAction,
          errorElement: <ErrorPage />
        },
        {
          path: '/clients/:id/destroy',
          action: ClientAction,
          
        }
      ]
    } ]
)};

export default Router;