import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Modal.css';

const ModalLogin = ({ isOpen, onClose, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            cpf: '',
            senha: ''
        },
        validationSchema: Yup.object({
            cpf: Yup.string().required('CPF é obrigatório'),
            senha: Yup.string().required('Senha é obrigatória')
        }),
        onSubmit: values => {
            console.log(values);
            alert('Login realizado com sucesso!');
            onSubmit();
        }
    });

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>FECHAR</button>
                <img src="/images/senai_logo_modal.png" alt="Sistema FIEMS" className="logo" />
                <h2>Fazer Login como Administrador</h2>
                <form onSubmit={formik.handleSubmit}>
                    <fieldset>
                        <legend className='legend-name'>CPF:</legend>
                        <input
                            type="text"
                            name="cpf"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cpf}
                        />
                    </fieldset>
                    {formik.touched.cpf && formik.errors.cpf ? (
                        <div className="error">{formik.errors.cpf}</div>
                    ) : null}
                    <fieldset>
                    <legend className='legend-name
                    '>Senha:</legend>
                        <input
                            type="password"
                            name="senha"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.senha}
                        />
                    </fieldset>
                        {formik.touched.senha && formik.errors.senha ? (
                            <div className="error">{formik.errors.senha}</div>
                        ) : null}
                    
                    <button type="submit">FAZER LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;
