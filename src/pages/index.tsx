import { useState } from 'react';

import cx from 'classnames';

import { Container, OrderContainer } from '@/styles/home';

import { FiMenu } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';

import BurgerImg from '@/assets/img/burger.png';
import Order1Img from '@/assets/img/order1.png';
import Order2Img from '@/assets/img/order2.png';
import PeopleImg from '@/assets/img/people.png';

import Image from 'next/image';

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const Order = ({ title, img }: { title: string; img: any }) => {
    return (
      <OrderContainer>
        <Image src={img} alt={''} />
        <button>
          <p className="title">{title}</p>
          <span>Pedir agora</span>
        </button>
      </OrderContainer>
    );
  };

  return (
    <Container>
      <div className="wrapper">
        <nav>
          <span className="logo">Burger heaven</span>
          <div className={'menu ' + cx({ toggle })}>
            <VscChromeClose
              onClick={() => setToggle(false)}
              className="close show-mobile"
              size={30}
            />
            <ul>
              <li>Sobre</li>
              <li>Menu</li>
              <li className="button-color">Peça online</li>
            </ul>
          </div>
          <FiMenu
            onClick={() => setToggle((state) => !state)}
            className="menu-icon show-mobile"
            size={40}
          />
        </nav>

        <h1>O HAMBÚRGUER ORGÂNICO FAVORITO DE NOVA YORK</h1>
        <Image className="img-banner" src={BurgerImg} alt="" />

        <section>
          <div className="banner">
            <div className="left">
              <span className="title">
                o hambúrguer acima de todos os hambúrgueres
              </span>
            </div>

            <div className="right">
              <span className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nec ornare neque.
              </span>
              <button>Sobre nós</button>
            </div>
          </div>
        </section>

        <section>
          <div className="orders">
            <Order title="batatas fritas com sal e vinagre" img={Order2Img} />
            <Order title="sanduíche de frango crocante" img={Order1Img} />
          </div>
        </section>

        <h2>“o melhor hambúrguer que já comi”</h2>

        <Image src={PeopleImg} alt="" />

        <h3>Peça online ou venha nos visitar hoje</h3>

        <button
          style={{ backgroundColor: '#D1EF53' }}
          className="button-color auto"
        >
          Iniciar
        </button>

        <footer>
          <ul className="menu-footer">
            <li>
              <p className="footer-logo">Burger</p>
              <p className="footer-logo">Heaven</p>
            </li>
            <li>
              <span className="footer-title">Mais</span>
              <ul>
                <li className="footer-links">Sobre</li>
                <li className="footer-links">Menu</li>
                <li className="footer-links">Locações</li>
                <li className="footer-links">Privacidade</li>
              </ul>
            </li>
            <li>
              <span className="footer-title">Horas</span>
              <ul>
                <li className="footer-links">Aberto de</li>
                <li className="footer-links">11AM até</li>
                <li className="footer-links">11PM todos os dias</li>
              </ul>
            </li>
            <li>
              <span className="footer-title">Junte-se à nossa newsletter</span>
              <div className="input-container">
                <input type="text" />

                <button type="submit">Enviar</button>
              </div>
            </li>
          </ul>
          <div className="footer">
            <span>Copyright Burger Heaven</span>
            <span>Privacy Policy</span>
          </div>
        </footer>
      </div>
    </Container>
  );
}
