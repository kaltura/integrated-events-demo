async function registerUser() {
    const userId = document.getElementById('userId').value;
    const first = document.getElementById('firstname').value;
    const last = document.getElementById('lastname').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;

    // mandatory fields:
    if(!userId) {
        console.log("missing user ID");
        const heading = document.querySelector("#name");
        heading.textContent = "User ID is mandatory...";
        heading.classList.remove('hide');
        return;
    }

    const formInfo = {
        userId,
        firstname: first,
        lastname: last,
        company,
        email
    }
    const formData  = new FormData();

    for(const name in formInfo) {
        formData.append(name, formInfo[name]);
    }

    const {response, body} = await fetchHelper(window.location.origin + `/api/user`, 'POST', JSON.stringify(formInfo));

    if(response.status === 200 && body.msg === "OK") {
        console.log("user created successfully");
        window.location.href='/pages/login/index.html';
    } else {
        console.log("user login failed!!");
    }
}