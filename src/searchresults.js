import React from 'react'

const SearchResults = ({ results }) => {
    
    

    if (results && results.webPages) {
        return (
            <div className='results-container'>
                {results.webPages.value.map(result => (
                    <div className='results-card'>
                        <a href={result.url} className='results-card-link'>
                            <h3 className='result-title'>{result.name}</h3>
                            <h5 className='result-url'>{result.url}</h5>
                            <p className='result-snippet'>{result.snippet}</p>
                        </a>
                    </div>
                    
                ))}
            </div>
        )
    }
    return <div></div>

}


/* <div>
            {results.map(result => (
                <div>{result.name}</div>
            ))}

        </div> */
export default SearchResults