let hash = {}

function AddValue(key, value) {
    hash[key] = value
}

function DeleteValue(key) {
    if(hash[key]) {
        delete hash[key]
    }
}

function GetValueInfo(key) {
    if (!hash[key]) {
        return 'нет информации'
    }
    return key + ': ' + hash[key]
}

function ListValues() {
    let str = ''
    for(let key in hash) {
        str += GetValueInfo(key) + '\n'
    }
    return str
}

function AddInfo() {
    let key = prompt("Введите название лекарства:")
    if (key === null) {
        return
    }
    let value = prompt("Введите описание лекарства:")
    if(value === null) {
        return
    }
    AddValue(key, value)
}

function DeleteInfo() {
    let key = prompt("Введите название лекарства:")
    if (key === null) {
        return
    }
    DeleteValue(key)
}

function GetInfo() {
    let key = prompt("Введите название лекарства:")
    if (key === null) {
        return
    }
    console.log(GetValueInfo(key))
}

function ListAll() {
    console.log(ListValues())
}
