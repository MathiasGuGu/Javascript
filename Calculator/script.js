
let buttons = document.querySelectorAll('.button');
let buttonsArray = Array.from(buttons);

let nums = [];
let methods = [];


let isNumber = true;

const currentMethod = {
    num1: null,
    num2: null,
    method: null,
};




buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {


        if (button.hasAttribute("num")){
            isNumber = true;
            if (isNumber && (currentMethod.num1 === null)) { currentMethod.num1 = parseInt(button.textContent)}
            else if (isNumber && (currentMethod.method === null)) { currentMethod.num1 = currentMethod.num1 + button.textContent}

            else if (isNumber && (currentMethod.num2 === null)) { currentMethod.num2 = parseInt(button.textContent)}
            else if (isNumber && (currentMethod.num1 !== null)) { currentMethod.num2 = currentMethod.num2 + (button.textContent)}

        } else{
            isNumber = false;

            if (currentMethod.method !== null && !button.hasAttribute("equals")) { throw new Error("Method already specified"); }
            !button.hasAttribute("equals") && (currentMethod.method = (button.attributes[1]))

        }


        if (button.hasAttribute("equals")) {
            let calculation = String(currentMethod.num1) + "" + String(currentMethod.method) + "" + String(currentMethod.num2)
            console.log(calculation)
        }

    })
    button.hasAttribute("num") ? nums.push(button) : methods.push(button);
})

