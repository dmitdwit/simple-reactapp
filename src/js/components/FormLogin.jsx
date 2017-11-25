import React, { Component } from 'react';
import {Form,FormControl,FormGroup,Col,Button,Checkbox,ControlLabel} from 'react-bootstrap'

class FormLogin extends Component {
    render() {
        return (
            <div className="container mt-10">
                <div className="col-md-4 col-md-offset-4 text-center">
                    <div className="bg-danger form-pad">
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} md={4}>
                                    Email
                                </Col>
                                <Col md={8}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} md={4}>
                                    Password
                                </Col>
                                <Col md={8}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col>
                                    <Button type="submit">
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

export default FormLogin;