'use strict'
const STORAGE_KEY = 'user-input'


let gUserPref = ''


function setUserPref(formValues){
    saveToStorage(STORAGE_KEY, formValues)
    gUserPref = formValues
}

function getUserPref(){
    if(loadFromStorage(STORAGE_KEY)) gUserPref = loadFromStorage(STORAGE_KEY)
    
    return gUserPref
}