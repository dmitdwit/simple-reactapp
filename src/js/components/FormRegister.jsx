import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Col, Button, Checkbox, ControlLabel, Radio } from 'react-bootstrap'

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name    : '',
            email   : '',
            password: '',
            confirmPassword : '',
            address : '',
            gender  : '',
            agreement: false,

            nameFeedback    : null,
            emailFeedback   : null,
            passwordFeedback : null,
            confirmPasswordFeedback : null,
            addressFeedback : null,
            genderFeedback  : null,
            agreementFeedback : null,
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeAgreement = this.handleChangeAgreement.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChangeName(e) {
        this.setState({name : e.target.value});
        let name = e.target.value
        const pattern = new RegExp('^[a-zA-Z ]*$')
        let isAlphabet = pattern.test(name)

        if (isAlphabet && name.length > 3) this.setState({nameFeedback : 'success'});
        else this.setState({nameFeedback : 'error'})
    }

    handleChangeEmail(e) {
        this.setState({email : e.target.value});
        let email = e.target.value
        const pattern = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
        let isEmail = pattern.test(email)

        if (isEmail && email.length > 3) this.setState({emailFeedback : 'success'});
        else this.setState({emailFeedback : 'error'})
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
        let password = e.target.value;
        const pattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        let isAlphanum =  pattern.test(password)
        
        if(isAlphanum && password.length > 6) this.setState({passwordFeedback : 'success'});
        else this.setState({passwordFeedback : 'error'})
    }

    handleChangeConfirmPassword(e){
        this.setState({confirmPassword : e.target.value});
        let confirmPassword = e.target.value
        let password = this.state.password
        
        if(password === confirmPassword) this.setState({confirmPasswordFeedback : 'success'});
        else this.setState({confirmPasswordFeedback : 'error'})
    }

    handleChangeAddress(e) {
        this.setState({address : e.target.value});
        let address = e.target.value

        if(address.length > 10) this.setState({addressFeedback : 'success'});
        else this.setState({addressFeedback : 'error'})
    }

    handleChangeGender(e) {
        this.setState({gender : e.target.value});
    }

    handleChangeAgreement(e) {
        this.setState((prevState)=>({
            agreement : !prevState.agreement
        }));
    }

    handleSubmit(e){
        e.preventDefault()
        this.getPasswordValidationState();
        console.log('asdasdasda');
    }

    render() {
        return (
            <div className="container mt-10">
                <div className="col-md-6 col-md-offset-3 text-center">
                    <div className="bg-danger form-pad">
                        <Form horizontal method="POST" action="#">
                            <FormGroup controlId="formFullname" validationState={this.state.nameFeedback}>
                                <Col componentClass={ControlLabel} md={4}>
                                    Fullname
                                </Col>
                                <Col md={8}>
                                    <FormControl name="fullname" type="text" placeholder="Input your fullname" onChange={this.handleChangeName}/>
                                    <FormControl.Feedback/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formEmail" validationState={this.state.emailFeedback}>
                                <Col componentClass={ControlLabel} md={4}>
                                    Email
                                </Col>
                                <Col md={8}>
                                    <FormControl name="email" type="email" placeholder="Input your email" onChange={this.handleChangeEmail}/>
                                    <FormControl.Feedback/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formAddress" validationState={this.state.addressFeedback}>
                                <Col componentClass={ControlLabel} md={4}>
                                    Address
                                </Col>
                                <Col md={8}>
                                    <FormControl name="address" componentClass="textarea" placeholder="Input your address" onChange={this.handleChangeAddress}/>
                                    <FormControl.Feedback/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formPassword" validationState={this.state.passwordFeedback}>
                                <Col componentClass={ControlLabel} md={4}>
                                    Password
                                </Col>
                                <Col md={8}>
                                    <FormControl name="password" type="password" placeholder="Min 6 Character and Alphanumeric" onChange={this.handleChangePassword}/>
                                    <FormControl.Feedback/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formConfirmPassword" validationState={this.state.confirmPasswordFeedback}>
                                <Col componentClass={ControlLabel} md={4}>
                                    Confirm Password
                                </Col>
                                <Col md={8}>
                                    <FormControl name="confirm_password" type="password" placeholder="Confirm Password" onChange={this.handleChangeConfirmPassword}/>
                                    <FormControl.Feedback/>
                                </Col>
                            </FormGroup>

                            <FormGroup validationState={this.state.genderFeedback} onChange={this.handleChangeGender}>
                                <Radio name="radioGroup" value="male" inline>
                                    Male
                                </Radio>
                                {' '}
                                <Radio name="radioGroup" value="female" inline>
                                    Female
                                </Radio>
                            </FormGroup>

                            <FormGroup validationState={this.state.agreementFeedback}>
                                <Col>
                                    <Checkbox checked={this.agreement} onChange={this.handleChangeAgreement}>Agreement</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col>
                                    <Button type="submit" onClick={this.handleSubmit}>
                                        Sign in
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormRegister;