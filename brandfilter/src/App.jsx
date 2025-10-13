import React from 'react'
import {useState} from 'react'


const App = () => {
  const allBrands =[
    {id: "1", brandName: "puma"},
    {id: "2", brandName: "nike"},
    {id: "3", brandName: "adidas"},
    {id: "4", brandName: "reebok"},
    {id: "5", brandName: "converse"}
  ];
  return (
    <>
      <input type="text" placeholder="search a brand" />
      <ul>
      {
        allBrands.map(brand => <li>{brand.brandName}</li>)
      }
      </ul>
    </>
  )
}


export default App
