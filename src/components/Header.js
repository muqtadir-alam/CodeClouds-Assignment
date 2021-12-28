import { useState, useEffect } from 'react';
import { getNews, getFilterNews } from '../Redux/actions/Actions';
import { useDispatch } from 'react-redux';
import { useCurrentPosition } from 'react-use-geolocation';

import {
	AppBar,
	Toolbar,
	makeStyles,
	Box,
	FormControl,
	InputLabel,
	NativeSelect,
} from '@material-ui/core';

const useStyles = makeStyles({
	header: {
		background: '#fff',
		height: 70,
		display: 'flex',
	},
	menu: {
		color: '#000',
	},
	image: {
		height: 55,
		marginLeft: '1rem',
		paddingRight: 70,
	},

	search: {
		'&::placeholder': {
			fontStyle: 'italic',
			color: 'red',
		},
	},
	select: {
		width: 300,
	},
	location: {
		position: 'fixed',
		color: 'blue',
		right: '2rem',
		cursor: 'pointer',
		marginBottom: '2rem',
	},
});

const Header = () => {
	const [Value, setValue] = useState('in');

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('this is the api search value', Value);
		dispatch(getNews(Value));
	}, [Value]);

	const classes = useStyles();
	const url =
		'https://cdn5.vectorstock.com/i/1000x1000/82/99/breaking-news-logo-template-vector-20608299.jpg';

	const [position, error] = useCurrentPosition();

	if (!position && !error) {
		return <p>Waiting...</p>;
	}

	if (error) {
		// return <p>{error.message}</p>;
	}

	const localNews = position => {
		dispatch(getFilterNews('delhi'));
		console.log(position);
	};

	return (
		<AppBar className={classes.header}>
			<Toolbar>
				<img src={url} alt='logo' className={classes.image} />

				<Box className={classes.select}>
					<FormControl fullWidth>
						<InputLabel variant='standard' htmlFor='uncontrolled-native'>
							Select Country
						</InputLabel>
						<NativeSelect
							onChange={e => setValue(e.target.value)}
							defaultValue={30}
							inputProps={{
								name: 'Select country',
								id: 'uncontrolled-native',
							}}>
							<option value='in'>india</option>
							<option value='ca'>Canada</option>
							<option value='au'>Australia</option>
							<option value='us'>United state</option>
						</NativeSelect>
					</FormControl>
				</Box>
				<Toolbar className={classes.location}>
					<p onClick={() => localNews(position)}>Area News</p>
				</Toolbar>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
