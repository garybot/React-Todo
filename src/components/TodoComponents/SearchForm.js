import React from 'react';

const SearchForm = (props) => {
  return (
    <form>
      <input type="text" placeholder="Search" onChange={props.handleChange}/>
    </form>
  )
}

export default SearchForm;