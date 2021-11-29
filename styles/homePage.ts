import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 40px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 70px;
    color: #483434;
    text-decoration: underline;

    svg{
        width: 30px;
        height: 30px;
        color: #6B4F4F;
    }

    :hover{ cursor: pointer; }
`;

export const DropzoneSection = styled.section`
    border: 1px solid red;
    border: 2px dashed #483434;
    border-radius: 10px;
    height: 60vh;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #6B4F4F;
    text-align: center;

    :hover{
        opacity: 0.7;
        cursor: pointer;
    }
`;

export const DropzoneInputContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DropzoneFileInput = styled.input``;

export const DropzoneText = styled.p``;

export const Footer = styled.footer`
    text-align: center;
    margin-top: 20px;
    img{
        width: 50px;
        border-radius: 50%;
    }
`;

export const FooterText = styled.p``;

export const FooterLink = styled.a``;

export const FooterImageAvatar = styled.img``;

export const LoaderContainer = styled.div`
    height: 60vh;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LoadingText = styled.h1`
    font-size: 40px;
    color: #6B4F4F;
`;

export const Table = styled.table`
    width: 100%;
    place-items:center;
   
    th{ 
        border: 1px solid #6B4F4F;
        width: 30%;
        text-align: center;
        font-size: 20px;
    }

    td{
        border: 1px solid #6B4F4F;
        width: 30%;
        text-align: center;
        font-size: 20px;
        padding: 10px;
    }  
    
    td svg{
        width: 30px;
        height: 30px;
        color: #6B4F4F;

        :hover{ 
            opacity: 0.7; 
            cursor: pointer; 
        }
    }
    border: 1px solid #6B4F4F;

`;