import React from 'react';
import Logo_SWT from '../../assets/img/Logo_SWT.png';
import './Footer.css';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.swtag.com.br/">
      <img className="Logo_SWT" src={Logo_SWT} alt="SWT Logo"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
