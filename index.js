const design = document.getElementById("profile")

let showingYuta = 1

function handleClick() {

    if (showingYuta === 1 ) {
        design.src = "Yuta2.png"  // Change to Aya pic
        design.alt = "Aya 💚"
        showingYuta = 2 
    } else if (showingYuta === 2){
        design.src = "Yuta1.png" // Change back to Yuta
        design.alt = "Yuta the cat"
        showingYuta = 3
    }
    else{
         design.src = "yuta.jpg" // Change back to Yuta
        design.alt = "Yuta the cat"
        showingYuta = 1 
    }
}


design.addEventListener("click", handleClick )



const darkBtn = document.getElementById("darkBtn")
const body = document.body

function toggleDark() {
    body.classList.toggle("dark")
    
    if (body.classList.contains("dark")) {
        darkBtn.innerText = " 🌙 Dark Mode"
    } else {
        darkBtn.innerText = "☀️ Light Mode"
    }
}

darkBtn.addEventListener("click", toggleDark)