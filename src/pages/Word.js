import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_WORD } from '../utils/queries';
import { QUERY_WORDS } from '../utils/queries';
import { ADD_WORD } from '../utils/mutations';

const Word = () => {
    const wordToGuess = useQuery(QUERY_WORD);

    const wordList = useQuery(QUERY_WORDS);

    const [addWord, { error }] = useMutation(ADD_WORD);

    const addNewWord = async (newWord) => {
        try{
            await addWord({
                variables: {content: newWord},
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (wordToGuess, wordList, addNewWord);
};

export default Word;