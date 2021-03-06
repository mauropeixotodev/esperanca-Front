
import styled from "styled-components";
import ConfiguracaoSistema from "../../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 background-size: auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;
export const Conteiner = styled.div`
 width: 100%;
 display:flex;
 align-items: center;
 @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export const DivFormCadastro = styled.div`
width: 50%;
display: flex;
justify-content: center;
@media (max-width: 800px) {
    width: 100%;
    align-items: center;
    }
`;



export const Form = styled.form`
align-items: center;
width: 80%;
display: flex;
flex-direction: column;
`;
export const Div = styled.div`
width: 100%;
display: flex;
justify-content: center;
    flex-wrap: wrap;
`;
export const Label = styled.label`
margin-top: 10px 
`;
export const DivInput = styled.div`
width: 80%;
display: flex;
flex-direction: column;

`;

export const DivImagem = styled.div`
 width: 100%;
 display:flex;
justify-content:center;
`;
export const DivCirculo = styled.div`
padding: 10px;
border-top-left-radius: 50px;
border-top-right-radius:  150px;
border-bottom-right-radius:150px;
border-bottom-left-radius: 150px;
background-color: #b5f24a;
`;
export const Img = styled.img`
width:  150px;
height: 150px;
`;
export const DivButton = styled.div`
 width: 80%;
 display:flex;
 justify-content: space-between;
 align-items: center;
@media (max-width: 800px) {
width: 100%;
flex-direction: column;
align-items: center;
}
`;
export const Button = styled.button`
margin-top: 25px;
padding: 8px  15px;
font-size:20px;
border: none;
color: #fff;
background-color: #52e427;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  5px  5px 5px #888888;
 }
 @media (max-width: 800px) {
    width: 100%;
    padding: 15px 40px;
}
`;

export const DivButtonVoltarLogin = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 800px) {
display: none;
visibility: hidden;
    }
`;

export const ImgVoltarLogin = styled.img`
width: 400px;
height: 400px;
@media (max-width: 800px) {
display:none;
visibility: hidden;
    }
`;
export const DivButtonCadastrar = styled.div`
width: 50%;
display: flex;
padding-right: 15px;
justify-content: end;
@media (max-width: 800px) {
justify-content: center;
width: 100%;
padding-right: 0px;
}
`;
export const DivVoltarParaLogin = styled.div`
width: 50%;
display: flex;
padding-left: 10px;
justify-content: center;
@media (max-width: 800px) {
    padding-left: 0px;
   width: 100%;
}
`;
export const P = styled.p`
font-size:  0.99vw;
color: #707070;
@media (max-width: 800px) {
    font-size:12px;
}
`;
export const PLogin = styled.p`
font-size:  0.99vw;
color: #52e427;
cursor: pointer;
margin-left: 0.15vw;
@media (max-width: 800px) {
    font-size:12px;
}
`;