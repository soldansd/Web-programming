const FormItems = [
    { elemtype: 'h3', text: 'Введите данные о лекарстве' },
    { elemtype: 'label', for: 'medicineName', text: 'Название лекарства:', br: 0 },
    { elemtype: 'input', type: 'text', id: 'medicineName', br: 2 },
    { elemtype: 'label', for: 'medicineCost', text: 'Стоимость лекарства:', br: 0 },
    { elemtype: 'input', type: 'number', step: 0.1, id: 'medicineCost', br: 2 },
    { elemtype: 'label', for: 'medicineQuantity', text: 'Количество лекарств:', br: 0 },
    { elemtype: 'input', type: 'number', id: 'medicineQuantity', br: 2 },
    { elemtype: 'label', text: 'Выдается по рецепту:' },
    { elemtype: 'radio', checked: true, for: 'prescription1', name: 'prescription', text: 'Да', br: 0 },
    { elemtype: 'radio', checked: false, for: 'prescription2', name: 'prescription', text: 'Нет', br: 2 },
    { elemtype: 'label', for: 'contraindications', text: 'Противопоказания:', br: 0 },
    { elemtype: 'checkbox', type: 'checkbox', id:'contraindications', br: 2 },
    { elemtype: 'label', for: 'instructions', text: 'Инструкция по применению:', br: 1 },
    { elemtype: 'textarea', id: 'instructions', cols: '35', rows: '7', br: 2 },
    { elemtype: 'submit', id: 'sub' }
]

function CreatePage(FormItems, FormName) {
    let form = document.forms[FormName]

    for (const item of FormItems) {
        let elem

        switch (item.elemtype) {
            case 'h3':
                elem = document.createElement('h3')
                elem.textContent = item.text
                break

            case 'label':
                elem = document.createElement('label')
                elem.textContent = item.text
                if (item.for) {
                    elem.setAttribute('for', item.for)
                }
                break

            case 'input':
                elem = document.createElement('input')
                elem.type = item.type
                elem.id = item.id
                if (item.step) {
                    elem.setAttribute('step', item.step)
                }
                break

            case 'radio':
                elem = document.createElement('label')
                elem.textContent = item.text
                elem.setAttribute('for', item.for)
                let radio = document.createElement('input')
                radio.type = 'radio'
                radio.id = item.for
                radio.checked = item.checked
                radio.name = item.name
                elem.appendChild(radio)
                break

            case 'checkbox':
                elem = document.createElement('input')
                elem.type = 'checkbox'
                elem.id = item.id
                break

            case 'textarea':
                elem = document.createElement('textarea')
                elem.id = item.id
                elem.cols = item.cols
                elem.rows = item.rows
                break

            case 'submit':
                elem = document.createElement('input')
                elem.id = item.id
                elem.type = 'submit'
        }

        form.appendChild(elem)
        if (item.br) {
            for (let i = 0; i < item.br; i++) {
                form.appendChild(document.createElement('br'))
            }
        }
    }

    document.getElementById('medicineName').addEventListener('input', validateMedicineName)
    document.getElementById('medicineCost').addEventListener('input', validateMedicineCost)
    document.getElementById('medicineQuantity').addEventListener('input', validateMedicineQuantity)
    document.getElementById('instructions').addEventListener('input', validateInstructions)
    form.addEventListener('submit', validateForm)
}

function validateMedicineName() {
    const medicineNameInput = document.getElementById('medicineName')
    const name = medicineNameInput.value
    if(!name) {
        showError(medicineNameInput, 'Введите название лекарства')
        return false
    }
    else if(name.length > 100) {
        showError(medicineNameInput, 'Название лекарства не должно быть более 100 символов')
        return false
    } else {
        hideError(medicineNameInput)
        return true
    }
}

function validateMedicineCost() {
    const medicineCostInput = document.getElementById('medicineCost')
    if(!medicineCostInput.value) {
        showError(medicineCostInput, 'Введите стоимость')
        return false
    }
    const cost = parseFloat(medicineCostInput.value)
    if (cost <= 0) {
        showError(medicineCostInput, 'Стоимость должна быть положительной')
        return false
    } else {
        hideError(medicineCostInput)
        return true
    }
}

function validateMedicineQuantity() {
    const medicineQuantityInput = document.getElementById('medicineQuantity')
    if(!medicineQuantityInput.value) {
        showError(medicineQuantityInput, 'Введите количество')
        return false
    }
    const quantity = parseInt(medicineQuantityInput.value)
    if(quantity <= 0) {
        showError(medicineQuantityInput, 'Количество должно быть положительным')
        return false
    } else {
        hideError(medicineQuantityInput)
        return true
    }
}

function validateInstructions() {
    const instructionsInput = document.getElementById('instructions')
    if(!instructionsInput.value) {
        showError(instructionsInput, 'Введите инструкцию')
        return false
    } else {
        hideError(instructionsInput)
        return true
    }
}

function showError(inputElement, errorMessage) {
    const errorElementExists = inputElement.nextElementSibling
    if (errorElementExists && errorElementExists.classList.contains('error-message')) {
        if (errorElementExists.textContent === errorMessage) {
            return
        } else {
            hideError(inputElement)
        }
    }
    let errorElement = document.createElement('label')
    errorElement.className = 'error-message'
    errorElement.style = 'color: red;'
    errorElement.textContent = errorMessage
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling)
}

function hideError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.parentNode.removeChild(errorElement);
    }
}

function validateForm(event) {
    const isMedicineNameValid = validateMedicineName()
    const isMedicineCostValid = validateMedicineCost()
    const isMedicineQuantityValid = validateMedicineQuantity()
    const isInstructionsValid = validateInstructions()

    if (!isMedicineNameValid || !isMedicineCostValid || !isMedicineQuantityValid || !isInstructionsValid) {
        event.preventDefault()
    } else {
        this.submit()
    }
}
