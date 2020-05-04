
let url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

fetch(url)
    .then((res) => {

    return res.json()
})
.then((data) => {
    console.log(data)
})