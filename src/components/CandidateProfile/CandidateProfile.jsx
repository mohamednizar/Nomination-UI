import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    label: {
        marginLeft: theme.spacing.unit*5,
    },

});

const gender = [
    {
        value: '',
        label: '-- Select --',
    },
    {
        value: 'MALE',
        label: 'MALE',
    },
    {
        value: 'FEMALE',
        label: 'FEMALE',
    },

];
const electoralDivisionNames = [
    {
        value: '',
        label: '-- Select --',
    },
    {
        value: 'Kaluthara',
        label: 'Kaluthara',
    },
    {
        value: 'Colombo',
        label: 'Colombo',
    },
    {
        value: 'Gampaha',
        label: 'Gampaha',
    },
    {
        value: 'Kagalla',
        label: 'Kagalla',
    },

];
const electoralDivisionCodes = [
    {
        value: '',
        label: '-- Select --',
    },
    {
        value: 'K001',
        label: 'K001',
    },
    {
        value: 'C002',
        label: 'C002',
    },
    {
        value: 'G003',
        label: 'G003',
    },
    {
        value: 'K002',
        label: 'K002',
    },

];
class TextFields extends React.Component {


    state = {
        nic: '',
        fullName: '',
        preferredName: '',
        nominationId: '',
        dateOfBirth: '',
        gender: 'Select',
        occupation:'',
        address:'',
        electoralDivisionName: 'Select',
        electoralDivisionCode: 'Select',
        counsilName: 'cb',

    };

    componentDidMount() {




    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            url: 'nominations/candidates',
            data: this.state
        })
        .then(function (response) {
            // return response.json();
            // console.log("ffff",response.json());
            // resultElement.innerHTML = generateSuccessHTMLOutput(response);
            alert("sucsess",response);
            // this.onCloseModal();
          })
          .catch(function (error) {
              alert("error",error);
            // resultElement.innerHTML = generateErrorHTMLOutput(error);
          });
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                <Grid container spacing={8}>
                    <Grid item lg={4}>
                        <TextField

                            id="standard-name"
                            label="NIC"
                            name="nic"
                            ref={(input) => this.input = input}
                            className={classes.textField}
                            value={this.state.nic}
                            onChange={this.handleChange('nic')}
                            margin="normal"
                        />
                    </Grid>

                    <Grid item lg={4}>
                        <TextField
                            id="standard-name"
                            label="Full Name"

                            value={this.state.fullName}
                            onChange={this.handleChange('fullName')}
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={8}>
                    <Grid item lg={4}>
                        <TextField

                            id="standard-name"
                            label="Preferred Name"
                            className={classes.textField}
                            value={this.state.preferredName}
                            onChange={this.handleChange('preferredName')}
                            margin="normal"
                        />
                    </Grid>

                    <Grid item lg={4}>
                        <TextField
                            id="standard-name"
                            label="nomination Id"
                            value={this.state.nominationId}
                            onChange={this.handleChange('nominationId')}
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={8}>
                    <Grid item lg={4}>
                        <TextField
                            id="date"
                            label="Date of Birth"
                            type="date"
                            defaultValue="2017-05-24"
                            value={this.state.dateOfBirth}
                            className={classes.textField}
                            onChange={this.handleChange('dateOfBirth')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />


                    </Grid>

                    <Grid item lg={4}>
                    <TextField
                            id="standard-select-currency-native"
                            select
                            label="Gender"
                            className={classes.textField}
                            value={this.state.gender}

                            onChange={this.handleChange('gender')}

                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                           // helperText="Please select your Gender"
                            margin="normal"
                        >
                            {gender.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>


                    </Grid>

                </Grid>

                <Grid container spacing={8}>
                    <Grid item lg={4}>
                        <TextField

                            id="standard-name"
                            label="Occupation"
                            className={classes.textField}
                            value={this.state.occupation}
                            onChange={this.handleChange('occupation')}
                            margin="normal"
                        />
                    </Grid>

                    <Grid item lg={4}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Address"
                            multiline
                            rowsMax="4"
                            value={this.state.address}
                            onChange={this.handleChange('address')}
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            hidden
                            id="standard-multiline-flexible"
                            label="Counsil Name  "
                            multiline
                            rowsMax="4"
                            value={this.state.counsilName}
                            onChange={this.handleChange('counsilName')}
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>

                </Grid>
                <Grid container spacing={8}>
                    <Grid item lg={4}>
                    <TextField
                            id="standard-select-currency-native"
                            select
                            label="Electoral Devision"
                            className={classes.textField}
                            value={this.state.electoralDivisionName}

                            onChange={this.handleChange('electoralDivisionName')}

                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                           // helperText="Please select your Gender"
                            margin="normal"
                        >
                            {electoralDivisionNames.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item lg={4}>
                    <TextField
                            id="standard-select-currency-native"
                            select
                            label="Electoral Devision Code"
                            className={classes.textField}
                            value={this.state.electoralDivisionCode}

                            onChange={this.handleChange('electoralDivisionCode')}

                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                           
                            margin="normal"
                        >
                            {electoralDivisionCodes.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>

                </Grid>
                <Grid container spacing={8}>
                    <Grid className={classes.label}  item lg={3}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Cancel
                        </Button>
                        <Button  variant="contained" type="submit" value="Submit" color="secondary" className={classes.submit}>
                            Save
                        </Button>
                    </Grid>
                </Grid>

            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
