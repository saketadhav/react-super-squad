export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function addCharacterById(id){
    const action = {
        type : ADD_CHARACTER,
        id
    }
    // ES6 syntax for id : id , since property and parameter name are same
    return action;
}

export function removeCharacterById(id){
    const action = {
        type : REMOVE_CHARACTER,
        id
    }
    return action;
}