// 1) 1 ədəd Confirm metodu olacaq. 
// Əgər user OK click etsə body background-color qara olacaq
// function myFunction() {
//     const netice = confirm("Press a button!");
//     console.log(netice);

//     if(netice==true) {
//         document.body.style.backgroundColor = "black";
//     } else {
//         document.body.style.backgroundColor = 'white';
//     }
// }


// 2) 1 ədəd Prompt metodu olacaq. User yaşını daxil etməlidir.
// Əgər userin yaşı 18-dən balacadırsa xəbərdarlıq mesajı çıxarsın
// function myFunction() {
//     const person = prompt('User yasivi daxil ele');
    
//     if( person<18 ) {
//         document.body.innerHTML += '<br>Get isinle mesgul olda balamsan'
//     } else {
//         document.body.innerHTML += '<br>Sen esgerliye yararlisan.'
//     }
// }



// 3) 1 ədəd Class və Obyekt(ad,soyad,password propertiləri və 
// fullname metodu olacaq) hazırlanır.
// Sonra elə bir metod yazılmalıdır ki həmin metodu çağırdıqda 
// Obyektin daxilindən fullname dəyərini 
// götürüb bütün hərflərini böyük formada HTML'a yazdırsın
// function myFunction() {

//     const obyekt = {
//         ad: 'Semed',
//         soyad: 'Mirzezade',
//         password: '12345',
//         fullname: function() {
//             return this.ad + ' ' + this.soyad;
//         },
//         get biggerName() {
//             return this.fullname().toUpperCase();
//         }
//     };
    
// }