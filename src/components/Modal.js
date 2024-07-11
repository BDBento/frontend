import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      cpf: '',
      nome: '',
      email: '',
      celular: '',
      especializacao: '',
      casa: ''
    },
    validationSchema: Yup.object({
      cpf: Yup.string().required('CPF é obrigatório'),
      nome: Yup.string().required('Nome é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      celular: Yup.string().required('Celular é obrigatório'),
      especializacao: Yup.string().required('Especialização é obrigatória'),
      casa: Yup.string().required('Casa é obrigatória')
    }),
    onSubmit: values => {
      console.log(values);
      alert('Inscrição realizada com sucesso!');
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
        <h2>Formulário de Inscrição de Voluntário na Campanha MS Pela Vida</h2>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend className='legend-name'>CPF:</legend>
            <input
              type="text"
              name="cpf"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpf}
              placeholder='000.000.000-00'
            />
          </fieldset>
          {formik.touched.cpf && formik.errors.cpf ? (
            <div className="error">{formik.errors.cpf}</div>
          ) : null}
          <fieldset>
            <legend className='legend-name'>Nome completo:</legend>
            <input
              type="text"
              name="nome"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nome}
              placeholder='Informe seu nome'
            />
          </fieldset>
          {formik.touched.nome && formik.errors.nome ? (
            <div className="error">{formik.errors.nome}</div>
          ) : null}
          <fieldset>
            <legend>E-mail:</legend>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder='Informe seu e-mail institucional'
            />
          </fieldset>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <fieldset>
          <legend>Celular:</legend>
            <input
              type="text"
              name="celular"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.celular}
              placeholder='(67) 99999-9999'
            />
            </fieldset>
            {formik.touched.celular && formik.errors.celular ? (
              <div className="error">{formik.errors.celular}</div>
            ) : null}
          
          <label className='especializacao'>Especialização:</label>
            <select
              className='select-especializacao'
              name="especializacao"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.especializacao}
            >
              <option value="" label="Selecione" />
              <option value="professor" label="Professor" />
              <option value="tecnico" label="Técnico" />
              <option value="engenheiro" label="Engenheiro" />
            </select>
            {formik.touched.especializacao && formik.errors.especializacao ? (
              <div className="error">{formik.errors.especializacao}</div>
            ) : null}
          
          <label className='casa'>Casa:</label>
            <select
              className='select-casa'
              name="casa"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.casa}
            >
              <option value="" label="Selecione" />
              <option value="fiems" label="FIEMS" />
              <option value="sesi" label="SESI" />
              <option value="iel" label="IEL" />
              <option value="senai" label="SENAI" />
            </select>
            {formik.touched.casa && formik.errors.casa ? (
              <div className="error">{formik.errors.casa}</div>
            ) : null}
          
          <button type="submit">REALIZAR INSCRIÇÃO</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
