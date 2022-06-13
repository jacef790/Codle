import React, { useState, useEffect, useRef } from "react";
import { useLazyQuery } from '@apollo/client';

import Keyboard from '../components/Keyboard'
import Highscore from '../components/Highscore'
import Comments from '../components/Comments'
import AddComment from '../components/AddComment'
import RowForGuessing from '../components/RowForGuessing'
import Nav from '../components/Nav';
import { useNavigate, Link } from "react-router-dom";
import { QUERY_WORD } from "../utils/queries";


export function RunGame(props) {

    // const [queryWord, { data }] = useLazyQuery(QUERY_WORD);

    // useEffect(() => {
    //     queryWord({
    //         fetchPolicy: "no-cache"
    //     })
    // }, [])

    const commentsRef = useRef()

    function handleAddComment() {
        commentsRef.current.refetch()
    }

    const data = {
        word: {
            "_id": "62a57c03e9b18397024cf881",
            "characters": "api",
            "comments": [],
            "highScore": null,
            "highScoreName": null,
            "__typename": "Word"
        }
    }

    console.log(data);

    const word = data?.word;

    const [gameWin, setGameWin] = useState(false);

    const [typedLetterArray, setTypedLetterArray] = useState([]);

    const [submittedRowArray, setSubmittedRowArray] = useState([]);

    const keyboardButtonPressed = (buttonValue) => {

        console.log(buttonValue);

        if (buttonValue === 'Delete') {

            setTypedLetterArray(typedLetterArray.slice(0, -1));

        } else if (buttonValue === 'Enter' && typedLetterArray.length === word.characters.length) {
            console.log(typedLetterArray.join(''));
            if (typedLetterArray.join('') === word.characters.toUpperCase()) {
                setGameWin(true);
                //TODO: update highscore and highscore name for the word
                setSubmittedRowArray(submittedRowArray.concat(typedLetterArray.join('')));
                return;
            }
            setSubmittedRowArray(submittedRowArray.concat(typedLetterArray.join('')));
            setTypedLetterArray([]);

        } else if (buttonValue === 'Enter') {
            return;
        } else if (typedLetterArray.length === word.characters.length) {
            return;
        } else {
            setTypedLetterArray(typedLetterArray.concat(buttonValue.toUpperCase()))
        }

        console.log(typedLetterArray);
    }


    if (!word) {
        return null;
    }

    return (
        <div className='text-white bg-gradient-to-tl from-black to-gray-500 h-[100%] w-screen min-h-screen'>
            <Nav />

            {/* <Link to="/comments">View Your Comments</Link> */}
            <button onClick={() => { window.location.reload(false) }}>New Game</button>

            {submittedRowArray.length > 0 ? (
                submittedRowArray.map(
                    function (string, i) {
                        return <RowForGuessing word={word.characters} typedLetters={string.split('')} isSubmitted={true} />
                    }
                )
            ) :
                (
                    <div></div>
                )}



            {!gameWin ? (
                <div>
                    <RowForGuessing word={word.characters} typedLetters={typedLetterArray} isSubmitted={false} />

                    <Keyboard buttonCallback={keyboardButtonPressed} />
                </div>
            ) : (
                <div>

                    {/* <Highscore word={word} /> */}

                    <Comments word={word} ref={commentsRef} />

                    <AddComment word={word} onAddComment={handleAddComment} />
                </div>
            )
            }
        </div >
    );
}

