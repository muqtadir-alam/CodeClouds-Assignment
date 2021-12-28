import { Box, makeStyles } from '@material-ui/core';

import Header from './components/Header';

import Articles from './components/Articles';
import { useState } from 'react';
import CtegoryHeader from './components/CategoryHeader';
const useStyles = makeStyles(theme => ({
	container: {
		marginTop: 80,
		width: '59%',
		margin: '0 auto',
		[theme.breakpoints.down('md')]: {
			width: '75%',
		},
		[theme.breakpoints.down('sm')]: {
			width: '85%',
		},
	},
}));

function App() {
	const [searchFilter, setsearchFilter] = useState('');
	const classes = useStyles();

	return (
		<Box>
			<Header />
			<Box className={classes.container}>
				<CtegoryHeader setsearchFilter={setsearchFilter} />
				<Articles searchFilter={searchFilter} />
			</Box>
		</Box>
	);
}

export default App;
