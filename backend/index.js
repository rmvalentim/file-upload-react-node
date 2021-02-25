const express = require('express');
const app = express();
const cors = require('cors');
const upload = require('express-fileupload');

app.use(cors());

app.use(upload());

app.get('/', (req, res) => {
    res.send('File Upload');
});

app.post('/upload', (req, res) => {
    if(req.files) {
        const file = req.files.file;
       
        const fileName = file.name;

        file.mv('./uploads/' + fileName, (error) => {
            if(error) {
                res.send(error);
            } else {
                res.send('File uploaded sucessful');
            }
        });      

    }
});

app.listen(3001, () => {
    console.log('Server listen on PORT 3001');
});