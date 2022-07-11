import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../store/slices/categories.slice'
import { setProductsGlobal } from '../../store/slices/products.slice'
import { setSearch } from '../../store/slices/search.slice'
import './style/categories.css'

const Categories = () => {

    const [categorie, setCategorie] = useState()

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    console.log(products)

    useEffect(() => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
        .then(res => setCategorie(res.data.data.categories))
        .catch(err => console.log(err))
      },[])

    const select = () => {
        dispatch(setSearch(null))
        const name = selectCategories.options[selectCategories.selectedIndex].value
        if(name.length > 1){
            const filter = products.filter(e => e.category.name === name)
            dispatch(setCategories(filter))
        } else{
            dispatch(setCategories(null))  
        }
    }

  return (
    <div className='container-select'>
        <select onChange={select} id='selectCategories' >
            <option value='' >All products</option>
            {
                categorie?.map(categori => <option key={categori.id} value={categori.name}>{categori.name}</option>)
            }
        </select>
    </div>
  )
}

export default Categories