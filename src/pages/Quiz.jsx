import React, { useState } from 'react'
import Choice from '../components/Choice'
import Button from '../components/Button'
import { PiTimerDuotone } from 'react-icons/pi'
import { resultInitState } from '../constants'

const Quiz = ({ questions, }) => {

    const [currQues, setCurrQues] = useState(1);
    const [ansIdx, setAnsIdx] = useState(null);
    const [ans, setAns] = useState(null);
    const [result, setResult] = useState(resultInitState);
    const [showResult, setShowResult] = useState(false)

    const { question, choices, correctAnswer } = questions[currQues];

    const onAnswerClick = (answer, idx) => {
        setAnsIdx(idx);
        if (answer === correctAnswer) {
            setAns(true)
        } else {
            setAns(false)
        }
    }

    const onClickNext = () => {
        setAnsIdx(null);
        setResult((prev) => ({
            ...prev,
            score: ans ? prev.score + 1 : prev.score,
            correctAnswer: ans ? prev.correctAnswer + 1 : prev.correctAnswer,
            wrongAnswer: ans ? prev.wrongAnswer : prev.wrongAnswer + 1,
        }));

        if (currQues !== questions.length - 1) {
            setCurrQues((prev) => prev + 1)
        } else {
            setCurrQues(0);
            setShowResult(true);
        }
    }

    return (
        <>
            {!showResult ? (
                <div className="flex gap-8">
                    <div className="max-w-xl mx-auto w-full py-6 px-6 border border-gray-200 rounded-2xl flex-shrink-0">
                        {/* <div className="ques_blk rounded-xl min-h-52 flex flex-col items-center justify-center bg-purple-400 p-4 text-xl text-white text-center overflow-hidden relative after:w-full after:h-1/2 after:rounded-[100%] after:bg-purple-800 after:absolute after:blur-3xl after:-z-2 z-2 after:-bottom-5 mb-7">
                        <p className="relative z-10 font-bold text-sm mb-3 text-white">Question {currQues + 1} <span className='text-white'>/ {questions.length}:</span></p>
                        <h5 className='relative z-10'>{question}</h5>
                    </div> */}
                        <p className="font-bold text-sm mb-2 text-gray-600">Question {currQues + 1} <span className='text-gray-400'>/ {questions.length}:</span></p>
                        <h5 className='text-lg mb-7'>{question}</h5>
                        <ul className='choices mb-7'>
                            {
                                choices.map((el, idx) => {
                                    return (
                                        <li className='mb-3 last:mb-0' key={idx} onClick={() => onAnswerClick(el, idx)}>
                                            <Choice option={el} checked={ansIdx === idx} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="flex items-center justify-between">
                            <span className='timer font-medium flex items-center gap-2 leading-none'><PiTimerDuotone size={24} />00:30</span>
                            <Button onClick={onClickNext}>{currQues.length === questions.length - 1 ? 'Submit' : 'Next'}</Button>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-3">
                            {questions.map((el, idx) => {
                                return (
                                    <div className='w-10 h-10 border border-slate-400 text-slate-400 rounded-full flex justify-center items-center leading-none' key={idx}>{idx + 1}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            ) :
                <div className='result flex-shrink-0'>
                    <h2>Result</h2>
                    <p>Total Question: <span>{questions.length}</span></p>
                    <p>Total Score: <span>{result.score}</span></p>
                    <p>Correct Answers: <span>{result.correctAnswer}</span></p>
                    <p>Wrong Answers: <span>{result.wrongAnswer}</span></p>
                </div>
            }
        </>
    )
}

export default Quiz
