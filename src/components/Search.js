import React from 'react'

export default function Search(props) {
  return (
    <div>
      <form className="search-form">
        <p className="text-center text-muted">Search any {props.name}</p>
        <input onChange={props.handleChange} name="country" className="form-control search-place" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  )
}
