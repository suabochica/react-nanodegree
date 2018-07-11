import React from 'react'

const Dashboard = ({
    answeredQuestionsId,
    unansweredQuestionsId,
    answeredQuestionsNumber
}) => (
    <div>
        <ul>
            {answeredQuestionsNumber === 0
                ? unansweredQuestionsId.map ((unansweredQuestionId) => (
                    <li
                        key={unansweredQuestionId}
                    >
                        <Poll
                            pollId={unansweredQuestionId}
                            status="UserWillVote"
                        />
                    </li>
                )) :
                    answeredQuestionsId.map((answeredQuestionId) => (
                        <li
                            key={unansweredQuestionId}
                        >
                            <Poll
                                pollId={answeredQuestionId}
                                status="UserDidVote"
                            />
                        </li>
                    ))
            }
        </ul>
    </div>
)

export default Dashboard;