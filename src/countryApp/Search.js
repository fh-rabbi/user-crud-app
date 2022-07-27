import {useState,useEffect} from 'react'

const Search = (props)=>{
  
  const [searchText,setSearchText] = useState('');
  
  const handleChange = (e)=>{
    setSearchText(e.target.value)
  }
  
  useEffect(()=>{
    props.handleSeacrh(searchText)
  },[searchText])
  
  return(
    <>
      <form class="container my-3">
        <input onChange={handleChange} class="form-control" type="rext" placeholder="Search a country..." name="" id="" value={searchText}/>
      </form>
    </>
    )
}
export default Search;