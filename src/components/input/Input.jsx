import React from 'react';
import Gender from '../gender/Gender'

class Input extends React.Component {

    constructor() {
        super();
        this.state = {
            input: {},
            errors: {},
            touched: {},
            activeGender: "",
            togglePassword: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    activeGender = (gender) => this.setState({ activeGender: gender })

    onToggle() {
        this.setState({ togglePassword: !this.state.togglePassword })
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input: input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            alert(`Your gender: ${this.state.activeGender} Your password:  ${this.state.input.password} Your email: ${this.state.input.email}`);
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (input["password"].length < 6) {
            isValid = false;
            errors["password"] = "Please use minimum 6 characters in your password"
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords mismatch.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Gender genders={["Male", "Female", "Other"]} callback={this.activeGender} />
                    <div class="form-group">
                        <label for="email" id="email">E-mail</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.input.email}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            class={this.state.errors.email ? "form-control error" : "form-control success"}
                            placeholder="Enter email"
                            id="email" />

                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>

                    <div class="form-group">
                        <label for="password">Create Password:</label>
                        <div className="pass-wrapper">
                            <input
                                type={
                                    this.state.togglePassword ?
                                        "text" :
                                        "password"}
                                name="password"
                                value={this.state.input.password}
                                onChange={this.handleChange}
                                class={this.state.errors.password ? "form-control error" : "form-control success"}
                                placeholder="Enter password"
                                id="password" />
                            <i onClick={this.onToggle} className={
                                this.state.togglePassword ? "bi bi-eye" : "bi bi-eye-slash"}>
                            </i>
                        </div>
                        <div className="text-danger">{this.state.errors.password}</div>
                        <label for="confirm_password">Confirm Password:</label>
                        <div className="pass-wrapper">
                            <input
                                type={
                                    this.state.togglePassword ?
                                        "text" :
                                        "password"}
                                name="confirm_password"
                                value={this.state.input.confirm_password}
                                onChange={this.handleChange}
                                class={this.state.errors.password ? "form-control error" : "form-control success"}
                                placeholder="Enter confirm password"
                                id="confirm_password" />
                            <i onClick={this.onToggle} className={
                                this.state.togglePassword ? "bi bi-eye" : "bi bi-eye-slash"}>
                            </i>
                        </div>
                        <div className="text-danger">{this.state.errors.confirm_password}</div>
                    </div>
                    <button type="submit" value="Submit" className="btn-sign">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Input;