
const users = [{ id: 1, nom: "Jean", prenom: "pierre", age: 25}];             // simuler la présence d'un utilisateur //
const validateButton = document.getElementById('valider');                   // récuperer le bouton 'ajouter' par son id pour pouvoir détécter lorsqu'un utilisateur clique sur ce bouton// 

validateButton.addEventListener('click', addUser);                          // détécter l'evenement du click avec addEventListener  et spécifier les parametres de la fonction (addUser)//

showAllUser(); // appeler la fonction pour afficher les utilisateurs enregistrés en actualisant la page
updateOrDeleteUser(); // appeler la fonction pour qu'elle s'execute en actualisant la page



function updateOrDeleteUser() {    // créer une fonction qui nous permet de modifier ou supprimer les utilisateurs
    const deleteButtons = document.querySelectorAll('.supprimer'); // querySelectorAll permet de recuperer chaque bouton avec sa class
    const editButtons = document.querySelectorAll('.modifier');

    // créer la fonction qui permet de supprimer un element en cliquant sur le bouton supprimer
    deleteButtons.forEach((button) =>  button.addEventListener('click', () => deleteUser(button.id)));
    // créer la fonction qui permet de modifier un element en cliquant sur le bouton modifier
    editButtons.forEach((button) => button.addEventListener('click', () => editUser(button.id)));


}

   //Fonctionnalités
function addUser (e) {
 e.preventDefault();
 const enteredUsersData = {

    // !== est pour mettre une condition qui applique la fonction seulement quand le users nest pas egale à zero
    // si le tableau est vide on ajoute ":1"  

    id: users.length !==0 ? users[users.length - 1].id + 1 : 1,
    nom: document.getElementById('nom').value,
    prenom: document.getElementById('prenom').value,
    age: document.getElementById('age').value,

// la variable entredUsersData nous permet de stocker les utilisateurs
// créer la fonction addUsers // // pour que la page ne s'actualise pas en cliquant sur "ajouter" en met un "event" ou "e" dans la fonction
 };  
if (
    enteredUsersData.nom !== '' &&
    enteredUsersData.prenom !== '' &&                                  // si les champs nom, prenom et age ne sont pas vides execute le code.
    enteredUsersData.age !== ''
) {
    
    // code...
    users.push(enteredUsersData);                                      // push permet d'ajouter un element dans le tableau
    showAllUser();                                                     // pour afficher les users ajoutés on crée la fonction showAllUser
}

}         

function showAllUser() {
    document.getElementById('allUsers').innerHTML = '';                // on récupére la div allUsers afin de vider notre tableau 
    users.forEach(user => {                                             // pour afficher les utilisateurs dans notre site on doit parcourir le tableau avc forEach
        const newInputs = {
           Nom: document.createElement('input'),
           Prenom: document.createElement('input'),
           Age: document.createElement('input'),
        };
        const newDiv = document.createElement('div');
        const newButtons = {
            supprimer: document.createElement('input'),
            modifier: document.createElement('input'),
        };

        // les inputs 
        for(const [key, value] of Object.entries(newInputs)){
            value.setAttribute('type', 'text');
            value.setAttribute('id', `${key}OfUser${user.id}`);
            
            key === 'Nom' && value.setAttribute('value', user.nom);
            key === 'Prenom' && value.setAttribute('value', user.prenom);
            key === 'Age' && value.setAttribute('value', user.age);

            newDiv.appendChild(value);  // afficher les inputs en ajoutant un nouvel element à la div
            document.getElementById('allUsers').appendChild(newDiv);
        }

        // les Boutons "supprimer" et "modifier"
         for (const [key, value] of Object.entries(newButtons)) {
            value.setAttribute('type','button');
            value.setAttribute('class', key);
            value.setAttribute('id', user.id);
            value.setAttribute('value', key);
            newDiv.appendChild(value);  // afficher les boutons "supprimer" et "modifier"
         }
    }) ;     
    
    // créer les deux fonctions deleteUser et editUser
   
  
}

function deleteUser(id) {
    users.forEach((user) => {
     const userPositionInArray = users.indexOf(user);
     user.id === parseInt(id) && users.splice(userPositionInArray, 1);    // splice nous permet de supprimer l'utilisateur
    });    
    showAllUser();   
                                                   // parseInt permet de convertir l'id de chaine de caractére à nombre
 }

 function editUser(id) {
    const newInputs = {
       nom: document.getElementById(`NomOfUser${id}`),
       prenom: document.getElementById(`PrenomOfUser${id}`),
       age: document.getElementById(`AgeOfUser${id}`),
    };

    users.forEach((user) => {
       if (user.id === parseInt(id)) {
        user.nom = newInputs.nom;
        user.prenom = newInputs.prenom;
        user.age = newInputs.age;
       }
    });
    console.log(users);
 }
