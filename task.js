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
          delete cach.shift();
        }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
    return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}