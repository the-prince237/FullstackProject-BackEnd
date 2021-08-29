//importons le package HTTP natif de node quin nous permettra de créer le serveur
const http = require("http");

/* créons le serveur avec la methode "createServer" sur http. 
On se sert d'une fonction qui prend en parameètre les objets request et resopnse.
enfin , la methode end de la réponse nous permet de renvoyer un résultat de type string
*/
const server = http.createServer((req, res) => {
    res.end("voilà la réponse du serveur!");
});

/*enfin, on configure le serveur pour qu'il écoute
- Soit la variable d'environnement du port grace à "process.env.PORT", c'est celui-ci qu'on écoutera
- Soit le port 3000, ce qui nous servira dans le cas de notre plateforme de développement*/
server.listen(process.env.PORT || 3000);

//installer nodemon avec la commande "npm install -g nodemon"
//utiliser la commande "nodemon server" pour écouter que le serveur écoute le port paramétré
//lancer la page "http://localhost:3000" dans le navigateur.