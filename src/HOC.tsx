import { Component } from 'react';

const initialState = {
    message: 'this is using an HOC.',
    name: 'Amanda'
};

  // define types of state variables
interface IState {
    message: string,
    name: string
}

const messageHoc = (WrappedComponent: any): any => {
    class HOC extends Component<{}, IState> {
        readonly state: IState = initialState;

        render() {
            return (
                <WrappedComponent message={this.state.message} name={this.state.name} />
            )
        }
    }

    return HOC;
}

export default messageHoc;