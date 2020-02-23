type PrivateRoutePropsT = {
    path: string;
    predicate: (args: any) => boolean;
    valueToBeChecked: any;
    SuccessRoute: any;
    FailureRoute: any;
};
