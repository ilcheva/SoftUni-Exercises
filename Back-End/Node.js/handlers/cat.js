const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const cats = require('../data/cats');
const breeds = require('../data/breeds');
let globalPath = __dirname.toString().replace('handlers', '');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addCat.html'))
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('Page Not Found');
                res.end();
                return;
            }
            let catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.write(modifiedData);
            res.end();
        })

    } else if (pathname === '/cats/add-breed' && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('Page Not Found');
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.write(data);
            res.end();
        })


    } else if (pathname === '/cats/add-breed' && req.method == 'POST') {
        let formData = '';
        req.on('data', (data) => {
            formData += data;
        })
        req.on('end', () => {
            let body = qs.parse(formData);
            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) {
                    return err;
                }
                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let json = JSON.stringify(breeds);

                fs.writeFile('./data/breeds.json', json, 'utf-8', (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('The breed was uploaded successfully')
                })

            })
            res.writeHead(301, { 'location': '/' })
            res.end()
        })
    } else if (pathname === '/cats/add-cat' && req.method == 'POST') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log('err in parse');

                throw err;
            }
            form.uploadDir='tmp';


            let oldPath = files.upload.path;
            let newPath = path.normalize(path.join(globalPath, '/content/images/' + files.upload.name))

            fs.rename(files.upload.path, newPath, (err) => {
                if (err) {
                    console.log('err in rename');
                    throw err;
                }
                console.log('The file was uploaded successfully');

            });
            fs.readFile('./data/cats.json', 'utf8', (err, data) => {
                if (err) {
                    console.log('err in reading');
                    throw err;
                }

                let allCats = JSON.parse(data);
                allCats.push({ id: (cats.length + 1).toString(), ...fields, image: files.upload.name })
                let json = JSON.stringify(allCats);

                fs.writeFile('./data/cats.json', json, (err) => {
                    if (err) {
                        console.log('err in writing');
                        throw err;
                    }
                    console.log('Cat succsessfully added');

                })
            })
            res.writeHead(301, { 'location': '/' })
            res.end()
        })
    }

    else {
        return true;
    }
}