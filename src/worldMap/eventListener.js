 const addGlobalEventClick = (callback) =>{
     document.addEventListener("click", e => {callback(e)})
}
 const addLocalEventClick = (parent, callback) =>{
     parent.addEventListener("click", e => {callback(e)})
}

 const addGlobalEventListener = (type, callback) =>{
     document.addEventListener(type, e => {callback(e)})
}
 const addLocalEventListener = (parent, type, callback) =>{
     parent.addEventListener(type, e => {callback(e)})
}