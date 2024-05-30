
# Table de tri connectée


Depuis l’ordonnance du 21 octobre 2019 issue de la Loi Egalim, la restauration collective publique ou privée a l’obligation de réaliser un audit initial et de mettre en place un plan de lutte contre le gaspillage alimentaire. J'ai réalisé ce projet à l'aide de mes camarades pour l'obtention de mon BTS SN IR.


## Fonctionnement

Afin de réalisé ce projet, nous avons codé l'application de la table de tri qui permet d'authentifier l'utilisateur à l'aide d'un badge RFID et d'un capteur RFID phidget. Ensuite, l'utilisateur va disposer ses déchets sur les conteneurs qui se trouvent directement sur des balances. Les balances vont comptabiliser les diférents déchets tel que le Pain, les emballages ainsi que les déchets alimentaires. Ces données sont sotckées dans une base de donnée distante. L'application du système local est codé en Java avec le framework JavaFX. Ensuite, l'utilisateur pourra visualiser ses données ainsi que les données générales de la table de tri grâce à une application sous React en typescript qui est connecté à une api Node.JS. Il y a aussi une application pour un gestionnaire qui va pouvoir gérer tous les comptes utilisateur, attribuer un badge etc...

## Demo de la partie web:
Vous pouvez accéder à la démo de la partie web (avec des données factices) via ce [lien](https://demo-table-de-tri.nathanvernet.fr)


## Auteurs

- [@NathanVNT](https://github.com/NathanVNT)
- [@Garnier-Kenan](https://github.com/Garnier-Kenan)
- [@RascleVictor](https://github.com/RascleVictor)

