
import _ from 'lodash';
export function getLetterMatchCount(guessedWord, secretWord){
    const secretLetterSet = new Set (secretWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))

    return [...secretLetterSet].filter(letter=>guessedLetterSet.has(letter)).length
}


export const arrayContainKey=(options, key)=>{
    
    options.filter((option,key)=>{
            
    })
}