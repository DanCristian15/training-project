# traing2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### old json
id. name. number. height. image. date.

### new json 
standings [] (status == true) (data.standings)
id = team.id 
name = team.displayName
wins = stats[0].value
lastUpdates = logos[0].lastUpdated
image = logos[0].href
isActive = team.isActive

https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc

1. get data from external 
2. normalize data
3. dispatch actions and load data 
4. point itemList and item to properties
5. if wins < a medium value change the background color 
6. add an delete icon on every item from the list that delete the item from vuex

