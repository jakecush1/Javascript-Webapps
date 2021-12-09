
    firebase.initializeApp({
        apiKey: "AIzaSyDgAFgXelT-F0vGjjtFbS5QeuycRjHPxMU",
        authDomain: "recipe-app-158e1.firebaseapp.com",
        projectId: "recipe-app-158e1",
    })

    const db = firebase.firestore()

function registerUser(){ // CREATE A USER 

    let regEmail = document.getElementById("registerEmail").value;
    let regPass = document.getElementById("registerPassword").value;

    firebase.auth().createUserWithEmailAndPassword(regEmail,regPass)
    .then((user) =>{

    let userId = user.user.uid;

    //console.log(userId)
    console.log("registration success");
    alert("registration success")
    
    })
    .catch(()=>{
        alert("failed")
    })
 }


function signInUser(){

    let logInEmail = document.getElementById("logInEmail").value;
    let logInPass = document.getElementById("logInPassword").value;

  firebase.auth().signInWithEmailAndPassword(logInEmail,logInPass)
  .then((user)=>{

    console.log("user signed in")
    window.location.href = "recipe.html";

    }).catch(()=>{
        alert("failed")
    })

}

//storing ingredients as arrays worked aswell
//but they were stored as strings instead of
//properties with values, and may be harder to 
//reference because they are maps instead of objects

// let ingredientsArray = [];

function makeRecipe(){

//get inputs
let recipe = document.getElementById("food").value;
let ingredientItems = document.getElementById("ingredient").value;
let amount = document.getElementById("amount").value;
let ingredients = "Ingredients";

// ingredientsArray.push(ingredientItems);
// console.log(amount + ingredientsArray);

//access user id to store data
let userID = firebase.auth().currentUser.uid;
// console.log(userID);

//set new item
db.collection("Recipe App").doc(userID).set(
  {[recipe]:{[ingredientItems]: amount}} , 
  {merge:true}
)

.then(()=> {

  console.log("document successfully written")

  document.getElementById("ingredient").value = "" ;
  document.getElementById("amount").value = ""    

   
})
.catch(()=>{

})
}

function signOutUser(){
firebase.auth().signOut().then(() => {

  console.log("user signed out")
  window.location.href = "sign-in.html";
})

}


