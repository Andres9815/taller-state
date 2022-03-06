import React from 'react';

export default class Form extends React.PureComponent {
    initialState ={
        name: '',
        job: '',

    };

    state = this.initialState;

    handleChange = event => {
        const { name,value}  = event.target;
        this.setState({
            [name]: value,
        });

    
    };

    handleSubmit = e => {
        e.preventDefault(); // this helps the behavior of the form and prevent if from refresh. 
        this.props.addCharacter(this.state);
    };
    
    render () {
        const {name, job} =this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" onChange={this.handleChange}/>

                <label htmlFor="job">Job</label>
                <input id="job" type="text" name="job" onChange={this.handleChange}/>

                <input type="submit" value="Save" />



            </form>
        );
    }
}
