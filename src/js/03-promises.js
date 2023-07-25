import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function FormSubmit(e) {
  e.preventDefault();
  let delay = Number(e.target.elements.delay.value);
  let step = Number(e.target.elements.step.value);
  let amount = Number(e.target.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    let position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
    delay += step;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
};

form.addEventListener('submit', FormSubmit);
