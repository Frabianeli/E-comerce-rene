import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../../store/slices/categories.slice'
import { setSearch } from '../../store/slices/search.slice'
import './style/search.css'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const search = useSelector(state => state.search)

  const submit = data => {
    const value = data.searchText.toLowerCase()
    let filter = []
    for(let i = 0; i < products.length; i++){
      let name = products[i].title.toLowerCase()
      if(name.includes(value)) {
        filter.push(products[i])
      }
    }
      dispatch(setSearch(filter))
      reset({searchText:''})
      selectCategories.selectedIndex = 0
  }

  const prevent = () => {
    dispatch(setSearch(null))
    dispatch(setCategories(null))
    selectCategories.selectedIndex = 0
  }
  

  return (
    <div className='search'>
      {
        search &&
        <button className='prevent-search' onClick={prevent}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
      }
      <form onSubmit={handleSubmit(submit)} className='form-home'>
        <input type="text" {...register('searchText')} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default InputSearch