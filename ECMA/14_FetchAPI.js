/*
fetch(URL, {parameters in object format})
*/
// CRUD
// 1) Read All
/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
})
.then((json)=>{
    console.log(json);
})
.catch((error)=>{
    console.log(`Error: ${error}`);
});*/
// 2) Read One
/*fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>{
    return response.json();
})
.then((json)=>{
    console.log(json);
})
.catch((error)=>{
    console.log(`Error: ${error}`);
});*/
// 3) Create
/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response)=>{
    return response.json();
})
.then((json)=>{
    console.log(json);
})
.catch((error)=>{
    console.log(`Error: ${error}`);
});*/
//
document.querySelector("#formSubmit").addEventListener("click", function(e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: new FormData(document.querySelector("#postForm")),
        headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
    })
.then((response)=>{
    return response.json();
})
.then((json)=>{
    console.log(json);
})
.catch((error)=>{
    console.log(`Error: ${error}`);
});
});
// 4) PUT 
/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => {
    console.log(json);
    console.log("Data Updated Using PUT!");
});*/
// 5) PATCH
/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => {
    console.log(json);
    console.log("Data Updated Using PATCH!");
});*/
// 6) DELETE
/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then((response)=>{
    response.json();
})
.then((json)=>{
    console.log(json);
    console.log("Data Deleted Using DELETE!");
});*/