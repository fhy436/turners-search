import React from 'react'
import {useState} from 'react';
import SearchResults from './searchresults.js';
const Searchbar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState("");
    
    
    const handleChange = (e) => {
        // remove punctuation
        let input = e.target.value;
        setSearchInput(input);

    }

    const filterPunctuation = (searchInput) => {

        let p = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        
        let chars = searchInput.split('');

        for (let i = 0; i < chars.length; i++) {
            if (p.includes(chars[i])) {
                chars[i] = " ";
            }
        }

        const filtered = chars.join('');
        return filtered;
    }

    const showResults = (e) => {
        
        e.preventDefault();

        const filteredInput = filterPunctuation(searchInput);
        console.log(filteredInput);
        let url = `https://api.bing.microsoft.com/v7.0/custom/search?q=insurance&customconfig=6112451c-4091-4745-a739-f2538d4ec026&mkt=en-US`;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "17d94235cd25483e845ef1a569425c76");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                //console.log(xhr.responseText);
                const res = JSON.parse(xhr.responseText);
                console.log(res);
                //console.log(res.webPages.value[0].url)
                setResults(res);
            }
        };

        xhr.send();
    }

    return (
        <div>
            <div className="break"></div>
            <SearchResults results={results} />
        </div>
    )
}

export default Searchbar