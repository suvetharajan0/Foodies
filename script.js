const form = document.getElementById("form")

form.addEventListener("submit",function(e){
   e.preventDefault()
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("number").value;

    alert(`Table Booked Successfully!\n\n
        Name: ${name} \n
        Date: ${date} \n
        Time:  ${time} \n
        Guests: ${guests}`)
    form.reset()
})