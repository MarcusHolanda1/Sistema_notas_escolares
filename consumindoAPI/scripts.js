// const fetchGithub = () => {
//     const getGithubUrl = username => `https://api.github.com/users/${username}`


//     fetch(getGithubUrl)
//         .then(response => response.json())
//         .then(github =>{
//             console.log(github)
//         })
//     }

//     fetchGithub()

fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))


