import { Box, makeStyles, Typography } from '@material-ui/core';

import { getFilterNews } from '../Redux/actions/Actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
	container: {
		background: '#728FCE',
		color: '#FFFFFF',
		display: 'flex',
		alignItems: 'center',
		height: 48,
		marginBottom: 30,
		[theme.breakpoints.down('md')]: {
			height: 100,
		},
	},
	logo: {
		height: 34,
		'&:last-child': {
			margin: '0 50px 0 20px',
		},
	},
	text: {
		fontSize: 14,
		fontWeight: 300,
		marginLeft: 20,
		padding: '2px',

		justifyContent: 'space-between',
		fontFamily: "'Roboto',sans-serif",
	},
	newsOption: {
		margin: '2px',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		cursor: ' pointer',
	},
}));

const CtegoryHeader = setsearchFilter => {
	const classes = useStyles();

	const articleCategory = [
		{ name: 'Regional articles', value: 'resign' },
		{ name: 'national articles', value: 'national' },
		{ name: 'international articles', value: 'international' },
		{ name: 'entertainment articles', value: 'entertainment' },
		{ name: 'sports articles', value: 'sports' },
	];

	const dispatch = useDispatch();

	const ArticleFilter = value => {
		dispatch(getFilterNews(value));
		// setsearchFilter(value);
	};

	return (
		<>
			<Box className={classes.container}>
				<Typography className={classes.text}>
					{articleCategory.map(item => (
						<button
							onClick={() => ArticleFilter(item.value)}
							className={classes.newsOption}>
							<b>{item.name} </b>
						</button>
					))}
				</Typography>
			</Box>
		</>
	);
};

export default CtegoryHeader;
