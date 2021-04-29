import styled from 'styled-components';
import { shade } from 'polished'; // manipulação de cores

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; // forçar sempre 100% do view port right - sempre assumir total da altura da tela do usuário
  display: flex; // ficar um do lado do outro
  align-items: stretch; // tamanho total da página na largura
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center; // pega os elementos e fica no centro eixo vertical e horizontal
  width: 100%; // ocupar o máximo da tela possível
  max-width: 700px;  // nunca ocupar mais que 700px
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    /* input {
      background: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #232129; // para a borda quando ocorrer um erro ficar vermelha
      padding: 16px;
      width: 100%;
      &::placeholder {
        color: #666360;
      }
      & + input { // todo input que seja precedido de outro
        margin-top: 8px;
      }
    } */
    /* button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    } */
    a { // pegando somente o a dentro do form
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a { // pegando somente o a do content e não os níveis abaixo (no caso não pega o a do form que é um nível acima.)
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; // ocupar todo o espaço, menos os 700px da div acima
  background: url(${signUpBackground}) no-repeat center; // imagem do fundo sem repetir
  background-size: cover; // cobrir o tamanho sobrando
`;
