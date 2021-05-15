import './sass/main.scss';

// Задание 1
const delay = ms => {
    return new Promise(
        resolve => setTimeout(() => resolve(ms), ms)
    );
};
const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms


/*Тренировка Задание 1
const delay = (ms, callNumber) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ms, callNumber }), ms);
    });
};

const logger = time => console.log(
    `Resolved number ${time.callNumber} after ${time.ms}ms`
);

const initialCount = 1;
const periodOfTime = 5000;
function randomNumber() {
    return Math.round(Math.random() * periodOfTime);
}
function makeCounter() {
    let count = initialCount;

    return function() {
        return count++;
    }
}

let counter = makeCounter();

delay(randomNumber(), counter()).then(logger);
delay(randomNumber(), counter()).then(logger); 
delay(randomNumber(), counter()).then(logger); 
delay(randomNumber(), counter()).then(logger); */


//Задание 2