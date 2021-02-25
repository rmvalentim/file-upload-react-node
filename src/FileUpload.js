import React, { useState } from 'react';
import { Button, Typography, Collapse } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';


const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [alert, setAlert] = useState({
        display: false
    });

    const handleCloseAlert = () => {
        setAlert({
            display: false
        });
    }

    return (
    <>
 
        <Button
            variant="contained"
            component="label"
            >
            Selecionar arquivo
            <input
                type="file"
                hidden
                onChange={(event) => {
                    setSelectedFile(event.target.files[0]);
                }} 
            />
        </Button>
        <Typography>{selectedFile ? 'Arquivo selecionado: ' + selectedFile.name : ''}</Typography>
        <br />
        <Button
            variant="contained" 
            color="primary"
            disabled={selectedFile ? false : true}
            onClick={(event) => {
                const fd = new FormData();
                fd.append('file', selectedFile, selectedFile.name);
                axios.post('http://localhost:3001/upload', fd)
                    .then((res) => {
                        setAlert({
                            display: true,
                            severity: 'success',
                            message: 'Upload realizado com sucesso!'
                        });
                        setSelectedFile(null);
                    }).catch((error) => {
                        setAlert({
                            display: true,
                            severity: 'error',
                            message: 'Falha no upload de arquivo!'
                        });
                        setSelectedFile(null);
                    })
            }}
        >
            Enviar
        </Button>
        <br />
        <br />
        <Collapse in={alert.display}>
            <Alert 
                severity={alert.severity}
                hidden
                onClose={handleCloseAlert}
            >
                {alert.message}
            </Alert>
        </Collapse>
    </>
    );
}

export default FileUpload;