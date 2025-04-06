let candidates = [];

function goToResults() {
    alert("Redirecting to results...");
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function addCandidate() {
    let party = document.getElementById("partyName").value;
    let name = document.getElementById("candidateName").value;
    let file = document.getElementById("candidateImage").files[0];

    if (name && file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            candidates.push({ name, image: e.target.result });
            updateCarousel();
        };
        reader.readAsDataURL(file);
    }
    closePopup("addCandidatePopup");
}

function removeCandidate() {
    let name = document.getElementById("removeCandidateName").value;
    candidates = candidates.filter(candidate => candidate.name !== name);
    updateCarousel();
    closePopup("removeCandidatePopup");
}

function updateCarousel() {
    let carousel = document.getElementById("carouselItems");
    carousel.innerHTML = "";

    if (candidates.length === 0) {
        carousel.innerHTML = "<p>No candidates yet.</p>";
    } else {
        candidates.forEach(candidate => {
            let div = document.createElement("div");
            div.className = "carousel-item";

            let img = document.createElement("img");
            img.src = candidate.image;
            img.alt = candidate.name;

            let nameTag = document.createElement("p");
            nameTag.innerText = candidate.name;

            div.appendChild(img);
            div.appendChild(nameTag);
            carousel.appendChild(div);
        });
    }

    duplicateImagesForLooping();
}

function duplicateImagesForLooping() {
    let carousel = document.getElementById("carouselItems");
    let items = carousel.innerHTML;
    carousel.innerHTML += items;
}
