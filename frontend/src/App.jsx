// Dans ce fichier, je définis les routes de l'application et je crée le composant App qui est le composant racine--//

//----importation des composants nécessaires à la configuration des routes de l'application----//
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './components/Error';
import Portfolio from './pages/Portfolio';


//----importation des librairies de React Router pour définir les routes de l'application----//
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//----définition de l'objet router qui contient les routes de l'application----//
const router = createBrowserRouter([
	{
		index : true,
		element: <Home />
	},

  {
    path: "/portfolio",
    element: <Portfolio />
  },

  {
    path: "/blog",
    element: <Blog />
  },

  {
    path: "/contact",
    element: <Contact />
  },

	{
    //la route par défaut qui est affichée lorsque l'URL ne correspond à aucune route définie
    path: "*",
    element: <Error />
    },
]);

//"RouterProvider" est un composant de React Router qui permet de rendre accessibles les routes à tous les composants de l'application
export default function App() {
	return (
		//<>permit d'eviter les div inutiles dans le DOM
		<>
			<RouterProvider router={router}/>
		</>
	);
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
