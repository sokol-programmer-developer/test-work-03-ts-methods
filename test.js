

const div = document.createElement("div");

div.classList.add('black');

document.body.append(div);

// Вставка кода
div.innerHTML = "<h1>открой console там все, описание а также результат каждого хода. информация <br/> Перейди на другую вкладку, затем вернись в данную вкладку.</h1>"





 let text = async () => {
  const isVisible = await visibilityChange(); // вернёт true/false, когда юзер изменит состояние активности вкладки
  const returned = await visible(); // вернёт true, когда юзер вернётся (или уже тут)
  const gone = await hidden(); // вернёт true, когда юзер уйдёт (или уже ушёл)   
  
  return test()
  
}


const visibilityChange = new Promise(function (resolve, reject) {
  window.addEventListener("visibilitychange", function () {
    if (document.hidden === true) {   
      console.log('true скрытые -- вернёт true а не  false, когда юзер изменит состояние активности вкладки ')
      div.textContent = "<h1> true скрытые -- вернёт true а не  false, когда юзер изменит состояние активности вкладки </h1>"
    }
    if (document.hidden === false) {
      console.log('false видный -- вернёт false а не  true, когда юзер изменит состояние активности вкладки ')
      div.textContent = "<h1>false видный -- вернёт false а не  true, когда юзер изменит состояние активности вкладки</h1>"
    }   
  })
});
  

const visible = new Promise(function (resolve, reject) {
  window.addEventListener("visibilitychange", function () {
    if (document.hidden === true) {
      console.log('true Он скрыт -- вернёт true, когда юзер уйдёт (или уже ушёл) ')
      div.textContent = "<h1>true Он скрыт -- вернёт true, когда юзер уйдёт (или уже ушёл)</h1>"
    }    
  });
})

const hidden = new Promise(function (resolve, reject) {
  window.addEventListener("visibilitychange", function () {
    if (document.hidden === false) {
      console.log('true Он Виден -- вернёт true, когда юзер вернётся (или уже тут)')
      div.textContent = "<h1>true Он Виден -- вернёт true, когда юзер вернётся (или уже тут)</h1>"
    }
  });
})

Promise.race([visibilityChange, visible, hidden]).then(function (value) {
    console.log(value);
    
});




