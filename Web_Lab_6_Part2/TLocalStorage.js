class TLocalStorage {
    Reset() {
        localStorage.clear()
    }

    AddValue(key, value) {
        localStorage.setItem(key, value)
    }

    GetValue(key) {
        return localStorage.getItem(key)
    }

    DeleteValue(key) {
        if(localStorage.getItem(key) !== null) {
            localStorage.removeItem(key)
        }
    }

    GetKeys() {
        let answer = []
        for(let i= 0; i < localStorage.length; i++) {
            answer.push(localStorage.key(i))
        }
        return answer.sort()
    }
}

let storage= new TLocalStorage()

function AddInfo() {
    let key = prompt("Введите название лекарства:")
    if (key === null) {
        return
    }
    let value = prompt("Введите описание лекарства:")
    if(value === null) {
        return
    }
    storage.AddValue(key, value)
}

function DeleteInfo() {
    let key = prompt("Введите название лекарства:")
    if (key === null) {
        return
    }
    storage.DeleteValue(key)
}

function GetInfo()
{
    let key = prompt("Введите название лекарства:")
    if (key === null) {
        return
    }
    console.log(storage.GetValue(key))
}

function ListAll() {
    const keys = storage.GetKeys()
    for (const key of keys) {
        console.log(key)
    }
}