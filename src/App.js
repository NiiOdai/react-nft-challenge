import './App.css';
import Header from './component/Header';
import {useState, useEffect} from 'react';
import axios from 'axios'
import Punklist from './component/Punklist';
import Main from './component/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const[selectedPunk, setSelectedPunk] = useState(0)
  
  useEffect(()=>{
    const getMyNfts = async ()=>{
      const openseaData = 
        await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x52670FC0E8C445730470BD5bE53e4B38e3F2FCF7&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])
  return (
     <div className='app'>
          <Header/>     
        {
          punkListData.length > 0 &&(           
         <>
          <Main punkListData = {punkListData} selectedPunk = {selectedPunk} />
          <Punklist punkListData = {punkListData} 
                    setSelectedPunk = {setSelectedPunk}
        />
       </>
         )
        }
    </div> 
  )
}
export default App;
