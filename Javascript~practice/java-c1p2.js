// let merks=prompt('Tyep your input mark');


// if(merks>=0 && merks<=32){console.log(`Appny file korsen  appnay k akty rakys da hoby`)}
// else if(merks>=33 && merks<=40){console.log(`Appny D pyasen ro vlo korty hoby`)}
// else if(merks>=41 && merks<=50){console.log(`Appny C pyasen ro vlo korty hoby`)}
// else if(merks>=51 && merks<=60){console.log(`Appny B pyasen ro vlo korty hoby`)}
// else if(merks>=61 && merks<=70){console.log(`Appny A- pyasen ro vlo korty hoby`)}
// else if(merks>=71 && merks<=80){console.log(`Appny A pyasen ro vlo korty hoby`)}
// else if(merks>=81 && merks<=100){console.log(`Appny A+ pyasen ro vlo korty hoby`)}
// else{console.log(`Appny dure netty korsen. appnaky mare da hobby`)}

// let age = 2;

// switch(age){
//     case 2 :console.log(`Apner switch case 1 bossor`);break;
//     case 4: console.log(`Apner switch case 2 bossor`);break;
//     case 6:console.log(`Apner switch case 3 bossor`);break;
//     default :console.log(`Apnner know kes ni`);break;
// }

// let amound=prompt('Amound');
// let currency=prompt('Currency');

// if(amound=='' && currency==''){
// alert('All fields are required !');
// }
// else{
//     if(currency =='dollar'){console.log(`${amound} ${currency} ${amound*86.74} BDT`)};
//    else if(currency =='pound'){console.log(`${amound} ${currency} ${amound*102.71} BDT`)};
//    else if(currency =='euro'){console.log(`${amound} ${currency} ${amound*97.42} BDT`)};
// }


// let name=prompt('Student Name');
// let roll=prompt('Roll');
// let bn=parseInt(prompt('Bangla'));
// let en=parseInt(prompt('English'));
// let mt=parseInt(prompt('Math'));
// let sc=parseInt(prompt('Singe'));
// let hos=parseInt(prompt('Hostory'));

// let totl =bn+en+mt+sc+hos;
// let cgpa=totl/2;

// console.log(`
// Student Name : ${name}
// Student Roll : ${roll}

// Bangla       : ${bn}
// English      : ${en}
// Math         : ${mt} 
// Since        : ${sc}
// Hostory      : ${hos}
// ---------------------------
// Tottel  mark : ${totl}
// cgpa         : ${cgpa}

// `)


// function razu(name='LFWY',age=18,hobby='js'){console.log(`My name is ${name} she is good student. she is ${age} year old. she is hobby ${hobby}  `)}

// razu();

// function vlo(name='LFWY', age='18',hobby='strdy'){
//     return`My name is a ${name} He is ${age} old yere old. He is a fovortght.`
// }
// console.log(vlo())

//bogg nay
// function agecol(name,age){
//     return `My name is a ${name}. He is a ${ age} years Old.`;
// }
// let name=prompt('name');
// let age =number(prompt('Birth Date'));
// console.log(agecol(name,age));

// function area(lenth, width){
//     return lenth * width;
// }
// console.log(area(12,6))s

// function monpaky(land,hight){
//     return .5 * land *hight
// }
// let land =parseInt(prompt('Land ar Width'))
// let hight =parseInt(prompt('Land ar hight'))
// console.log(monpaky(land,hight))

// function janpaky(tyep, length,width)
// {
//     if(tyep=='s'){return length * length;} 
//     else if(tyep=='r'){return length* width}
//     else if (tyep=='t'){return 5.* length * width}
    
// }
// let length=parseInt(prompt('Your land hight'));
// let width=parseInt(prompt('Your land width'));
// console.log(`
// langth = ${length}
// Width  =${width}
// ------------------
// mot calctation = ${janpaky('s',length,length)}

// `)
// let razu='Md Razu sheikh';

// function arra(name,roll){
//     let gh='junu sona';
//     let age='18';
//  console.log(`My name is a ${gh}. she is a ${razu} year old.`)

// }
// arra();


// console.log(`${razu} he is a good student` );
 
let name=prompt('Student Name');
let roll=prompt('Roll')

let bn = Number(prompt('Bangla'))
let en = Number(prompt('English'))
let ma = Number(prompt('Math'))
let sc = Number(prompt('Sciench'))
let ss = Number(prompt('Social Sciench'))
let re = Number(prompt('Religion'))


console.log(`

Student name ${name}
Student roll ${roll}

subject        Marks          GPA                           Grade
Bangla         ${bn}            ${gpa(bn)}      ${grade(bn)}
English        ${en}            ${gpa(en)}      ${grade(en)}
Math           ${ma}            ${gpa(ma)}      ${grade(ma)}
Sciench        ${sc}            ${gpa(sc)}      ${grade(sc)}
S Sciench      ${ss}            ${gpa(ss)}      ${grade(ss)}
Religion       ${re}            ${gpa(re)}      ${grade(re)}
-------------------------------------------------------------

`)