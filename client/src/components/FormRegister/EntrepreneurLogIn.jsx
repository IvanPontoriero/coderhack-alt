import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EntrepreneurLogIn = () => {

    return (
        <div className='form__registration--container'>
            <Card style={{ width: '18rem' }}>
                <Form>
                    <h2>Inicia Sesión</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email o nombre de usuario</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email o nombre de usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña </Form.Label>
                        <Form.Control type="password" placeholder="ingresa tu contraseña" />
                        <Link to='/password-recover'>Olvidaste tu contraseña</Link>
                    </Form.Group>
                    <Button type="submit">
                    Iniciar Sesión
                    </Button>
                    <p>O inicia sesión con </p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Button variant="primary" type="submit">Google</Button>
                        <Button variant="primary" type="submit">Facebook</Button>
                    </Form.Group>
                    <p>¿No tienes cuenta hold_up? <Link to='/form-entrepreneur-registration'>Regístrate</Link></p>
                </Form>
            </Card>
        </div>
    )
}

export default EntrepreneurLogIn;