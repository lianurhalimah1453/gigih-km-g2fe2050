import { useState, createContext, useContext } from 'react'

const SearchContext = createContext({})

export const SearchProvider = ({children}) => {
    const [result,setResult] = useState([])

    return (
        <SearchContext.Provider
            value={{
                result,
                setResult,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchResult = () => {
    const context = useContext(SearchContext)
    return context
} 