type PrivateRoutePropsT = {
    path: string;
    predicate: (args: any) => boolean;
    valueToBeChecked: any;
    SuccessRoute: any;
    FailureRoute: any;
};

type PrivateRoutePropsT2 = {
    children: any;
    predicate: (args: any) => boolean;
    valueToBeChecked: any;
    redirectPath: any;
    rest?: any;
    path: any;
};

// export const PrivateRouter2 = ({
//     children, ...rest, predicate,
//     valueToBeChecked
// }) => {
//     return (
//         <Route {...rest}
//             render={({location}) => predicate(valueToBeChecked) ? children : <Redirect to={redirectPath}/> }
//         />
//     )
// }
