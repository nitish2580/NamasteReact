import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            roll: 198,
            count:0
        }
    }
    render(){
        const {count,roll}=this.state;
        return (<div>
            <h1>Profile Component</h1>
                <h2>{roll}</h2>
            </div>
        )
    }
}
export default Profile;