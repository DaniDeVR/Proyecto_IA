import React from 'react';
import { Button, Container, Typography, TextField } from '@material-ui/core';

export default function App() {
	return (
		<Container fixed>
			<Typography variant="h1" gutterBottom>
				Bienvenido a Dev Routines
			</Typography>
			<form className="form" noValidate autoComplete="off">
				<Typography>Ingresa tu Sexo</Typography>
				<TextField
					id="standard-secondary"
					label="Standard secondary"
					color="secondary"
				/>
				<Typography>Ingresa tu peso</Typography>
				<TextField
					id="standard-secondary"
					label="Standard secondary"
					color="secondary"
				/>
				<Typography>Ingresa tu altura</Typography>
				<TextField
					id="standard-secondary"
					label="Standard secondary"
					color="secondary"
				/>
			</form>
			<Button variant="outlined" color="primary">
				Generar Rutina
			</Button>
		</Container>
	);
}
