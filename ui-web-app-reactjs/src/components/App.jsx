import React, {useState} from 'react'

const App = () => {

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [displayData, setDisplayData] = useState({url:''})

  const handleApiCall = async (e) => {
    const url = 'http://54.242.100.85:9999/'+e.target.name;
    displayData.url=url
    let options = {}
      try {
          setLoading(true)
          const res = await fetch(url, options)
          const json = await res.json()
          setResponse(json)
          setError(null)
      } catch (err) {
          setLoading(false)
          setError(err)
          setResponse(null)
      }
      finally {
          setLoading(false)
      }
  }



  return (
    <>
      <header className="pv5 bg-gold black-80">
        <h1 className="mt0 mb1 tc">DevOps Sample Micro-service app</h1>
        <div className="tc ttc">Deploying Mircro Services using Docker</div>
        <div className="tc ttc">Sample Microservice calls</div>
      </header>
      <div className="pt4 pb1 tc">
        Go save the world with JavaScript
        <br/> <br/> <br/>
        <button name="products/products" onClick={handleApiCall} style={{margin:'0px 10px'}}>Products</button>
        <button name="offer/offers" onClick={handleApiCall} style={{margin:'0px 10px'}}>Offers</button>
        <button name="cart" onClick={handleApiCall} style={{margin:'0px 10px'}}>Cart</button>
        <button name="wishlist" onClick={handleApiCall} style={{margin:'0px 10px'}}>Wishlist</button>
        <br/> <br/> <br/>
        <div>
          {response&&<>
            <p>API hit through API Gateway to <span style={{color:'blue', fontSize:'18px'}}>{displayData.url}</span></p>
            <br/> <br/>
            <p>--Response--</p>
            <h3>{JSON.stringify(response)}</h3>
          </>}
        </div>
        <br/> <br/> <br/>
        <div>
          {error&&<>
            <p>API hit through API Gateway to  <span style={{color:'blue', fontSize:'18px'}}>{displayData.url}</span></p>
            <br/> <br/>
            <p>--Error--</p>
            {JSON.stringify(error)}
            <p>Probably one of the microservice is down</p>
          </>}
        </div>
      </div>
    </>
  )
}

export default App
