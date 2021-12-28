import { useState, useEffect } from 'react';
import { Input, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../Redux/actions/Actions';

import InfiniteScroll from 'react-infinite-scroll-component';

import Article from './Article';

const useStyles = makeStyles(theme => ({
	search: {
		'&::placeholder': {
			fontStyle: 'italic',
			color: 'red',
			textAlign: 'center',
		},
		width: 200,
		margin: 'auto',
		marginBottom: '5rem',
		position: 'sticky',
	},
}));

const Articles = ({ searchFilter }) => {
	const classes = useStyles();
	const home = useSelector(state => state.home);
	const newsList = home.newsList?.articles;

	const [Filter, setFilter] = useState('');

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getNews());
	}, []);

	return (
		<>
			<center>
				<Input
					placeholder='Search News here....'
					name='searchvalue'
					onChange={e => setFilter(e.target.value)}
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
					className={classes.search}
				/>
			</center>
			{console.log('this is the filter value', Filter)}
			<InfiniteScroll dataLength={6} hasMore={true}>
				{newsList &&
					newsList
						?.filter(value =>
							value.title.toLowerCase().includes(Filter.toLowerCase())
						)
						.map(article => <Article article={article} />)}
			</InfiniteScroll>
		</>
	);
};

export default Articles;
