# app

## Project setup

docker-compose build
docker-compose run app yarn install

### run app

docker-compose run -p 3000:3000 -p 4000:4000 app

### install dependency

docker-compose run app yarn add package_namme

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```
