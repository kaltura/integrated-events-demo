async function login() {
    const userId = document.getElementById('userId').value;

    // mandatory fields:
    if(!userId) {
        console.log("missing user ID");
        const heading = document.querySelector("#name");
        heading.textContent = "User ID is mandatory...";
        heading.classList.remove('hide');
        return;
    }

    const {response, body} = await fetchHelper(window.location.origin + `/api/user?id=${userId}`, 'GET', null);

    if(body !== false) {
        console.log("user logged-in successfully");
        setCurrentUser(body);
    } else {
        console.log("user login failed!!");
    }
}