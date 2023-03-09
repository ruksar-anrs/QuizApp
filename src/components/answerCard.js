import React from 'react'

const AnswerCard = ({serialNum, optionName}) => {
    return (
        <div>
            {serialNum}.
            <span>{optionName}</span>
        </div>
    )
}

export default AnswerCard
