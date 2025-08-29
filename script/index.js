let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// parent container listener
document.getElementById("card-box").addEventListener("click", function (e) {

    //  heart icon click
    if (e.target.closest(".heart-icon")) {
        heartCount++;
        document.querySelector(".heart-count").innerText = heartCount;
    }

    //  call button click
    if (e.target.closest(".callButton")) {
        if (coinCount >= 20) {
            coinCount -= 20;
            document.getElementById("coin-count").innerText = coinCount;

            let card = e.target.closest(".card-body");
            let serviceName = card.querySelector(".serviceName").innerText;
            let serviceNumber = card.querySelector(".serviceNumber").innerText;

            alert(`📞 Calling ${serviceName} - ${serviceNumber}...`);

            // history container
            let historyContainer = document.getElementById("history-container");

            // create new history item
            let historyItem = document.createElement("div");
            historyItem.className = "flex flex-row justify-between bg-[#FAFAFA] p-1 my-2 rounded";

            // current time
            let now = new Date();
            let timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

            // set innerHTML
            historyItem.innerHTML = `
                <div>
                    <h1>${serviceName}</h1>
                    <span>${serviceNumber}</span>
                </div>
                <div class="my-4">
                    <span>${timeString}</span>
                </div>
            `;

            // append to container
            historyContainer.appendChild(historyItem);

        } else {
            alert("Not enough coins!");
        }
    }

    //  copy button click
    if (e.target.closest(".copyButton")) {
        let card = e.target.closest(".card-body");
        let serviceNumber = card.querySelector(".serviceNumber").innerText;

        navigator.clipboard.writeText(serviceNumber).then(() => {
            copyCount++;
            document.getElementById("copy-count").innerText = copyCount;
            //alert(`Copied: ${serviceNumber}`);
        });
    }
});

// clear history
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("history-container").innerHTML = "";
});
