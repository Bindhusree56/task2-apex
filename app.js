document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            
            // Regex to ensure email ends with '@gmail.com'
            const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

            if (username.length < 6) {
                alert("Username must be at least 6 characters long.");
                e.preventDefault();
            } else if (!gmailPattern.test(email)) {
                alert("Only Gmail addresses are allowed (e.g., abc@gmail.com).");
                e.preventDefault();
            } else {
                console.log("Submitted successfully!");
            }
        });
    }
});



let deleteElement = (btn) => {
  btn.closest('.card').remove();
}

function addPic() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("titleInput").value = '';
    document.getElementById("urlInput").value = '';
    document.getElementById("fileInput").value = '';
}

function addNewCard() {
    const title = document.getElementById("titleInput").value;
    const url = document.getElementById("urlInput").value;
    const file = document.getElementById("fileInput").files[0];
    const container = document.querySelector(".container");

    const reader = new FileReader();
    const createCard = (src) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = src;

        const h3 = document.createElement("h3");
        h3.textContent = title;

        const btn = document.createElement("button");
        btn.textContent = "delete";
        btn.onclick = () => card.remove();

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(btn);

        container.appendChild(card);
        closeModal();
    };

    if (file) {
        reader.onload = () => createCard(reader.result);
        reader.readAsDataURL(file);
    } else if (url) {
        createCard(url);
    } else {
        alert("Please enter an image URL or upload a file.");
    }
}
