 // let namta = prompt('Enter Your number');

 // for(i=1; i <= 10; i++){
 //     document.write(namta + ' x '+ i + ' = '+ namta*i + '<br>')
 // }



 // let abc = document.querySelector('.abc')

 // abc.innerHTML =  'Prithibi nai';
 // abc.classList.add('Tui')

 // abc.classList.remove('abc')
 // abc.classList.replace('Tui', 'abc')

 // console.log(abc.className)


 // const namta = document.querySelector('.numtaNumber');
 // const click = document.querySelector('.click');
 // const namtaShow = document.querySelector('.namtaShow')




 // click.addEventListener('click', ()=>{
 //     for(i=1; i<=10; i++){
 //         namtaShow.innerHTML += `<li>${namta.value} x ${i} = ${namta.value*i}</li>`
 //     }
 // })




 // const allData = [
 //     'jony', 21132,'alamin', 1321321, 'shawon', 'alif', 3211321, 3132, 'arif'
 // ] 


 // for(i=0; i<allData.length; i++){
 //     console.log(allData[i])
 // }



 // const question = document.querySelector('.question');
 // const click = document.querySelector('.click');
 // const answer = document.querySelector('.answer');



 // click.addEventListener('click', ()=>{
 //     if(question.value == 'halarpo'){
 //         answer.innerHTML = 'Tui bainchod';
 //     }
 //     else if(question.value ==  'hello'){
 //         answer.innerHTML = 'Hi';
 //     }
 //     else if(question.value ==  'how are you'){
 //         answer.innerHTML = 'I\'m fine';
 //     }
 //     else if(question.value ==  'dosto tumi kemon aso'){
 //        answer.innerHTML = 'mui vala asi, tumi kemon aso?'   
 //      }
 // })


 // let a = 10;
 // let b = 20;
 // a -= b; 
 // console.log(a)



 // const abc = 'M M R Jony';



 // console.log(name.charAt(0))


 // console.log(name.slice(2, 8))


 // console.log(name.replace('Jony', 'Mojibur'))

 // console.log(name.toLowerCase())

 // console.log(name)

 // console.log(abc.split(' '))
 // console.log(abc)



 //  let type = document.querySelector('.type')
 //  let count = 0;


 //  const typeJs = () => {
 //      console.log(type.innerHTML.charAt(count));
 //      count++;

 //      if(count >= type.innerHTML.length){
 //         clearInterval(stop)
 //      }
 //  }



 //  let stop = setInterval(() => {
 //      typeJs()
 //  }, 500)



 // Type js start

 // let type = document.querySelector('.type');
 // let count = 0; 

 // let typeJs = ()=>{
 //     type.innerHTML += type.dataset.text.charAt(count++);

 //     if(count > type.dataset.text.length){
 //         type.innerHTML = '';
 //         count = 0;
 //     }

 // }

 // const stop = setInterval(()=>{
 //     typeJs()
 // }, 100)



 // Counter  js start
 // let counterNumber = document.querySelector('.counterUp');
 // let num = 0;

 // const counter = () =>{
 //     counterNumber.innerHTML = num++;

 //     if(num > counterNumber.dataset.count){
 //         clearInterval(stop)
 //     }
 // }

 // let stop = setInterval(()=>{
 //     counter();
 // }, counterNumber.dataset.time)



 // Progress bar start
 // let flexbalBar = document.querySelector('.flexbalBar');
 // let percentBar = document.querySelector('.percentBar');
 // let count = 0;
 // let error  = document.querySelector('.error')

 // const progress = () =>{
 //     count++;
 //     flexbalBar.style.width = `${count}%`;
 //     percentBar.innerHTML = `${count}%`;

 //     if(count == flexbalBar.dataset.percent || count >= 100){
 //         clearInterval(stop)
 //     }
 // }

 // let stop = setInterval(()=>{
 //     progress()
 // }, 10)


 // Type js 2nd

 // let type = document.querySelector('.type');
 // let count = 0; 
 // let text = type.innerHTML
 // type.innerHTML = `<h1 class="typeText"></h1>`;
 // let heading = document.querySelector('.typeText');

 // let typeJs = ()=>{
 //     heading.innerHTML += text.charAt(count++) ;

 //     if(count >= text.length){
 //         heading.innerHTML = '';
 //         count = 0;
 //     }
 // }

 // const stop = setInterval(()=>{
 //     typeJs()
 // }, type.dataset.speed)


 // let text = document.querySelector('.type');
 // let count = 0;
 // let textIn = text.innerHTML;
 // text.innerHTML = `<h1 class="typeText"></h1>`;
 // let typeText = document.querySelector('.typeText');


 // function typeMain(){
 //     typeText.innerHTML += textIn.charAt(count++);

 //     if(count >= textIn.length){
 //         typeText.innerHTML = '';
 //         count = 0;
 //     }
 // }


 // let stop = setInterval(function(){
 //     typeMain();
 // }, 100)





 // function a (){
 //     console.log('Hello World');
 // }


 // function b (asd){
 //     let a = 213
 //     let b = 3524
 //     a+b
 //     asd();
 // }


 // b(a);


 // let count = 0;
 // function abc(){
 //     count++;
 //     console.log(count)
 // }

 // setInterval(function(){
 //     abc()
 // }, 500)



 // let click = document.querySelector('.click');
 // let a = true;


 // function abc(){
 //     if(a){
 //         console.log('Yes')
 //     }
 //     else{
 //         console.log('No')
 //     }
 // }

 // click.addEventListener('click', abc)



 // IIFE - Immediately Invoked Function Expression

 // (function hi(){
 //     var aaa = 20;
 //     console.log(aaa);
 // })()


 // Array all

 // let car = [
 //     'audi', 'Lamborgini', 'BMW' , 'sdasdasd',
 // ]

 // car.push('shala')
 // car.pop()
 // car.shift()
 // car.unshift('Bus')
 // console.log(car.pop())
 // console.log(car.pop())
 // console.log(car)

 //  for(i=0; i<car.length; i++){
 //     console.log(car[i]);
 //  }



 // let studens = [
 //     {
 //         name: 'jony',
 //         roll: 1,
 //         mark: 45,
 //     },
 //     {
 //         name: 'Shawon',
 //         roll: 2,
 //         mark: '',
 //     },
 //     {
 //         name: 'Mehedi',
 //         roll: 3,
 //         mark: '',
 //     },
 // ]


 // studens.map((student)=>{
 //     console.log(student.mark)
 // })



 // for(i=0; i < studens.length; i++){
 //     console.log(studens[i]);
 // }

 //  For loop

 // for(i=0; i < studens.length; i++){
 //     console.log(studens[i].number[0]);
 // }

 // forEach Loop Function

 // studens.forEach(function(student){
 //     console.log(student.number[0])
 // })


 // Map loop Function 

 // studens.map(function(student){
 //     console.log(student);
 // })


 // For Of loop

 // for(let studen of studens){
 //     console.log(studen.name, studen.roll);
 // }

 // For in loop

 // for(let studen in studens){
 //     console.log(studen);
 // }


 // Index of 

 // let name = [
 //     'ami', 'tumi', 'tui'
 // ]

 // console.log(name.indexOf('tui'))


 // Slice Method


 // let movies = [
 //     'what is love', 'my love', 'your love', 'her love',
 // ]

 // const kata = movies.slice(0,2)

 // console.log(kata)
 // console.log(movies)



 // splice Method

 // let movies = [
 //     'what is love', 'my love', 'your love', 'her love',
 // ]


 // movies.splice(1, 2);
 // console.log(movies)





 // This property

 // let a = {
 //     name: 'jony',
 // };

 // let aaa = function (abj){
 //     abj.hiii = function(){
 //         console.log(this.name)
 //     }
 // }


 // aaa(a)


 // a.hiii()



 // let taka = function(){
 //     return{
 //         name: 'Five Hundred',
 //         amout: 500,
 //         value: function(){
 //             console.log(this.name)
 //         }
 //     }
 // }

 // taka().value()



 // let a = {
 //     name: 'jony',
 //     age: 12,
 // };

 // function abc(){
 //     console.log(this.name)
 // }

 // abc.call(a)


 // let a = {
 //     name: 'jony',
 //     age: 12,
 // };

 // function abc(x,y,z){
 //     console.log(`${this.name} is a ${x} boy. He ${y} to play ${z}`)
 // }

 // let x = 'good'
 // let y = 'Love'
 // let z = 'Game'

 // // abc.call(a, x,y,z)

 // // let all = [x,y,z]

 // // abc.apply(a, all)

 // let main = abc.bind(a, x,y,z)

 // main()

 // 'use strict'

 // function abc (){
 //     console.log(this.name)
 // }


 // let data ={
 //     name: 'jony'
 // }

 // abc()



 // let person = {
 //     name: 'jony',
 //     age: 12,
 //     hello: function(){
 //         console.log(`Hello i am ${this.name}, This is my ${car.brand} car and this color is ${car.color}`)
 //     },
 // }


 // let car ={
 //     brand: 'BMW',
 //     color: 'Blue',
 // }

 // person.hello()


 // console.log(this)


 // let person = {
 //     fname: 'Jony',
 //     lname: 'Rahman',
 //     fullName: function(){
 //         return `${this.fname} ${this.lname}`
 //     },
 //     getFullName: function(){
 //         return `${this.getFullName()}`
 //     }
 // }


 // console.log(person.fullName())


 // const abc = () => {
 //     console.log(this)
 // }


 // abc()

 // function aaa()  {
 //     console.log(this)
 // }



 // const person ={
 //     fname: 'Jony',
 //     lname: 'Rahman',
 //     address: function(){
 //         console.log(`Hi my name is ${this.fname} ${this.lname}`);
 //     },

 //     alif: {
 //         name: 'alif',
 //         deg: 'Leke jawa',
 //         address: function(){
 //             console.log(`my name is ${this.name} and i'm from ${this.deg}...... my name is ${person.fname}` )
 //         }
 //     }
 // }

 // const abc = {
 //     name: 'jony'
 // }


 // person.address()


 // person.alif.address()


 // function abc(){
 //     console.log(this)
 // }

 // abc()

 // function abc(){

 // }

 // let a = new abc()


 // console.log(a)


 // function person(fname, lname){
 //     this.fname = fname;
 //     this.lname = lname;
 //     this.fullname = function(){
 //         console.log(`${this.fname} ${this.lname}`);
 //     }
 // }


 // const newPerson  = new person('Jony', 'Rahman')

 // console.log(newPerson)



 // function abc(){
 //     console.log('Hello')
 // }


 // let aaa = function asdasd(){
 //     console.log('Hello')
 // }

 // aaa()


 // let hi ={
 //     name: 'Alamin'
 // }

 // const person ={
 //     name: 'Jony',
 //     age: 12,
 //     address: () => {
 //         console.log(this);
 //     }
 // }


 // person.address()

 // const person = {
 //     fname: 'Jony',
 //     lname: 'Rahman',
 //     fruit: ['mango', 'Lichu', 'orange'],
 //     address: function(){
 //         this.fruit.forEach((a) =>{
 //             console.log(`${this.fname} This is ${a}`)
 //         })
 //     }
 // }

 // const abc = {
 //     name: 'alif',
 // }

 // person.address()



 // Truthy or Falsy

 // const a = NaN;
 // const a = 0;
 // const a = null;
 // const a = undefind;
 // const a = false;
 // const a = '';

 //  False, 0, Null, Undefind, "", NaN -----> Falsy value 


 // const a = '';


 // if(a){
 //     console.log('This is truthy');
 // }
 // else{
 //     console.log('This is falsy');
 // }


 //  Ternary Operator


 // let age = 9;


 // let result = age < 18 && age >= 10? 'You are under 18' : age < 10 ? 'You are child' : 'You are adult';

 // console.log(result)


 // Array Find

 // const a = [1,2,3,4,5, 100, 200, 500, 6,7,8,9, 'Hi']

 // let result = a.find(function(currentValue, currentIndx, array){
 //     console.log(currentValue)
 // })

 // Array FindIndex

 // let numbers = [1,2,3,4,5,6,7,8,9];

 // let result = numbers.findIndex((currentValue, currentIndx, array) =>{
 //     return currentValue > 3;
 // })


 // console.log(result);

 // Array Filter

 // let numbers = [1,2,3,4,5,6,7,8,9];

 // let result = numbers.filter((currValue, index, array)=>{
 //     return currValue > 6;
 // })


 // console.log(result) 


 // let numbers = [1,2,3,4,5,6,7,8,9];


 // let result = numbers.slice(0, 4)

 // console.log(result);
 // console.log(numbers);

 // let numbers = [1,2,3,4,5,6,7,8,9];


 // let result = numbers.splice(3, 2, 50, 100) 

 // console.log(result);
 // console.log(numbers);


 // Array Concate

 // let number1 = [1,2,3,4,10]
 // let number2 = [5,6,7,8,9]

 // let result = number1.concat(number2)

 // console.log(result)


 // Array Reduce Problem

 // let numbers = [1,2,3,4,5]


 // let result = numbers.reduce((prevValue, currValue)=>{
 //     console.log(`This is Prev ${prevValue}`)
 //     console.log(`This is Current ${currValue}`)
 // }, 0)


 // Object Keys, values, entries

 // const person ={
 //     name: 'jony',
 //     age: 12,
 //     deg: 'React Developer',
 // }

 // const result = Object.keys(person)
 // const values = Object.Values(person)
 // const entries = Object.entries(person)
 // console.log(result);
 // console.log(values);
 // console.log(entries);


 // Spread Operator

 // const numbers = [1,2,3,4,5,6]


 // let a = [...numbers]

 // console.log(a);





 // JavaScript DOM

 // document.body.innerHTML = "Hello"

 // console.dir(document)
 // document.title = 'E-commerce';
 // console.dir()


 // console.log(document.all)

 // console.log(document.getElementById('head'))
 // let head = document.getElementById('head').textContent
 // let head2 = document.getElementById('head').innerText
 // let head3 = document.getElementById('head').innerHTML

 // console.log(head)
 // console.log(head2)
 // console.log(head3)


 // let abc = document.querySelectorAll('.items')

 // console.log(abc)

 // let a = document.querySelector('ul')
 // let b = document.querySelector('ul')



 // let parent = document.querySelector('.items')
 // let child = parent.children;

 // console.log(child);


 // let dada = document.querySelector('.main')
 // let baba = dada.children
 // let baccha = baba[0].children
 // let update = baccha[0].innerHTML = 'Hello World';
 // let update2 = baccha[1].innerHTML = 'Vai';
 // const child = dada.querySelectorAll('.item')

 // console.log(child);


 // const child = document.querySelector('.item')

 // const parent = child.parentElement

 // const gpaa = child.closest('.main')

 // console.log(gpaa);


 // const nextOne = child.nextElementSibling.innerHTML = "Hi"

 // nextOne.remove()

 // console.log(nextOne);

 // const abc = document.querySelector('.rmv')

 // abc.remove()

 // const child = document.querySelector('.item:nth-child(2)')
 // const nextOne = child.nextElementSibling.innerHTML = "Hi";
 // const nextOne = child.previousElementSibling.innerHTML = "Hello";










 // Create DOM Element

 // const div = document.createElement('div')

 // div.className = 'Mohish'

 // console.log(div)



 // const div = document.createElement('div');
 // const addClass =  div.className = 'logo';
 // div.setAttribute('id', 'lol')

 // const menu = document.querySelector('.menu')
 // const main = document.querySelector('.main')


 // menu.insertBefore(div, main)
 // menu.appendChild(div)
 // menu.append(div)


 // div.style.background = 'red';
 // div.style.height = '50px';









 //  Event Listener



 //  const head = document.querySelector('#head');


 // window.addEventListener('click', function(e){
 //     console.log(e)
 //     // console.log(e.screenY)
 //     // console.log(e.movementX)
 //     // console.log(e.offsetY)
 // })

 // head.addEventListener('dblclick', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mousedown', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mouseup', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mouseenter', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mouseleave', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mouseover', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mouseout', function(e){
 //     console.log(e)
 // })

 // head.addEventListener('mousemove', function(e){
 //     console.log(e)
 // })


 // const input = document.querySelector('.name')
 // const type = document.querySelector('.type')

 // input.addEventListener('keydown', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('keyup', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('keypress', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('focus', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('blur', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('cut', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('paste', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('input', function(){
 //     document.write(type.value)
 // })

 // input.addEventListener('submit', function(){
 //     document.write(type.value)
 // })


 // const names = document.querySelector('form')

 // names.addEventListener('submit', function(e){
 //     e.preventDefault()
 //     console.log(e);
 // })

 // const names = document.querySelector('form')
 // const inputElement = document.querySelector('input')

 // inputElement.addEventListener('keypress', function(e){
 //     console.log(e.target.value);
 // })









 //  Project With DOM


 // let newTask = document.querySelector('#add_task')
 // let form = document.querySelector('form')
 // let incomTask = document.querySelector('.items');
 // let compItem = document.querySelector('.complete_item ul');


 // Function
 // const createTask = function(task){
 //     let item = document.createElement('li')
 //     let checkBox = document.createElement('input');
 //     let label = document.creatElement('label');

 //     label.innerText = task;
 //     checkBox.type = 'checkbox';
 //     item.appendChild(checkBox)
 //     item.appendChild(label)

 //     return item;
 // }



 // Type Js start

 // const type = document.querySelector('.type');
 // let count = 0;


 // function typeJs(){
 //    type.innerHTML += type.dataset.name.charAt(count++) 
 //     console.log(count);

 //    if(count > type.innerHTML.length){
 //         type.innerHTML = '';
 //         count = 0;
 //    }
 // }

 // setInterval(function(){
 //     typeJs()
 // }, type.dataset.speed)


 // Counter Js start


 // let counter = document.querySelector('.counter');
 // let count = 0;

 // function counterJs (){
 //     counter.innerHTML = count++;

 //     if(count > counter.dataset.number){
 //         clearInterval(stop)
 //     }
 // }

 // let stop = setInterval(function(){
 //     counterJs()
 // }, counter.dataset.speed)


 // Progress Bar start

 // let pgrBar = document.querySelector('.progress_bar') 
 // let parcent = document.querySelector('.progress_parcen')
 // let count = 0;

 // function progress(){
 //     parcent.innerHTML = `${count++}%`;
 //     pgrBar.style.width = `${count++}%`;
 //     if(count > pgrBar.dataset.parcent){
 //         clearInterval(stop)
 //     }
 // }


 // let stop  = setInterval(function(){
 //     progress()
 // }, pgrBar.dataset.speed)



 // const names = {
 //     fname: 'Jony',
 //     lname: 'Rahman',
 //     fullName: function(){
 //         return `${this.fname} ${this.lname}`;
 //     }
 // }


 // console.log(names.fullName());

 // console.time('test')
 // let a = 5;
 // let b = 5;

 // console.log(a**b);
 // console.timeEnd('test')

 // console.clear()


 // console.error('This is wrong');
 // console.warn('This is warnning');





 // let day = 6;


 // switch(day){
 //     case 1:
 //         console.log('This is Friday');
 //         break;
 //     case 2:
 //         console.log('This is Saturday');
 //         break;
 //     case 3:
 //         console.log('This is Sunday');
 //         break;
 //     case 4:
 //         console.log('This is Monday');
 //         break;
 //     case 5:
 //         console.log('This is Twesday');
 //         break;
 //     case 6:
 //         console.log('This is Wednesday');
 //         break;
 //     case 7:
 //         console.log('This is Thursday');
 //         break;
 // }




 // function sum(number){
 //     console.log(number);
 // }

 // function total(number2){
 //     console.log(sum);
 // }

 // total(100)


 // Break and Continue

 //  for(i=0; i<=10; i++){
 //     if(i == 4 ){
 //         document.write(`Hello: ${i} <br>`);
 //         continue;
 //     }
 //     document.write(`Number: ${i} <br>`);
 //  }




 // Odd and even Number

 // for(i =0; i <= 100; i++){
 //     if(i % 2 == 0){
 //         console.log(i);
 //     }
 // }
 // for(i =0; i <= 100; i++){
 //     if(i % 2 == 1){
 //         console.log(i);
 //     }
 // }



 // let a = 'Jony'

 // console.log(a.substring(1,4));

 // Multy Counter js

 //  let countText = document.querySelectorAll('.counter');
 //  let countArray = Array.from(countText)

 //  countArray.map((item) => {
 //      let count = 0;

 //      function counterJs() {
 //          item.innerHTML = count++;

 //          if (count > item.dataset.number) {
 //              clearInterval(stop)
 //          }
 //      }

 //      let stop = setInterval(() => {
 //          counterJs()
 //      }, 1000 / item.dataset.number)
 //  })

 //  Multy Type js

 // let typeText = document.querySelectorAll('.type')
 // let typeArr = Array.from(typeText);

 // typeArr.map((typeItem)=>{
 //     let count2 = 0;
 //     function typeJs(){
 //         typeItem.innerHTML += typeItem.dataset.text.charAt(count2)
 //         count2++;
 //         console.log(count2);
 //         if(count2 > typeItem.dataset.text.length){
 //             count2 = 0;
 //             typeItem.innerHTML = '';
 //         }
 //     }


 //     // console.log(count2);

 //     let stop = setInterval(()=>{
 //         typeJs()
 //     }, 1000/ typeItem.dataset.type)
 // })

 // Type JS Back

 //  let typeText = document.querySelector('.type')
 //  let typeArr = typeText.dataset.text.split('')
 //  let typecount = 0;

 //  function typeJs() {
 //      if (typecount < typeText.dataset.text.length) {
 //          typeText.innerHTML += typeText.dataset.text.charAt(typecount++)
 //          typeArr = typeText.dataset.text.split('')
 //      } else {
 //          typeArr.pop()
 //          typeText.innerHTML = typeArr.join('');

 //          if (typeArr.length == 0) {
 //              typecount = 0
 //          }
 //      }
 //  }

 //  setInterval(() => {
 //      typeJs()
 //  }, 200)



 //  Light Box Start

 //  const btn = document.querySelector('.view');
 //  const body = document.querySelector('body')
 //  const box = document.querySelector('.box');


 //  btn.addEventListener('click', (e) => {
 //     body.innerHTML = `
 //     <div class="box">
 //         <h1 class="close">X</h1>
 //         <img src="images/girl.jpg" alt="">
 //     </div>
 //     `;
 //  })


 //  if(box == null){
 //      console.log('box Nai');
 //     // box.addEventListener('click', ()=>{
 //     //     console.log('Ami Asi');
 //     // })
 //  }

 //  else{
 //      console.log('Box ase');
 //  }


 // Call Back function


 // function first(name){
 //     console.log(name);
 // }


 // function sec(a){
 //     let name = 'jony rahman';
 //     a(name)
 // }

 // sec(first)


 // function a(){
 //         console.log('Hello A');
 // }


 // function b(hi){
 //     hi(a)
 // }


 // b(a)


 // let text = document.querySelector('.one')
 // let text = ['jony', 'shawon', 'sins', 'Alif', 'guta', 'khay' ]
 // text.push('asdas')
 // text.pop()
 // text.shift()
 // text.unshift('alamin')

 // for(item of text){
 //     console.log(item);
 // }

 // for(i=0; i< text.length; i++){
 //     console.log(text[i]);
 // }

 // console.log(text);

 // let person = {
 //     name: 'alif',
 //     kaj: 'maiya khor',
 //     age: 52,
 //     abality: 'kharay na',
 //     gender: 'unknow',
 // }

 // person.push({abc: 'hi'})


 // console.log(person);


 // Function A - Z 


 // function download(){
 //     // const fileName = 'xyz.pdf';
 //     // console.log(fileName);

 //     return [
 //         'jony', 'shawon'
 //     ]
 // }

 // download().map(function(item){
 //     console.log(item);
 // })


 // Call Back Function

 // function a (text){
 //     console.log(text);
 // }

 // function b(main){
 //     main('Hello');
 // }

 // b(a)

 // (function (){
 //     console.log('Hello All');
 // })()



 // Async JavaScript

 // console.time()
 // console.log('Hello');

 // setTimeout(function(){
 //     console.log('Jony');
 // }, 1000)

 // console.log('JavaScript');
 // // console.timeEnd()

 // const abc = (num1, num2) =>{
 //     return num1 * num2;
 // }

 // const res = abc(10,30)
 // console.log(res);


 // console.log('Hello');
 // console.log('hhasdkjahsdjkh');
 // console.log('Hi');



 // Call Back Function

function times(){
    let ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
}

 function registration() {
     console.log('Registered Completed');
     times();
 }

 function sendEmail() {
     console.log('Email Send Completed');
     times();
 }

 function login() {
     console.log('Login Completed');
     times();
 }

 function getUserData() {
     console.log('Get User Data Completed');
 }

 function displayUserData() {
     console.log('Display User Data Completed');
 }


 registration()
 sendEmail()
 login()
 getUserData()
 displayUserData()


 console.log('Others Work');




