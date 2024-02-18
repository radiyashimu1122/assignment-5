
const seats = document.getElementsByClassName('seat');
const availableSeat = document.getElementById('availableSeat');
const total = document.getElementById('total');
const seatLeft = document.getElementById('left-button');
const maxTicket = document.getElementById('max-ticket')
let seatCount = 0;
let totalTk = 0;
let seatAvailAble = 40;
for (const seat of seats) {
    seat.addEventListener('click',function(e){
        seat.style.backgroundColor= '#1DD100';
        seat.style.color = 'white'
        const tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${e.target.innerText}</td>
            <td>Economics</td>
            <td>550</td>
        `
        tbody.appendChild(tr);


        seatCount++
        totalTk = totalTk + 550;
        seatAvailAble--
        seat.disabled = true
        

        availableSeat.innerText = seatCount;
        total.innerText = totalTk;
        seatLeft.innerText = seatAvailAble;
        console.log(seatAvailAble)


        if(seatCount >= 4){
    for (const seat of seats) {
        seat.disabled = true
        maxTicket.innerText = 'Ticket reach out'
    }
    
}
        
    })
}




