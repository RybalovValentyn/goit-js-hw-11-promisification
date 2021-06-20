import '../css/styles.css';
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  let time = 0;
  const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);
  
    return new Promise((onSuccess, onError) =>{
        const canProcess = Math.random() > 0.3;

    setTimeout(() => {
       
      if (canProcess) {
        time = delay;
        onSuccess(transaction.id, time);
        // console.log(delay);
              }

              onError(transaction.id);
      
    }, delay);
});
  };

  
  const logSuccess = (id) => {
    //   console.log(time);
       console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  

  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);