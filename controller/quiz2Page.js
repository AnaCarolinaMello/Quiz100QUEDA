
hairLoss = false
regrowHair = false
thickerHair = false

function checkDefault(){
    if (!hairLoss && !regrowHair && !thickerHair){
        return false
    }else{
        return true
    }
}

function handleClick(){
    if (checkDefault()){
        window.location.assign("/Users/Carol/OneDrive/Área%20de%20Trabalho/Ana%20Carolina/DevFrame/Nova%20pasta/view/quiz3Page.html");
    }else{
        errorMessage = document.querySelector('#errorMessage')
        if(!errorMessage){
            document.querySelector('#divText').innerHTML += `<label id='errorMessage'>Marque uma das opções para contiunar</label>`
        }
    }
}

document.querySelector('#hairLoss').addEventListener('click', ()=>{
    errorMessage = document.querySelector('#errorMessage')
    checkBackground = document.querySelector('#hairLossCheck').style.background
    if(checkBackground == 'transparent' || !checkBackground){
        hairLoss = true
        if (!errorMessage){
            document.querySelector('#hairLossCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg);`
        }else{
            errorMessage.remove()
            document.querySelector('#hairLossCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg);`
        }
    }else{
        hairLoss = false
        if (!errorMessage){
            document.querySelector('#hairLossCheck').style = `background: transparent;`
        }else{
            errorMessage.remove()
            document.querySelector('#hairLossCheck').style = `background: transparent;`
        }
    }
})
document.querySelector('#regrowHair').addEventListener('click',()=>{
    errorMessage = document.querySelector('#errorMessage')
    checkBackground = document.querySelector('#regrowHairCheck').style.background
    if(checkBackground == 'transparent' || !checkBackground){
        regrowHair = true
        if (!errorMessage){
            document.querySelector('#regrowHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg);`
        }else{
            errorMessage.remove()
            document.querySelector('#regrowHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg);`
        }
    }else{
        regrowHair = false
        if (!errorMessage){
            document.querySelector('#regrowHairCheck').style = `background: transparent;`
        }else{
            errorMessage.remove()
            document.querySelector('#regrowHairCheck').style = `background: transparent;`
        }
    }
})

document.querySelector('#thickerHair').addEventListener('click',()=>{
    errorMessage = document.querySelector('#errorMessage')
    checkBackground = document.querySelector('#thickerHairCheck').style.background
    if(checkBackground == 'transparent' || !checkBackground){
        thickerHair = true
        if (!errorMessage){
            document.querySelector('#thickerHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg);`
        }else{
            errorMessage.remove()
            document.querySelector('#thickerHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg);`
        }
    }else{
        thickerHair = false
        if (!errorMessage){
            document.querySelector('#thickerHairCheck').style = `background: transparent;`
        }else{
            errorMessage.remove()
            document.querySelector('#thickerHairCheck').style = `background: transparent;`
        }
    }
})
document.querySelector('#continuarButton').addEventListener('click', handleClick)