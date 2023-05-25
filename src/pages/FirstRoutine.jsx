import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
	image: {
		width: '100%',
		height: 'auto',
		marginBottom: theme.spacing(1),
	},
	description: {
		textAlign: 'center',
	},
}));

const FirstScreen = () => {
	const classes = useStyles();
	const [selectedImage1, setSelectedImage1] = useState('');
	const [selectedImage2, setSelectedImage2] = useState('');
	const [selectedImage3, setSelectedImage3] = useState('');
	var routinesResult = 3;

	useEffect(() => {
		if (routinesResult === 1) {
			setSelectedImage1(
				'https://images.unsplash.com/photo-1603503364272-6e28e046b37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
			);
			setSelectedImage2(
				'https://images.unsplash.com/photo-1637712901929-a30440e1bb28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
			);
			setSelectedImage3(
				'https://images.unsplash.com/photo-1590771998996-8589ec9b5ac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
			);
		} else if (routinesResult === 2) {
			setSelectedImage1(
				'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80'
			);
			setSelectedImage2(
				'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
			);
			setSelectedImage3(
				'https://images.unsplash.com/photo-1599577478756-8e795341c32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhY2slMjBneW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
			);
		} else {
			setSelectedImage1(
				'https://images.unsplash.com/photo-1603394595873-62d990afa49a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'
			);
			setSelectedImage2(
				'https://images.unsplash.com/photo-1605640107219-93fdd6e33e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
			);
			setSelectedImage3(
				'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
			);
		}
	}, [routinesResult]);

	return (
		<div className={classes.root}>
			<Typography variant="h4" component="h1" className={classes.title}>
				Tu rutina ideal es...
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Paper elevation={3}>
						<img
							src={selectedImage1}
							alt="Imagen 1"
							className={classes.image}
						/>
						<Typography variant="subtitle1" className={classes.description}>
							{routinesResult === 1
								? 'Push-Ups con Mancuerna 12 reps X 4 series'
								: routinesResult === 2
								? 'Press de pierna 8 reps X 5 series'
								: 'Saltar la cuerda 15 minutos X 3 reps'}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Paper elevation={3}>
						<img
							src={selectedImage2}
							alt="Imagen 2"
							className={classes.image}
						/>
						<Typography variant="subtitle1" className={classes.description}>
							{routinesResult === 1
								? 'Caminadora 30 minutos'
								: routinesResult === 2
								? 'Pull-ups 10 reps X 4 series'
								: 'Press de banca inclinado 12 reps X 4 series'}
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Paper elevation={3}>
						<img
							src={selectedImage3}
							alt="Imagen 3"
							className={classes.image}
						/>
						<Typography variant="subtitle1" className={classes.description}>
							{routinesResult === 1
								? 'Sentadilla 12 reps X 4 series'
								: routinesResult === 2
								? 'Extención de tricep 20 reps X 3 series'
								: 'Press de banca plano 8 reps X 4 series'}
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default FirstScreen;
