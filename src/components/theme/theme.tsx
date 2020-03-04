import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { dark, light } from '../../themes/theme';

export const ThemeWrapper: React.FC = ({ children }: any) => {
    const theme = useSelector((state: RootStore) => state.theme);

    return <ThemeProvider theme={theme === 'dark' ? dark : light}>{children}</ThemeProvider>;
};
