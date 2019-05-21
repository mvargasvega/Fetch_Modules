console.log("Hello I work")
// how to do both in one 
catchRainbow()
    .then(response => {
        console.log("The request has been made succesfully");
    })
    .catch(error => {
        console.log('error');
        console.error(error);
    });

async function catchRainbow(){
    const response = await fetch("rainbow.jpg");
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}



// How to write a fetch function "raw"

// fetch('rainbow.jpg').then(response => {
//     console.log(response);
//     return response.blob();
// })
//     .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// })
// // how to catch an error for that function
// .catch(error => {
//     console.log("Error!");
//     console.log(error);
// });