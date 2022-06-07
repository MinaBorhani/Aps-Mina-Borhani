 // syntax Object
 const user = {
     name: 'mina',                                                // String
     age : 23 ,                                                   // number
     language : ['html', 'css', 'js', 'mongodb'],                 // array
     login : function() {                                         // function
         console.log("the user loggedin");
     },
     logout () {                                                  // function
         console.log("the user loggedout");
     }
 }

 


 user.login();                      //the user loggedin
 user.logout();                     //the user loggedout

 console.log(user.name);             //mina
 console.log(user['age']);          //23

 user.name = 'Nilofar';             // **** rewrite
 console.log(user.name);            //Nilofar
