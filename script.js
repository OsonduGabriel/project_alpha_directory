const containers = document.querySelector(".container")

async function getData() {
    // fetch data
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        const dataSet = data.slice(0, 10)
        const Users = dataSet.map(user => ({ //create an object for multiple data instead of using a string
            name: user.name,
            email: user.email
        }))
        console.log(Users)

        // DOM manipulation
        Users.forEach((user) => {
            //create the div
            const Card = document.createElement("div")
            Card.classList.add("card") //add class "card" to the div

            // name element
            const name = document.createElement("h3")
            name.textContent = user.name
            Card.append(name) //add data to div

            // email element
            const email = document.createElement("p")
            email.textContent = user.email
            Card.append(email) //add data to div

            //create button
            const button = document.createElement("button")
            button.classList.add("btn")
            button.textContent = "Contact"
            Card.append(button) //add button div
            // button action
            button.addEventListener("click", () => {
                console.log(user.email)
                alert(user.email)
            })

            //add div to main conatiner
            containers.append(Card) 
        })
    }catch(error){
        console.error("Error when fetching data: ", error)
    }
}

getData()