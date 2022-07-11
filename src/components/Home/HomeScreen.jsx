import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../../store/slices/products.slice'
import Categories from './Categories'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {


  const products = useSelector(state => state.products)
  
  const categories = useSelector(state => state.categories)
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  useEffect(() =>{
    if(!categories && !search){
      dispatch(getAllproducts())
    }
  }, [categories, search]) 


  console.log(categories)
  console.log(search)


  //conditionCategories
  const  conditionCategories = () =>{
    if(categories.length === 0 ){
       return <ProductCard  
                product={categories}
              />
    } else {
      return categories?.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
        />))
    }
  }  
  //conditionSearch
  const conditionSearch = () => {
    if(search.length === 0){
      return <ProductCard 
                product={search}
              />
    } else{
      return search.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />))
    }
  }

  return (
    <div className='home'>
      <InputSearch />
      <Categories />
      <div className='products-container'>
        {
          search?
            conditionSearch()
            :
             categories ?
              conditionCategories()
              :
              products.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                />
              ))
        }
      </div>
    </div>
  )
}

export default HomeScreen