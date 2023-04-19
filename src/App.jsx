import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				UMNG
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#158f00',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(5),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	formControl: {
		margin: theme.spacing(2),
		minWidth: 10,
		maxWidth: 150,
		display: 'flex',
	},
	formControlF: {
		margin: theme.spacing(2),
		minWidth: 10,
		maxWidth: 200,
		display: 'flex',
	},
}));

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#158f00',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#158f00',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'white',
			},
			'&:hover fieldset': {
				borderColor: '#6d8c68',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
			},
		},
	},
})(TextField);

const RoutineButton = withStyles({
	root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 17,
		padding: '6px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: '#158f00',
		borderColor: '#0f5e01',
		fontFamily: ['"Segoe UI"', 'Roboto'].join(','),
		'&:hover': {
			backgroundColor: '#3dba27',
			borderColor: '#fff',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
			borderColor: '#005cbf',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
		marginTop: 30,
		marginBottom: 60,
	},
})(Button);

export default function SignInSide() {
	const classes = useStyles();

	const [setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={5} className={classes.image} />
			<Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<FitnessCenterIcon backgroundColor="green" />
					</Avatar>
					<Typography component="h1" variant="h3">
						Bienvenido a Dev routines
					</Typography>
					<form className={classes.form} noValidate>
						<CssTextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="Nombre"
							label="Ingresa tu nombre"
							name="name"
							autoComplete="name"
							autoFocus
						/>
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-simple-select-label">Edad</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								display="block"
								defaultValue=""
								onChange={handleChange}
							>
								<MenuItem value={1}>15 - 25 años</MenuItem>
								<MenuItem value={2}>26 - 45 años</MenuItem>
								<MenuItem value={3}>+ 45 años</MenuItem>
							</Select>
						</FormControl>

						<FormControl className={classes.formControl}>
							<InputLabel id="demo-simple-select-label">Sexo</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								display="block"
								defaultValue=""
								onChange={handleChange}
								color="#158f00"
							>
								<MenuItem value={1}>Masculino</MenuItem>
								<MenuItem value={2}>Femenino</MenuItem>
								<MenuItem value={3}>Otro</MenuItem>
							</Select>
						</FormControl>
						<CssTextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="weight"
							label="Peso (kg)"
							type="weight"
							id="weight"
							autoComplete="false"
						/>
						<CssTextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="height"
							label="Estatura (m)"
							type="height"
							id="height"
							autoComplete="false"
						/>
						<FormControl className={classes.formControlF}>
							<InputLabel id="demo-simple-select-label">
								¿Cual es tu objetivo?
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								display="block"
								defaultValue=""
								onChange={handleChange}
								color="#158f00"
							>
								<MenuItem value={1}>Ganar masa muscular</MenuItem>
								<MenuItem value={2}>Perder peso</MenuItem>
								<MenuItem value={3}>Ganar resistencia</MenuItem>
							</Select>
						</FormControl>
						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
						<RoutineButton
							variant="contained"
							color="primary"
							fullWidth
							disableRipple
							className={classes.margin}
						>
							Generar Rutina
						</RoutineButton>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
