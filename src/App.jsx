import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {About, HomeLayout, Landing, Error, Newsletter, Cocktail, SinglePageError} from './pages/Index'

import {loader as landingLoader} from './pages/Landing'
import {loader as singleCocktailLoader} from './pages/Cocktail'
import {action as newsletterActions} from './pages/Newsletter'

const router = createBrowserRouter([
  {
    path : '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        // path: 'landing',
        index:true,
        element: <Landing/>,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
      },
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
        path: 'cocktail/:id',
        errorElement: <SinglePageError/>,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter/>,
        action: newsletterActions,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
