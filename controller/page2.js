
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
        window.location.assign("https://flashsolutions.online/100queda/quiz/view/page3");
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
    if(checkBackground.includes('0px no-repeat') || !checkBackground){
        hairLoss = true
        if (!errorMessage){
            document.querySelector('#hairLossCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 20.1px no-repeat;`
            document.querySelector('#checkboxHairLoss').style = `border: 2px solid`
            document.querySelector('#hairLoss').style = `border: 2px solid`
            document.querySelector('#typeResultHairLoss').style = `font-weight: bold`
        }else{
            errorMessage.remove()
            document.querySelector('#hairLossCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 20.1px no-repeat;`
            document.querySelector('#checkboxHairLoss').style = `border: 2px solid`
            document.querySelector('#hairLoss').style = `border: 2px solid`
            document.querySelector('#typeResultHairLoss').style = `font-weight: bold`
        }
    }else{
        hairLoss = false
        if (!errorMessage){
            document.querySelector('#hairLossCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 0px no-repeat;`
            document.querySelector('#checkboxHairLoss').style = `border: 1px solid`
            document.querySelector('#hairLoss').style = `border: 1px solid`
            document.querySelector('#typeResultHairLoss').style = `font-weight: normal`
        }else{
            errorMessage.remove()
            document.querySelector('#hairLossCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 0px no-repeat;`
            document.querySelector('#checkboxHairLoss').style = `border: 1px solid`
            document.querySelector('#hairLoss').style = `border: 1px solid`
            document.querySelector('#typeResultHairLoss').style = `font-weight: normal`
        }
    }
})
document.querySelector('#regrowHair').addEventListener('click',()=>{
    errorMessage = document.querySelector('#errorMessage')
    checkBackground = document.querySelector('#regrowHairCheck').style.background
    if(checkBackground.includes('0px no-repeat') || !checkBackground){
        regrowHair = true
        if (!errorMessage){
            document.querySelector('#regrowHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 20.1px no-repeat;`
            document.querySelector('#checkboxRegrowHair').style = `border: 2px solid`
            document.querySelector('#regrowHair').style = `border: 2px solid`
            document.querySelector('#typeResultRegrowHair').style = `font-weight: bold`
        }else{
            errorMessage.remove()
            document.querySelector('#regrowHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 20.1px no-repeat;`
            document.querySelector('#checkboxRegrowHair').style = `border: 2px solid`
            document.querySelector('#regrowHair').style = `border: 2px solid`
            document.querySelector('#typeResultRegrowHair').style = `font-weight: bold`
        }
    }else{
        regrowHair = false
        if (!errorMessage){
            document.querySelector('#regrowHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 0px no-repeat;`
            document.querySelector('#checkboxRegrowHair').style = `border: 1px solid`
            document.querySelector('#regrowHair').style = `border: 1px solid`
            document.querySelector('#typeResultRegrowHair').style = `font-weight: normal`
        }else{
            errorMessage.remove()
            document.querySelector('#regrowHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 0px no-repeat;`
            document.querySelector('#checkboxRegrowHair').style = `border: 1px solid`
            document.querySelector('#regrowHair').style = `border: 1px solid`
            document.querySelector('#typeResultRegrowHair').style = `font-weight: normal`
        }
    }
})

document.querySelector('#thickerHair').addEventListener('click',()=>{
    errorMessage = document.querySelector('#errorMessage')
    checkBackground = document.querySelector('#thickerHairCheck').style.background
    console.log(checkBackground)
    if(checkBackground.includes('0px no-repeat') || !checkBackground){
        thickerHair = true
        if (!errorMessage){
            document.querySelector('#thickerHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 20.1px no-repeat`
            document.querySelector('#checkboxThickerHair').style = `border: 2px solid`
            document.querySelector('#thickerHair').style = `border: 2px solid`
            document.querySelector('#typeResultThickerHair').style = `font-weight: bold`
        }else{
            errorMessage.remove()
            document.querySelector('#thickerHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 20.1px no-repeat;`
            document.querySelector('#checkboxThickerHair').style = `border: 2px solid`
            document.querySelector('#thickerHair').style = `border: 2px solid`
            document.querySelector('#typeResultThickerHair').style = `font-weight: bold`
        }
    }else{
        thickerHair = false
        if (!errorMessage){
            document.querySelector('#thickerHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 0px no-repeat;`
            document.querySelector('#checkboxThickerHair').style = `border: 1px solid`
            document.querySelector('#thickerHair').style = `border: 1px solid`
            document.querySelector('#typeResultThickerHair').style = `font-weight: normal`
        }else{
            errorMessage.remove()
            document.querySelector('#thickerHairCheck').style = `background: url(https://www.keeps.com/assets/next/icons/check-black.svg) center center / 0px no-repeat;`
            document.querySelector('#checkboxThickerHair').style = `border: 1px solid`
            document.querySelector('#thickerHair').style = `border: 1px solid`
            document.querySelector('#typeResultThickerHair').style = `font-weight: normal`
        }
    }
})
document.querySelector('#continuarButton').addEventListener('click', handleClick)