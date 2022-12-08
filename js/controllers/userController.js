'use strict'


function showAge(newVal) {

    document.getElementById('zoom').innerHTML = newVal
}


function onSubmitUserPref(ev) {
    ev.preventDefault()
    const elForm = ev.target
    let allInputsValue = Array.from(elForm.querySelectorAll('input'))
    const formValues = {}
    allInputsValue.forEach(({name,value})=> {
        // console.log('input:', input.value)
        formValues[name] = value
    
    })


    setUserPref(formValues)
    showUserPref()
    window.location.href = "map.html";

}

function showUserPref(){
    const userPref = getUserPref()
    document.body.style.backgroundColor = userPref.bgColor
    document.body.style.color = userPref.textColor
    // console.log('elBody:',elBody )
}
