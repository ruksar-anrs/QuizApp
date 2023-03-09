import axios from 'axios'
import React ,{useState, useEffect} from 'react'
import QuestionsCard from '../components/questionsCard'

const LandingPage = () => {
    const [data, setData] = useState([])

     useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const url ="https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
        const res = await axios.get(url)
        setData(res.data?.results)
    }
    return (
        <div>
      <QuestionsCard data={data}/>
        </div>
    )
}

export default LandingPage
