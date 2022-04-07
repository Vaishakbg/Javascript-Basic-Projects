//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=> {
    btn.addEventListener('click', (e)=> {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('reset')) {
            count = 0;
        } else if(styles.contains('increase')) {
            count++;
        }
        if(count > 0) {
            value.style.color = 'green'
        }
        if(count < 0) {
            value.style.color = 'red'
        }
        if(count === 0) {
            value.style.color = '#000'
        }
        value.textContent = count;
    });
});
