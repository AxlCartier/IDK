import APIFetcher from "./components/APIFetcher.jsx"
import './App.css'

function App() {
  
  const url = 'https://pokeapi.co/api/v2/pokemon/mewtwo'
  const { data, loading, error } = APIFetcher(url)

  if (loading) {
    return (<h2>Loading content...</h2>)
  }

  if (error) {
    return (<h3>Oops... {error}</h3>)
  }

  return (
    <>   

      <div className="one">
          <img src={data && data.sprites.front_default} alt="Pokemon Picture" width="200"id="PKP" />
          <img src={data && data.sprites.back_shiny} width="200" alt="Pokemon Picture" />
      </div>
                
       <div className="two">
          <h2>Name: {data && data.name}</h2>
          <h2>Height: {data && data.height}</h2>
          <h2>Weight: {data && data.weight}</h2>
       </div>
    
  
    </>
  )
}


export default App
