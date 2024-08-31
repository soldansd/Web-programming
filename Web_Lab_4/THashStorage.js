class THashStorage {
     #hash = {}

     constructor() {
          this.#hash = {}
     }

     Reset() {
          this.#hash = {}
     }

     AddValue(key, value) {
          this.#hash[key] = value
     }

     GetValue(key) {
          return this.#hash[key]
     }

     DeleteValue(key) {
          if(this.#hash.hasOwnProperty(key)) {
               delete this.#hash[key]
          }
     }

     GetKeys() {
          return Object.keys(this.#hash)
     }
}


let storage= new THashStorage()

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

function GetInfo() {
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