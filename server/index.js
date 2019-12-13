


const next = require('next')
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fs = require('fs');
const path = require('path');
const filePath = './data.json';
const movies = require(filePath);

app.prepare().then(() => {

    const server = express();
    server.use(bodyParser.json())
    server.get('/api/v1/movies', (req, res) => {
        res.json(movies)
    })

    server.get('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params
        const movie = movies.find(m => m.id === id)
        res.json(movie)
    })

    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body;
        movies.push(movie)
        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(movies, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err);
            }

            return res.json('movie has been successfully added.')
        })
    })

    server.delete('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        console.log(id)
        const index = movies.findIndex(m => m.id === id)
        movies.splice(index, 1)
        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(movies, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err);
            }

            return res.json('movie has been successfully deleted.')
        })
    })

    server.patch('/api/v1/movies/:id', (req, res) => {
        const movie = req.body;
        const { id } = req.params;
        const index = movies.findIndex(m => m.id === id)
        let updatedMovies = movies;
        updatedMovies[index] = movie;
        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(updatedMovies, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err);
            }

            return res.json('movie has been successfully modified.')
        })
    })

    // we are handling all of the request comming to our server
    server.get('*', (req, res) => {
        // next.js is handling requests and providing pages where we are navigating to
        return handle(req, res)
    })


    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on port ' + PORT)
    })
})