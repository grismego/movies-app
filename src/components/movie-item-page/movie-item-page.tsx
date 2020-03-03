import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDesiredMovies } from '../../reducers/selectors';

import { Spinner } from '../spinner/spinner';
import { POSTER_PATH } from '../../constants';
import { selectedUser } from '../../reducers/selectors';
import { addingLike, removingLike } from '../../reducers/actions';
import { List, Title, Img, ListItem, ImgWrapper, ContentWrapper, Description } from './styled';
import { ButtonElem } from '../button/button';

export const MovieItemPage = (props: any) => {
    const { id } = props.match.params;
    const allMovies = useSelector(selectDesiredMovies);
    const movie = allMovies.find(movie => movie.id === Number(id)) as MovieItem;

    const dispatch = useDispatch();
    const user = useSelector(selectedUser);

    const changeFavorite = useCallback(
        (movie: any) => {
            user.likes.indexOf(movie.id) >= 0 ? dispatch(removingLike(movie.id)) : dispatch(addingLike(movie.id));
        },
        [user.likes]
    );

    return movie ? (
        <div className='clearfix'>
            <ImgWrapper>
                <Img src={`${POSTER_PATH}${movie.poster_path}`} alt='' width='526' height='789'></Img>
            </ImgWrapper>
            <ContentWrapper>
                <Title>{movie.title}</Title>
                <div>
                    <ButtonElem onClick={() => changeFavorite(movie)}>
                        {user.likes && user.likes.indexOf(movie.id) >= 0 ? `Remove from favorites` : `Add to Favorites`}
                    </ButtonElem>
                </div>
                <div>
                    <List>
                        <ListItem>{movie.genres.join(', ')}</ListItem>
                        <ListItem>Director: {movie.director}</ListItem>
                        <ListItem>Revenue: ${movie.revenue}</ListItem>
                        <ListItem>Release date: {movie.release_date}</ListItem>
                    </List>
                </div>
                <div>
                    <Description>{movie.overview}</Description>
                </div>
            </ContentWrapper>
        </div>
    ) : (
        <Spinner />
    );
};
