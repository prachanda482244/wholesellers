import React from 'react'
import { useSelector } from 'react-redux'

const SearchResults = () => {
    const searchValue = useSelector(state => state.search.searchValue)
    const searchArr = useSelector(state => state.search.searchArr)
    const condition = searchValue === '' ? 'Search Field Cannot be empty' : `Search Results for ${searchValue}`
    return (
        <div className='text-center text-3xl'>
            {condition}
            <p className='border-2 border-purple-900 p-4'>
                {searchValue !== '' && searchArr.map((elem) => (
                    <div>{elem}</div>
                ))}
            </p>
        </div>
    )
}

export default SearchResults
