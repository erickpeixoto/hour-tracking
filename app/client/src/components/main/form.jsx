import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Grid, Button, Checkbox, Link, Typography } from '@material-ui/core'

import { unlockAlt } from 'react-icons-kit/fa/unlockAlt'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Fragment>
            <input 
                {...input} 
                placeholder={label}
                type={type}
                className={touched && error && 'label-required'}
                />
    </Fragment>
)
class Form extends Component {

    render() {
        const { invalid, handleSubmit, pristine, reset, submitting  } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                    <Field
                        name='email'
                        component={renderField}
                        label={'Usuário'}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name='password'
                        type="password"
                        component={renderField}
                        label={'Senha'}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="off"
                    />
                </Grid>
                <Grid container xs={12}>
                     <Grid item xs={6} className={'box-remember'}>
                     <Typography>
                            <Checkbox
                                value="checkedA"
                                inputProps={{
                                    'aria-label': 'uncontrolled-checkbox',
                                }}
                            /> 
                            <span className={'remember_me'}>
                                Lembrar
                            </span>
                     </Typography>
                    </Grid>

                    <Grid item xs={6} style={{textAlign: 'left', paddingLeft: '25px', paddingTop: '2px'}}>
                        <Link>Esqueceu sua senha?</Link>
                    </Grid>
                </Grid>


                <Grid item xs={12} style={{ marginTop: 50 }}>
                    <Button
                         type="submit"
                         disabled={invalid}>Login</Button>
                </Grid>
            </form>
            
        )
    }
}
const validate = values => {
    let errors = {}
    if (!values.email) {
        errors.email = 'Campo Obrigatório'
    }
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Campo Obrigatório'
    }
    return errors
}

export default reduxForm({
    form: 'app',
    initialValues: {
        remember: true
    },
    validate
})(Form)