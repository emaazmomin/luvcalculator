// To hide animation after loading window:
let load = document.getElementsByClassName('loading-container');
// let onload = document.getElementById('onload');
window.addEventListener('load', () => {
    load[0].style.display = 'none';
    // onload.style.display = 'flex';
})

const result = document.getElementById('result');
let btn = document.getElementById('calculate');
let yourNameSpan = document.getElementById('yourName');
let partnersNameSpan = document.getElementById('partnersName');
//if the value is not empty
btn.addEventListener('click', e => {
    // getting updated values of inputs
    let yourName = document.getElementById('your-name').value;
    let partnerName = document.getElementById('partner-name').value;
    //showing alert if values not entered
    if (!yourName || !partnerName) {
        document.getElementById('alert').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>All Feilds Required</strong> Enter both Your Name and Partner's Name
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }
    else {
        let load_result = document.getElementsByClassName('loading-result');
        load_result[0].style.display = 'flex';
        window.addEventListener('load',()=>{
            load_result[0].style.display = 'none';
        }) 
        setTimeout(() => {

            //will convert the random number from 0 to 100%
            const percentage = Math.floor(Math.random() * 101);
            //Give message related to the percentage
            let message = `${yourName} and ${partnerName}'s love compatibility is ${percentage}%`;
            //types of msgs
            if (percentage < 50) {
                document.getElementById('result').style.backgroundColor = '#a2462e';
                message += ', not a great match.💔';
            } else if (percentage < 80) {
                document.getElementById('result').style.backgroundColor = '#de6d50';
                message += ', a decent match.😃';
            } else {
                document.getElementById('result').style.backgroundColor = '#05ff7e';
                message += ', a great match!💘';
            }
            //displaying the result in dom along with share and clear btn
            document.getElementById('result').textContent = message;
            //clear button
            document.getElementById('clr-btn').innerHTML = `<button id="reset" class="btn btn-outline-danger mx-3"><svg
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-arrow-repeat mx-1 mb-1" viewBox="0 0 16 16">
        <path
            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path fill-rule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
            </svg>Clear</button>`;
            //share button
            document.getElementById('shr-btn').innerHTML = `<a class="btn btn-outline-success"
href="whatsapp://send?text=${encodeURIComponent(message)}" target="_blank"
rel="noopener noreferrer"><i class="fa fa-share"></i><i class="bi bi-share"></i><svg
xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
class="bi bi-share" viewBox="0 0 16 16">
<path
d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
</svg> Share</a>`;
            e.target.disabled = true;
            document.getElementById('reset').addEventListener('click', e => {
                window.location.reload();
            })
        }, 2000);
    }
});
