//Encodage manuel de quelques cartes pour l'exercice
const base = [
    {
        name : "Initialisation",
        description : "Démarrer le processus et créer les documents de base",
        due : "2022-12-28",
        label : "done"
    },
    {
        name : "Répartition des tâches",
        description : "Déterminer les différentes tâches à réaliser et dispatcher suivant les souhaits et les compétences",
        due : "2023-01-15",
        label : "doing" 
    },
    {
        name : "Contact avec le client",
        description : "Fixer un rendez-vous avec Monsieur Tartenpiont et voir avec lui les exigences au niveau du design",
        due : "2023-01-15",
        label : "doing"
    },
    {
        name : "Présentation de l'avant-projet",
        description : "Fixer une date et réunir toute l'équipe pour la présentation de l'avant-projet",
        due : "2023-02-10",
        label : "to-do"
    },
]
for (let b of base){
    create_task(b.name, b.description, b.due, b.label)
}

//récupérer les informations du formulaire
const recup = (e) => {
    //Récupération des données du formulaire
    let nameOr = document.getElementById('form__name').value;
    let descriptionOr = document.getElementById('form__description').value;
    let dueOr = document.getElementById('form__due').value;
    console.log(dueOr);
    let labelOr = document.getElementById('form__label').value;
    console.log(labelOr);
    //Reset des zones d'encodage
    document.getElementById("formulaire").reset();
    //Appel de la fonction de création des cartes dans la div "task."
    create_task(nameOr, descriptionOr, dueOr, labelOr);
    
    /*Local storage
    let tache = {
        name : nameOr,
        description : descriptionOr,
        due : dueOr,
        label : labelOr,
    }
    liste.push(tache);
    console.log(liste);
    localStorage.setItem("Liste",JSON.stringify(liste));
    localStorage.clear();*/

}

let submit = document.getElementById("submit");
/*local storage;
let liste = [];*/
submit.addEventListener('click', recup);



//Créer les cartes dans le HTML

    function create_task(name,description,date,label){
        //creation carte-tache
        let tasks=document.querySelector(".tasks")
        let task=document.createElement("div");
        task.className="tasks__task"
        tasks.appendChild(task)
        //creation nom
        let name_task=document.createElement("h2")
        name_task.className="tasks__task--name"
        task.textContent=name
        task.append(name_task)
        //creation description
        let description_task=document.createElement("p")
        description_task.className="tasks__task--description"
        description_task.textContent=description
        task.append(description_task)
        //creation date-end
        let date_task=document.createElement("p")
        date_task.className="tasks__task--date"
        date_task.textContent=date
        task.append(date_task)
        //creation label
        let label_task=document.createElement("p")
        label_task.className="Tasks__task--label"
        label_task.textContent=label
        task.append(label_task)
        //temps restant
        let Time_task=document.createElement("p")
        Time_task.className="Tasks__task--time"
        Time_task.textContent=day(date)
        task.append(Time_task)
    }


//Filtrer




//Trier


//retourne le nombre de jours entre maintenant et la date en argument.
function day(date_end){
    let date=new Date(date_end)
    let Now= new Date()
    let Time=date.getTime()-Now.getTime()
    let formatTime=Math.ceil((Time/(1000*60*60*24)))
    return formatTime
}




