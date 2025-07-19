import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import RouteSelect from './RouteSelect'
export default function Sidebar() {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <RouteSelect/>
    </div>
  )
}
