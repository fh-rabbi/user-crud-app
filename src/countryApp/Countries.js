import Country from './Country'

const Countries = (props) => {
  const {countries} = props;
  const handleClick = (country)=>{
    props.handleRemove(country)
  }
  return(
    <>
      {countries.map(country => {
        return <div class="m-3 card bg-dark p-5 text-light">
          <Country {...country} key={country.name.common}/>
          <button onClick={()=> handleClick(country.name.common)} class="my-3 d-block mx-auto w-100 btn btn-outline-light text-uppercase fw-bold text-center">Remove</button>
        </div>
      })}
   </>
    )
}
export default Countries;