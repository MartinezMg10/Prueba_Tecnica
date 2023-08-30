import {BrowserRouter ,Routes ,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/Homepage"
import  PokemonPage from "./pages/pokemonPage"
import { SearchPage } from "./pages/SearchPage"
import { PokemonProvider } from "./context/PokemonProvider"

function App() {

  return (
    <>
    <PokemonProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
          <Route index element={<HomePage/>}/>
          <Route path="pokemon/:id" element={<PokemonPage/>}/>
				<Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='*' element={<NavBar to='/' />} />

    </Routes>
    </BrowserRouter>
    </PokemonProvider>
    </>
  )
}

export default App

