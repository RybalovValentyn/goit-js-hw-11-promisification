import '../css/styles.css';

const delay = ms => {
 return new Promise((resolve, reject) => {
    const time = ms;
     setTimeout(() => {
         logger(time);
     }, time);
 })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
  delay(1500).then(logger);
  delay(3300).then(logger);
  delay(500).then(logger);