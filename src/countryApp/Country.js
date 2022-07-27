
const Country = (props) => {
  const {name,flags,capital,region} = props;
  
  return(
    <>
      <h2 class="card-title text-center">
        {name.common}
      </h2>
      <img class="" src={flags.svg} alt="flag" />
      <div class="mt-2">
        <h2 class="text-center text-warning">About</h2>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>{}</p>
      </div>
    </>
    )
}
export default Country;