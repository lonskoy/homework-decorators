function cachingDecoratorNew(func) {
    let cach = [];

    function wrapper(...args) {
      let hash = args.join(',');
      let temp = cach.find(item => item[hash]);
        if (temp) {
          console.log('Из кэша: ' + temp[hash]);
          return 'Из кэша: ' + temp[hash];
        }

      let result = func(...args);
      cach.push({[hash]: result});
        if (cach.length > 5) {
          cach.shift();
        }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
    return wrapper;
}


// const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay); // Для себя

function debounceDecoratorNew(func, ms) {
  let timeOut; 
  wrapper.allCount = 0; 
  wrapper.count = 0
                  
    function wrapper(...args) {
      clearTimeout(timeOut); // Остановка таймера
      func();
      timeOut = setTimeout( () => {
        func();
        wrapper.count += 1;
      }, ms);
      wrapper.allCount += 1;
    }

    return wrapper;
}