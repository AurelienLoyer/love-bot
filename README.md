# Love Bot

![Isaac](https://s-media-cache-ak0.pinimg.com/736x/cc/30/f8/cc30f834e67451dcd37049d0dd6800d8--old-tv-shows-love-boat.jpg)

## Idées 

Le but est de faire un POC d'industrialisation basée sur Github, CircleCI, Slack-like, Api.ai. Il sera nécessaire de développer un petit serveur NodeJS. 

Voici les idées d'actions que nous pouvons implémenter : 

- Pouvoir demander depuis Slack la liste des PRs nécessitant une review (ayant le label MERGEABLE, et nécessitant au moins une review)
- Demander depuis Slack la liste de mes repos
- Pouvoir demander depuis Slack la liste de toutes les PRs d'un repo
- Être notifié dans Slack dès qu'il y a une nouvelle PR (notifier tout le monde sauf le dev)
- Récupérer le statut d'une PR
- Relancer depuis Slack un build CircleCI
- Ajouter des contrôles dans Github: pour vérifier
  - Structure du nom de la PR
  - Une PR doit posséder le tag MERGEABLE
  - doit avoir deux reviews
 - Merger (branche master) depuis Slack une PR
 - Dès que la branche master est modifiée, déploiement sur gh-pages
 - Notifier le développeur sur Slack si l'une des pbhases de review Github n'est pas bonne
