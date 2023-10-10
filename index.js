const modal = document.getElementById("myModal");

let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 5));
});


async function showModal() {
    try {
        const val = await promiseOfModal
        const button = await asyncfunctiongetModal()
        console.log("User has been on the page for 5 seconds");
        val.style.display = "block";
    } catch (error) {

    }
}

showModal()

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 5 seconds");
//     val.style.display = "block";
// })

function asyncfunctiongetModal() {
    return new Promise((res, rej) => {
        res()
        modal.addEventListener("click", (e) => {
            switch (e.target.className) {
                case "close":
                case "modal":
                    modal.style.display = "none"
                    break;
            }
        })
    })
}


const button = document.getElementById("continue");

const alertAtAnimationEnd = () => {
    return new Promise((res, rej) => {
        button.addEventListener('animationend', event => {
            res({ message: 'Continue to subscription!', button: event.currentTarget })
        })
    })
}

async function awaitForAnimationEnd() {
    try {
        const { message, button } = await alertAtAnimationEnd()
        alert(message)
        button.style.backgroundColor = 'rgba(59, 88, 252, 0.55)'
    } catch (error) {

    }
}

awaitForAnimationEnd()
