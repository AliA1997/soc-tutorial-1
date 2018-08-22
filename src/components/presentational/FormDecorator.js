import { withHandlers, compose } from "recompose";

//import withHandlers from recompose to create a HOC that will define yoru props .
const decorator = withHandlers({
    ///Returns a closure then has a function declaration
    handleUsername: ({handleUsername}) => e => {
        handleUsername(e.target.value);
    },
    ///Returns a closure then has a function declaration
    handleEmail: ({handleEmail}) => e => {
        handleEmail(e.target.value);
    },
    ///Returns a closure then has a function declaration
    handlePassword: ({handlePassword}) => e => {
        handlePassword(e.target.value);
    },
    ///Returns a closure then has a function declaration
    onClick: ({register}) => e => {
        register();
    }
});

//Export the decorator 
export default decorator;
//Can also do this 
// export default compose(
//     withHandlers
// )