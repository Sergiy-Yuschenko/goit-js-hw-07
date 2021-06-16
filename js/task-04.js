let counterValue = 0;
const counterValueEl = document.querySelector('#value');
const actionDecrementEl = document.querySelector('[data-action="decrement"]');
const actionIncrementEl = document.querySelector('[data-action="increment"]');

const increment = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

actionDecrementEl.addEventListener('click', decrement);

actionIncrementEl.addEventListener('click', increment);




