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
