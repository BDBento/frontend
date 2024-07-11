import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalLogin from './components/ModalLogin';
import ModalSucesso from './components/ModalSucesso';

import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSucessoModalOpen, setIsSucessoModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSucessoModal = () => {
    setIsSucessoModalOpen(true);
  };

  const closeSucessoModal = () => {
    setIsSucessoModalOpen(false);
  };

  const handleFormSubmit = () => {
    // Supondo que o formulário foi enviado com sucesso
    setIsModalOpen(false);
    setIsLoginModalOpen(false);
    openSucessoModal();
  };


  const imageUrls = [
    "/images/imagem-1.png",
    "/images/imagem-2.png",
    "/images/imagem-3.png"
  ];

  return (
    <div className="App">
      <Header />
      <div class="menu">
                    <nav class="container">
                        <ul>
                            <li><button href="/">Sobre o Projeto</button></li>
                            <li ><button onClick={openModal}>Inscrições</button></li>
                            <li><button onClick={openLoginModal}>Painel Adm</button></li>
                        </ul>
                    </nav>
                </div>
      <Banner />

      <section className="apresentacao-1">
        <div className="container row">
          <div className="col-md-4 col-12">
            <Card imageUrls={imageUrls} />
          </div>
          <div className="col-lg-7 col-12">
            <h2>
              Campanha MS Pela Vida já enviou mais de 50 toneladas de doações ao
              RS e em breve SENAI MS tomará a frente nos reparos de danos
            </h2>
            <p>
              Após uma semana de operação, a campanha MS Pela Vida - Unidos pelo
              Rio Grande do Sul contabiliza números superlativos. Mais de 213
              mil itens básicos doados pela população sul-mato-grossense
              abastecem caminhões e aeronaves que partem diariamente com destino
              ao sul do país, em socorro às vítimas do maior desastre ambiental
              em solo gaúcho. Mais de 50 toneladas de donativos já foram
              enviadas ao sul do país, em uma ação que contou com o trabalho de
              1,5 mil voluntários até o momento.
            </p>
            <p>
              O Presidente da FIEMS, Sérgio Longen, comenta os próximos passos
              da campanha: "A catástrofe do Rio Grande do Sul nos traz um alerta
              para o clima. Precisamos entender essa mensagem e avaliar como
              implementar ações que evitem essa realidade em mais ocasiões.
              <strong>
                Mas agora a tarefa de casa brasileiro é atuar em socorro ao Rio
                Grande do Sul, e por este motivo em breve o SENAI tomará a linha
                de frente na luta para reparar os danos nas cidades
                gaúchas.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className="apresentacao-2">
        <div className="container row">
          <div className="col-md-6">
            <h2>Próximos passos para reconstruir o RS</h2>
            <p>
              Mais do que arrecadações, é importante oferecer esperança de recomeço às famílias que perderam tudo nas enchentes do Rio Grande do Sul. Neste sentido, o Sistema Fiems, por meio do Senai, está enviando duas unidades móveis para serem enviadas às cidades atingidas pelo desastre climático com serviços de eletrotécnica e marcenaria.
            </p>
            <p>
              A expectativa é enviar inicialmente uma equipe 26 pessoas, entre engenheiros, professores e técnicos.
            </p>
            <p>
              Tem interesse em se voluntariar? Preencha o formulário e se inscreva para ajudar as vítimas da maior catástrofe natural do Sul do país.
            </p>
            
          </div>
          <div className="col-md-6 apresentacao-2-img">
            <img src="/images/Caminhao.png" alt="Caminhao" />
          </div>
        </div>
      </section>

      <section className="apresentacao-3">
        <div className="container">
          <img src="/images/metas.png" alt="Caminhao" />
        </div>
      </section>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <ModalLogin isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <ModalSucesso isOpen={isSucessoModalOpen} onClose={closeSucessoModal} />
    </div>
  );
};

export default App;
