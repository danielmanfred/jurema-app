# Jurema Exam

## How to run this API

1. go to your terminal and paste: git clone https://github.com/danielmanfred/jurema-exam.git
2. enter app: cd jurema-exam
3. install the dependencies: npm i
4. run the API: npm start
5. in case you use nodemon: npm run local

## Resources used in development

- Node
- Express
- Restful concepts
- Docker
- Babel

## Routes of the API

### Base endpoint [http://localhost:3000]

### States endpoints

URL                  |     HTTP(Method)  |      Description      |           Data params              |
---------------------| ----------------- | --------------------- | ---------------------------------- |
/estados/            |       GET         | Select all states     |                                    |


### Population endpoints

URL                   |     HTTP(Method)  |      Description                 |    Data params   |
----------------------| ----------------- | -------------------------------- | -----------------| 
/                     |       GET         | Select Brazil Population         |                  |
/:uf                  |       GET         | Select specific state population | uf: Federal Unit |
