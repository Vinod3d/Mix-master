import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {About, HomeLayout, Landing, Error, Newsletter, Cocktail} from './pages/Index'

const router = createBrowserRouter([
  {
    path : '/',
    element: <HomeLayout/>,
    children: [
      {
        path : 'about',
        element: <About/>,
        children: [
          {
            // path: 'company',
            index: true,
            element: <h2>our company</h2>,
          },
          {
            path: 'person',
            element: <h2>john doe</h2>,
          },
        ]
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        // path: 'landing',
        index:true,
        element: <Landing/>
      },
      {
        path: 'newsletter',
        element: <Newsletter/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
