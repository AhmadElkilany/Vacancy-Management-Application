import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import Calendar from "react-calendar";

export default class CreateMember extends Component {
    constructor(props){
        super(props)

        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangeMail=this.onChangeMail.bind(this);
        this.onChangeDateOfBirth=this.onChangeDateOfBirth.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeSkills=this.onChangeSkills.bind(this)
        // this.onChangeSkill2=this.onChangeSkill2.bind(this)
        // this.onChangeSkill3=this.onChangeSkill3.bind(this)
        // this.onChangeSkill4=this.onChangeSkill4.bind(this)
        this.onChangeInterests=this.onChangeInterests.bind(this)
        // this.onChangeInterest2=this.onChangeInterest2.bind(this)
        // this.onChangeInterest3=this.onChangeInterest3.bind(this)
        // this.onChangeInterest4=this.onChangeInterest4.bind(this)
        this.onChangeResidence=this.onChangeResidence.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            firstName:"",
            lastName:"",
            email:"",
            dateOfBirth: new Date(),
            password:"",
            skills:"",
            // skill1:'',
            // skill2:'',
            // skill3:'',
            // skill4:'',
            interests:"",
            // interest1:'',
            // interest2:'',
            // interest3:'',
            // interest4:'',
            placeOfResidence:""

        };
    }
    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    };
    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        })
    };
    onChangeMail(e){
        this.setState({
            email: e.target.value
        })
    };
    onChangeDateOfBirth = date => {
        this.setState({ dateOfBirth: date });
        console.log(this.state.dateOfBirth);
      };
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    };
    onChangeSkills(e){
        this.setState({
            skills:e.target.value,
            //skills:this.state.skills.concat([e.target.value])
        })
    }
    // onChangeSkill2(e){
    //     this.setState({
    //         skill2:e.target.value,
    //         //skills:this.state.skills.concat([e.target.value])
    //     })
    // }
    // onChangeSkill3(e){
    //     this.setState({
    //         skill3:e.target.value,
    //         //skills:this.state.skills.concat([e.target.value])
    //     })
    // }
    // onChangeSkill4(e){
    //     this.setState({
    //         skill4:e.target.value,
    //         //skills:this.state.skills.concat([e.target.value])
    //     })
    // }
    onChangeInterests(e){
        this.setState({
            interests:e.target.value,
            //interests:this.state.interests.concat([e.target.value])
        })
    }
    // onChangeInterest2(e){
    //     this.setState({
    //         interest2:e.target.value,
    //         //interests:this.state.interests.concat([e.target.value])
    //     })
    // }
    // onChangeInterest3(e){
    //     this.setState({
    //         interest3:e.target.value,
    //        // interests:this.state.interests.concat([e.target.value])
    //     })
    // }
    // onChangeInterest4(e){
    //     this.setState({
    //         interest4:e.target.value,
    //         //interests:this.state.interests.concat([e.target.value])
    //     })
    // }
    onChangeResidence(e){
        this.setState({
            placeOfResidence:e.target.value
        })
    };
    onSubmit(e){
        e.preventDefault()
        //const allSkills = [this.state.skill1,this.state.skill2,this.state.skill3,this.state.skill4]
        //const allInterests = [this.state.interest1,this.state.interest2,this.interest3,this.state.interest4]
        const obj = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            dateOfBirth:this.state.dateOfBirth,
            password:this.state.password,
            skills:this.state.skills,
            interests:this.state.interests,
            placeOfResidence:this.state.placeOfResidence
        };
        console.log(this.state);
        axios.post("http://localhost:4000/api/member/",{
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            dateOfBirth:this.state.dateOfBirth,
            password:this.state.password,
            skills:this.state.skills,
            interests:this.state.interests,
            placeOfResidence:this.state.placeOfResidence
        },{
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        });

        

        

        // this.setState({
        //     firstName:'',
        //     lastName:'',
        //     email:'',
        //     dateOfBirth: new Date(),
        //     password:'',
        //     // skills:[],
        //     // skill1:'',
        //     // skill2:'',
        //     // skill3:'',
        //     // skill4:'',
        //     // interests:[],
        //     // interest1:'',
        //     // interest2:'',
        //     // interest3:'',
        //     // interest4:'',
        //     placeOfResidence:''
        // })
    }
    clickMe()
    {
       window.parent.location = window.parent.location.href;
    }

    render() {
        return (
            <div style={{marginTop:10}}>
                <h3>Create Member Profile</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                                />
                    </div>
                    <div className="form-group">
                        <label>E-Mail: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeMail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date Of Birth: </label>
                        <Calendar
                            value={this.state.dateOfBirth}
                            onChange={this.onChangeDateOfBirth}
                        />
                    </div>
                    <div className="form-group">
                        <label>Place Of Residence: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.placeOfResidence}
                                onChange={this.onChangeResidence}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>Skills: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skills}
                                onChange={this.onChangeSkills}
                                />
                    </div>
                    {/* <div className="form-group">
                        <label>Skill 2: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill2}
                                onChange={this.onChangeSkill2}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skill 3: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill3}
                                onChange={this.onChangeSkill3}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skill 4: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill4}
                                onChange={this.onChangeSkill4}
                                />
                    </div> */}
                    <div className="form-group">
                        <label>Interests: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interests}
                                onChange={this.onChangeInterests}
                                />
                    </div>
                    {/* <div className="form-group">
                        <label>Interest 2: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest2}
                                onChange={this.onChangeInterest2}
                                />
                    </div>
                    <div className="form-group">
                        <label>Interest 3: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest3}
                                onChange={this.onChangeInterest3}
                                />
                    </div>
                    <div className="form-group">
                        <label>Interest 4: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest4}
                                onChange={this.onChangeInterest4}
                                />
                    </div> */}
                    

                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" onClick ={this.clickMe.bind(this)}/>
                    </div>
                </form>
            </div>
        )
    }
}
ReactDOM.render(
    <CreateMember subreddit='reactjs' />,
      document.getElementById('root')
  )