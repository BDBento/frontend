import React from 'react';
import './Modal.css';

const ModalSucesso = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>FECHAR</button>
        <img src="/images/senai_logo_modal.png" alt="Sistema FIEMS" className="logo" />
        <h2>Sucesso!</h2>
        <p>Seu formulário foi enviado com sucesso.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ModalSucesso;