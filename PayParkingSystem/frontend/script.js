
function addCar() {
    const carNumber = prompt("Enter Car Number:");
    const category = prompt("Enter Category (VIP, Business, Ordinary):").toLowerCase();

    const slot = document.createElement("div");
    slot.className = "slot";
    slot.innerHTML = `
        <p>${carNumber}</p>
        <button onclick="startParking(this)">Start</button>
        <button onclick="stopParking(this)">Stop</button>
        <button onclick="resetParking(this)">Reset</button>
        <p class="timer">00:00:00</p>
    `;

    if (category === "vip") {
        document.getElementById("vipSlots").appendChild(slot);
    } else if (category === "business") {
        document.getElementById("businessSlots").appendChild(slot);
    } else {
        document.getElementById("ordinarySlots").appendChild(slot);
    }
}

function startParking(btn) {
    const timer = btn.parentElement.querySelector(".timer");
    timer.startTime = Date.now();
    timer.interval = setInterval(() => {
        const elapsed = Date.now() - timer.startTime;
        const hrs = Math.floor(elapsed / 3600000);
        const mins = Math.floor((elapsed % 3600000) / 60000);
        const secs = Math.floor((elapsed % 60000) / 1000);
        timer.textContent = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }, 1000);
}

function stopParking(btn) {
    const timer = btn.parentElement.querySelector(".timer");
    clearInterval(timer.interval);
}

function resetParking(btn) {
    const timer = btn.parentElement.querySelector(".timer");
    clearInterval(timer.interval);
    timer.textContent = "00:00:00";
}
