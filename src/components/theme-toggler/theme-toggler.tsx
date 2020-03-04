import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../reducers/actions';
import { Label, Input } from './styled';

export const ThemeToggler = () => {
    const currentTheme = 'light';

    const dispatch = useDispatch();

    const onChangeTheme = ({ target }: any) => {
        dispatch(changeTheme(target.checked ? 'dark' : 'light'));
    };

    return (
        <div>
            <Input
                id={`react-switch-new`}
                type='checkbox'
                onChange={onChangeTheme}
                defaultChecked={currentTheme === 'light' ? true : false}
            />
            <Label htmlFor={`react-switch-new`}>
                <span className={`react-switch-button`} />
            </Label>
        </div>
    );
};
