import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Route, Routes, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EntrepreneurRegistration = () => {

    const [data, setData] = useState({
        email: '',
        user: '',
        password: ''
    });

    const {register, errors, handleSubmit} = useForm();

    // const handleInputChange = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name] : e.target.value
    //     })
    // }

    const sendData = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    const onSubmit = (datum, e) => {
        console.log(datum);
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className='form__registration--container'>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Paso 1 de 2</h4>
                    <h2>Crea tu cuenta</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        name='email' 
                        placeholder="Ingresa tu email" 
                        ref={
                            register({
                                required: {value: true, message: 'Complete este campo'}
                            })
                        }
                        />
                        {errors.email && <span className='text-danger text-small d-block mb-2'>{errors.email.message}</span>}
                        <Form.Text className="text-muted">
                            No compartiremos tu email con nadie más!
                        </Form.Text> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control 
                                type="text" 
                                name='user' 
                                placeholder="Ingresa tu nombre de usuario"
                                ref={
                                    register({
                                        required: {value: true, message: 'Complete este campo'},
                                        minLength: {value: 5, message: 'El nombre de usuario debe tener mínimo 5 caractéres.'}
                                    })
                                }
                                />
                                {errors.user && <span className='text-danger text-small d-block mb-2'>{errors.user.message}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control 
                                type="password" 
                                name='password' 
                                placeholder="Ingresa tu nombre de usuario"
                                ref={
                                    register({
                                        required: {value: true, message: 'Complete este campo'},
                                        minLength: {value: 8, message: 'Su contraseña debe tener más de 8 caractéres incluyendo al menos un número y una mayúscula.'},
                                    })
                                }
                                />
                                {errors.password && <span className='text-danger text-small d-block mb-2'>{errors.password.message}</span>}
                            </Form.Group>
                    <Form.Check 
                        label='Quiero suscribirme al newsletter de make_sense!'
                    />
                    <Form.Check 
                        label='Tengo entre 30 y 35, he leído y acepto los Términos y condiciones del sitio'
                    />
                    <Link to='/form-registration-2'><Button type="submit" to='/form-success' onSubmit={ sendData } >Crear cuenta</Button></Link>
                    <p>O registrate con </p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Button variant="primary" type="submit">Google</Button>
                        <Button variant="primary" type="submit">Facebook</Button>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default EntrepreneurRegistration;