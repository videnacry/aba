import Fuse from 'fuse.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import list from './dataPage'
import { ReactComponent as SearchIcon } from './search.svg'

const Searcher = () => {
    const [results, setResults] = useState([])
    const searchEvent = (e) => {
        const options = {
            keys: [
                "elements.text"
            ]
        }
        const fuse = new Fuse(list, options)
        const result = fuse.search(e.currentTarget.value)
        console.log(result)
        setResults(() => result)
    }
    const closeSearchEvent = () => {
        setResults(() => [])
    }
    return(
        <div className="form-floating mb-3 col-12 position-relative">
            <input onInput={searchEvent} onClick={searchEvent} className="form-control border-top-0 border-start-0 border-end-0 bg-light" id="floatingInputSearch"/>
            <label htmlFor="floatingInputSearch" className="text-secondary">
                <SearchIcon width="25px" height="25px" fill="gray"/>
                <span className="mx-3">B&uacute;squeda</span>
            </label>
            <div className="list-group w-100 position-absolute top-100 start-0 bg-light" style={{zIndex: 1}}>
                {results.map((result, idx) => (
                    <Link to={`/contents/${result.item.topic_id}`} onClick={closeSearchEvent} key={idx} className="list-group-item list-group-item-action">
                        {result.item.elements[0].text}
                    </Link>)
                )}
            </div>
        </div>
    )
}
export default Searcher