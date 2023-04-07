export const addGlobalEventClick = (callback) =>{
     document.addEventListener("click", e => {callback(e)})
}
export const addLocalEventClick = (parent, callback) =>{
     parent.addEventListener("click", e => {callback(e)})
}

export const addGlobalEventListener = (type, callback) =>{
     document.addEventListener(type, e => {callback(e)})
}
export const addLocalEventListener = (parent, type, callback) =>{
     parent.addEventListener(type, e => {callback(e)})
}