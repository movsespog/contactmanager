import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
        case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Smith',
                email: 'johnsmith@gmail.com',
                phone: '555-555-555'
            },
            {
                id: 2,
                name: 'Alex Smith',
                email: 'alexsmith@gmail.com',
                phone: '666-666-666'
            },
            {
                id: 3,
                name: 'Bob Smith',
                email: 'bobsmith@gmail.com',
                phone: '777-777-777'
            }
        ],
    dispatch: action => {
        this.setState(state => reducer(state, action))
    }    
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;