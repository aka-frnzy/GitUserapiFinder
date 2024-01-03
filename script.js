const usernameInput = document.getElementById("username");
const searchButton = document.getElementById("search");
const profile = document.getElementById('profile');
const error = document.getElementById('error');

usernameInput.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        ftch();
    }
})


searchButton.addEventListener('click', () => {
    ftch();
});

async function ftch() {
    const username = usernameInput.value;
    if (!username) {
        error.innerText = "Please enter a valid username";
        return;
    }


    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        profile.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.name}">
        <h2>${data.name}</h2>
        <p>Bio: ${data.bio}</p>
        <p>GitHub URL: <a href="${data.html_url}">${data.html_url}</a></p>
        `;

    }
    catch (err) {
        console.log(err);
        error.innerText = "Error fetching the data from GIthub api"
    }
}