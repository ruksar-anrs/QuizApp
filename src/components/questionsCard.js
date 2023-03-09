import React, { useState } from 'react'
import "./questionCard.css"

const QuestionsCard = ({data}) => {
  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer]= useState(null);
  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(null)
  let multipleAnswers = data[index]?.incorrect_answers.concat(data[index]?.correct_answer)

  const verifyCorrectAnswer =(value)=>{
    setSelectedAnswer(value)
   if(value === data[index]?.correct_answer){
    setCount(count+1)
    setAlert("Your Answer is correct")
   setTimeout(()=>{
    if(selectedAnswer){
        if(index < data?.length){
          setIndex(index+1)
          setAlert(null)
        }   
    }
   },500) 
   }
   else{
    setAlert("Your Answer is wrong");
    setTimeout(()=>{
      if(selectedAnswer){
        if(index < data?.length){
          setIndex(index+1)
          setAlert(null)
        }
      }
     },500) 

   }
  }
  
  const onHandleAnswerClick =()=>{
    setIndex(index+1)
  }

    return (
      <>
        { index !== data.length &&<div className='layout'>
        <div className='main-card'>
          <div
           className='card-list'
          >
            <div >{data[index]?.question}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "flex-start",
              flexFlow: "column",
              padding: "0.5rem",
              margin: "0.5rem"
            }}
          >
            {multipleAnswers?.map((a, index)  =>
            <div key={index} style={{cursor:"pointer"}} onClick={()=>verifyCorrectAnswer(a)} >{a}</div>)}
           
          </div>
         {index <= data?.length -1 && <button style={{width:"10rem"}} onClick={onHandleAnswerClick}>Next</button> } 
        </div>
      
      </div>}  
      {alert && <div style={{display:"flex", justifyContent:"center"}}>{alert}</div>}
       {index !== 0 && index === data.length && <div style={{display:"flex",justifyContent:"center"}}>Total Questions({data?.length})/Correct Answered questions({count})</div>}
    </> 
       )
}

export default QuestionsCard;


//https://docs.google.com/document/d/1cyH47oOYyznNTdPo3UFbtHHHrT89x7GOTIKTQLJh3W0/edit