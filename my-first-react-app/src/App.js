import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const[data,setData]=useState(false);
  const showData =()=>{
    if(data){
      setData(false)
    }
    else{
      setData(true)
    }
  }
  let prom=new Promise((resolve,reject)=>{
    if(data){
      resolve(1);
    }
    else{
      reject(0)
    }
  });
  prom.then(data=>{
    console.log(data);
  }).catch(error=>{console.log("error",error)});
  return (
    <div className="App" onClick={showData}>
      <p>click here</p>
      {data && <h1>Hello World</h1>}  
    </div>
  );
}

export default App;
