import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props =>{
    return (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substr(0,10)}</td>
        <td>{<Link to={"/edit/"+props.exercise._id}>Edit</Link>} | 
            {<Link to='/' 
                   onClick={()=>props.deleteExercise(props.exercise._id)}>
            Delete
            </Link>}
        </td>
    </tr>
    )
}
export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.createExercise = this.createExercise.bind(this);
        
        // This block was used for testing , with a simple data

        // this.state = {exercises: [{
        //     _id : "6fe45jsms3",
        //     username: "dibas",
        //     description : "walk",
        //     duration: 50,
        //     date : new Date()
        // }]};

        //This is the one with empty array as defualt value
        this.state = {exercises : []};
    }


    componentDidMount() {
         axios.get('http://localhost:5000/exercises/')
         .then(response => {
            // console.log(response.data)
            // console.log(this.exercises);
            this.setState({ exercises: [...response.data] })
         })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise(id){
        // console.log(id);
        axios.delete("http://localhost:5000/exercises/"+id)
          .then(res => {
            console.log(res.data);
            this.setState({exercises : this.state.exercises.filter(
                key => key._id !== id
            )});
          })
          .catch(err => console.error(err));
    }

    createExercise(ex){
        return <Exercise deleteExercise={this.deleteExercise} exercise={ex} key={ex._id}/>
    }
    render() {
        return (
            <div>
                <h1>All Exercises</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.exercises.map(exercise => 
                               //console.log(exercise);
                                (<Exercise deleteExercise={this.deleteExercise} exercise={exercise} key={exercise._id}/>)
                                //this.createExercise(exercise)
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
