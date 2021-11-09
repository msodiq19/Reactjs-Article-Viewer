import './App.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Headlines from './components/Headlines'

function App() {
    const dispatch = useDispatch()
      
    useEffect(()=>{
      const API_KEY = "35adee9bbba445e9ae88d44db947edff";
      const url= `https://newsapi.org/v2/top-headlines?country=ng&pageSize=50&apiKey=${API_KEY}&category=general`

      fetch(url)
        .then(res=>res.json())
        .then(data=>dispatch({type:"read", payload: data}))
        .catch(err=>console.log(`ErrorMsg: ${err}`))

    },[dispatch])

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}><Home /></Route>
        <Route path="/headlines"><Headlines /></Route>
      </Switch>
    </div>
  );
}

export default App;
