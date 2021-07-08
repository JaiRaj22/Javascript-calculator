class calculator {
    constructor(previoustext ,currenttext){
        this.previoustext=previoustext
        this.currenttext=currenttext
        this.clear()
    }

    clear() {
        this.current = ''
        this.previous = ''
        this.operation = undefined
    }

    delete() {

    }

    appendnumber(number) {
        this.current=number
    }

    choose_operation(operations) {

    }

    compute() {

    }

    updatedisplay() {
        this.currenttext.innertext=this.current
    }
}

const numberbuttons=document.querySelectorAll('[number]')
const operationbuttons=document.querySelectorAll('[operation]')
const equalsbuttons=document.querySelectorAll('[equals]')
const deletebuttons=document.querySelectorAll('[delete]')
const allclearbuttons=document.querySelectorAll('[all-clear]')
const previoustextbuttons=document.querySelectorAll('[previous_data]')
const currenttextbuttons=document.querySelectorAll('[current_data]')

const calculator=new calculator(prevoiustext, currenttext)

numberbuttons.forEach(button=>{
    button.addEventListener('click', () =>{
        calculator.appendnumber(button.innertext)
        calculator.updatedisplay()
    })
})
