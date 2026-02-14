const Container = document.querySelector(".container")

async function getData() {
    // fetch data
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const Users = await response.json()
        // const User = dataSet.map(user => ({ //create an object for multiple data instead of using a string
        //     name: user.name,
        //     email: user.email,
        //     company: user.company
        // }))
        console.log(Users)

        // DOM manipulation
        Users.forEach((user) => {
            const {name, email, company} = user //destructuring - extracting name,email and company keys from user array that was fetched
            
            //create the div card
            const Card = document.createElement("div")
            Card.className = "card"  //add class "card" to the div
            Card.innerHTML = `
                    <h2>${name}</h2>
                    <h4>${company.name}</h4>
                    <p>${email}</p>
                    <button class="btn">Contact User</button>
            `
           const button = Card.querySelector(".btn")
           button.addEventListener("click", () => {
                alert(`You have contacted ${name} at ${email}`)
            })

            //add div to main conatiner
            Container.append(Card) 
        })
    }catch(error){
        console.error("Error when fetching data: ", error)
        Container.innerHTML = `<p>Failed to load user data. check network connection, check directory...</p>`
    }
}

getData()

            // DOM MANIPULATION Method 2 - creating elements within the card
            // name element
            // const name = document.createElement("h2")
            // name.textContent = user.name
            // Card.append(name) //add data to div

            //company name element
            // const company = document.createElement("h4")
            // company.textContent = user.company.name
            // Card.append(company) //add data to div

            // email element
            // const email = document.createElement("p")
            // email.textContent = user.email
            // Card.append(email) //add data to div


            //create button
            // const button = document.createElement("button")
            // button.classList.add("btn")
            // button.textContent = "Contact"
            // Card.append(button) //add button div
            // button action