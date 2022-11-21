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
  let timeOut;                  //Имя таймера
  let timer, count, allCount = null;   // счетчик вызова функции, счетчик вызова десоратора

    return wrapper(...args) {
      clearTimeout(timeOut); // Остановка таймера

      timeOut = setTimeout(() => {
        func.appy(this, args); //Привязка аргументов декоратора к декорируемой функции
        timer = ms;
          if ()

        // Что тут вообще надо дальше делать? Я даже примерно не понимаю((

      });


    }
}