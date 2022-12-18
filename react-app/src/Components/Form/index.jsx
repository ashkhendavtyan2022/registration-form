import React from "react";
import "./style.css"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameField: '',
            passField: '',
            confPassField: '',
            emailField: '',
            numberField: '',
           
            error: {
                nameError: '',
                passError: '',
                confPassError: '',
                emailError: '',
                numberError: '',
            },

            /*
            pName: {
                msg: "This Field is Required!",
                active: true
            },
            pPass: {
                msg: "This Field is Required!",
                active: true
            },
            pConfPass: {
                msg: "This Field is Required!",
                active: true
            },
            pEmail: {
                msg: "This Field is Required!",
                active: true
            },
            pNumber: {
                msg: "This Field is Required!",
                active: true
            }, 
            */
        }

        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }



    // handleName = (e) => {
    //     this.setState({[e.target.name]: e.target.value}) 
    // }

    // handlePass = (e) => {
    //     this.setState({passField: e.target.value})
    // }

    // handleConfPass = (e) => {
    //     this.setState({confPassField: e.target.value})
    // }
    
    // handleEmail = (e) => {
    //     this.setState({emailField: e.target.value})
    // }

    // handleNumber = (e) => {
    //     this.setState({numberField: e.target.value})
    // }

    /*
    handleRegister =  () => {
        if(this.state.nameField === null) {
            this.setState({pName: {...this.state.pName, active: false} })
        } else {
            this.setState({pName: {...this.state.pName, active: true} })
        }

        if(this.state.passField === null) {
            this.setState({pPass: {...this.state.pPass, active: false}})
        } else {
            this.setState({pPass: {...this.state.pPass, active: true}})
        }

        if(this.state.confPassField === null) {
            this.setState({pConfPass: {...this.state.pConfPass, active: false}})
        } else {
            if(this.state.confPassField === this.state.passField) {
                this.setState({pConfPass: {...this.state.pConfPass, active: true}})
            } else {
                this.setState({pConfPass: {...this.state.pConfPass, msg: "Passwords Are Not The Same"}})
            }
        }

        if(this.state.emailField === null) {
            this.setState({pEmail: {...this.state.pEmail, active: false}})
        } else {
            this.setState({pEmail: {...this.state.pEmail, active: true}})
        }

        if(this.state.numberField === null) {
            this.setState({pNumber: {...this.state.pNumber, active: false}})
        } else {
            this.setState({pNumber: {...this.state.pNumber, active: true}})
        }
    }
    */

    Validation = ()=>{
        let valid = true
        const error = {
            nameError: '',
            passError: '',
            confPassError: '',
            emailError: '',
            numberError: '',
        }
        if(!this.state.nameField){
            error.nameError = "This Field is Required!"
            valid = false
        } else {
            error.nameError = ""
        }

        if(!this.state.passField){
            error.passError = "This Field is Required!"
            valid = false
        } else {
            error.passError = ""
        }

        if(!this.state.confPassField){
            error.confPassError = "This Field is Required!"
            valid = false
        }else {
            error.confPassError = ""
        }

        if(this.state.passField !== this.state.confPassField){
            error.confPassError = "Passwords are not the same!"
            valid = false
        }

        if(!this.state.emailField){
            error.emailError = "This Field is Required!"
            valid = false
        }else {
            error.emailError = ""
        }

        if(!this.state.numberField){
            error.numberError = "The Field is Required!"
            valid = false
        }else {
            error.numberError = ""
        }
        
        if(!valid){
            this.setState({...this.state.error, error: error})
        } 

        if(valid) {
            this.setState({
                nameField: '',
                passField: '',
                confPassField: '',
                emailField: '',
                numberField: '',
            })
        }

        return valid
    }
   
    

    render () {

        return (
            <div>
                <form className="regForm">
                    <h1 className="form-heading">Registration Form</h1>

                    <input 
                        className={`${this.state.error.nameError ? "red-input" : null} form-input`} 
                        type="text" name="nameField" 
                        placeholder="Name" 
                        value={this.state.nameField}
                        onChange={this.handleChange}/>

                    <p className={`${!this.state.error.nameError ? "opacity" : ""} err-msg`}>
                        {this.state.error.nameError}
                    </p>

                    <input 
                        className={`${this.state.error.nameError ? "red-input" : null} form-input`} 
                        type="password" 
                        name="passField" 
                        placeholder="Password" 
                        value={this.state.passField}
                        onChange={this.handleChange}/>

                    <p className={`${!this.state.error.passError? "opacity" : ""} err-msg`}>
                        {this.state.error.passError}
                    </p>
                    
                    <input 
                        className={`${this.state.error.nameError ? "red-input" : null} form-input`} 
                        type="password" 
                        name="confPassField" 
                        placeholder="Confirm Password"
                        value={this.state.confPassField} 
                        onChange={this.handleChange}/>

                    <p className={`${!this.state.error.confPassError ? "opacity" : ""} err-msg`}>
                        {this.state.error.confPassError}
                    </p>

                    <input 
                        className={`${this.state.error.nameError ? "red-input" : null} form-input`} 
                        type="email" 
                        name="emailField" 
                        placeholder="Email" 
                        value={this.state.emailField} 
                        onChange={this.handleChange}/>

                    <p className={`${!this.state.error.emailError ? "opacity" : ""} err-msg`}>
                        {this.state.error.emailError }
                    </p>

                    <input 
                        className={`${this.state.error.nameError ? "red-input" : null} form-input`} 
                        type="number" 
                        name="numberField" 
                        placeholder="Number"
                        value={this.state.numberField}  
                        onChange={this.handleChange}/>

                    <p className={`${!this.state.error.numberError ? "opacity" : ""} err-msg`}>
                        {this.state.error.numberError}
                    </p>

                    <button className="form-input" type="button" onClick={this.Validation}>Register</button>
                </form>
            </div>
        )
    }

    
}

export default Form