import {useState,useEffect} from 'react'
import Countries from './Countries'
import Search from './Search'

const Home = () => {
  
  const [countries,setCountries] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [filteredCountries,setFilteredCountries] = useState(countries);
  
  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    setIsLoading(false)
    setCountries(data)
    setFilteredCountries(data);
  }
  
  useEffect(()=>{
    getData('https://restcountries.com/v3.1/all')
  },[]);
  
  const handleRemove = (name)=>{
    const newData = filteredCountries.filter(obj=>{
      return obj.name.common !== name;
    })
    // setCountries(newData)
    setFilteredCountries(newData)
    let a = countries.filter(c=>{
      return c.name.common !== name;
    })
    setCountries(a)
  }
  
  const handleSeacrh = (value)=>{
    value = value.toLowerCase();
    const searchedData = countries.filter(obj=>{
      return obj.name.common.toLowerCase().startsWith(value);
    });
    setFilteredCountries(searchedData)
  }
  
  return(
    <>
     <h1 class="text-danger text-center my-3">Country App</h1>
     <hr class="text-warning"/>
     <Search handleSeacrh={handleSeacrh}/>
     {isLoading?<h2 class="text-center">Loading...</h2>:<Countries countries={filteredCountries} handleRemove={handleRemove}/>}
    </>
    )
}

export default Home;