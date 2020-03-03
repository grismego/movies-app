import React from 'react';
import { useSelector } from 'react-redux';
import { selectDesiredMovies } from '../../reducers/selectors';

import { Spinner } from '../spinner/spinner';
import { POSTER_PATH } from '../../constants';

import { List, Title, Img, ListItem, ImgWrapper, ContentWrapper } from './styled';

export const MovieItemPage = (props: any) => {
    const { id } = props.match.params;
    const allMovies = useSelector(selectDesiredMovies);
    const movie = allMovies.find(movie => movie.id === Number(id)) as MovieItem;

    return movie ? (
        <div className='clearfix'>
            <ImgWrapper>
                <Img src={`${POSTER_PATH}${movie.poster_path}`} alt='' width='526' height='789'></Img>
            </ImgWrapper>
            <ContentWrapper>
                <Title>{movie.title}</Title>
                <div>
                    <List>
                        <ListItem>{movie.genres.join(', ')}</ListItem>
                        <ListItem>Director: {movie.director}</ListItem>
                        <ListItem>Revenue: ${movie.revenue}</ListItem>
                        <ListItem>Release date: {movie.release_date}</ListItem>
                    </List>
                </div>
                <div>
                    <p>{movie.overview}</p>
                </div>
            </ContentWrapper>
        </div>
    ) : (
        <Spinner />
    );
};
