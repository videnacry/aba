import {useParams} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import dataPage from '../../components/Nav-x/dataPage'
import parseContent from './parseContent'
const Content = () => {
    const {topicId} = useParams()
    const [page, setPage] = useState(null)
    const mainElmt = useRef(null)
    useEffect(() => {
        dataPage.forEach(data => {
            if (data.topic_id == topicId) setPage(() => data)
        })
    }, [topicId])
    
    useEffect(() => {
        mainElmt.current.innerHTML = page ? page.elements.map(element => parseContent(element)).join('') : 'no content'
    }, [page])
    return(
        <div className="p-md-5 bg-light">
            <main ref={ref => mainElmt.current = ref} className="mw-900-px m-lg-5 mx-xl-auto p-md-5 shadow shadow-sm-remove" style={{backgroundColor: 'white'}} />
        </div>
    )
}
export default Content