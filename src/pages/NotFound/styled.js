import styled from "styled-components";

const NotFoundStyle = styled.div`
  div.flex-container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 9%;
    @media (max-width: 999px) {
      display: block;
      margin-top: 30%;
    }
  }
  div.text {
    margin-left: 8rem;
    margin-bottom: 10rem;
    @media (max-width: 999px) {
      align-items: flex-start;
      margin-left: 0;
    }
  }
  img {
    width: 500px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 25%;
    margin-left: 25px;
    @media (max-width: 999px) {
      width: 350px;
      height: 200px;
    }
  }
  h1 {
    width: 100%;
    font-size: 200%;
    font-weight: 700;
    padding: 0 1rem;
    margin-top: 4%;
    margin-left: 3%;
    @media (max-width: 999px) {
      margin-bottom: 0;
      font-size: 30px;
      margin-top: 8%;
    }
  }
  h3 {
    padding: 0 2rem;
    font-size: 20px;
    line-height: 45px;
    @media (max-width: 999px) {
      margin: 0;
      font-size: 12px;
      line-height: 25px;
    }
  }

  .btn {
    text-align: center;
    background-color: #0fffcf9f;
    border-radius: 5px;
    border: none;
    height: 3rem;
    width: 10rem;
    display: block;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 0.5s linear;
    margin: 0 auto;
    margin-top: 6%;
    @media (max-width: 999px) {
      margin-top: 10%;
    }
  }

  .btn:hover {
    animation: effect 0.4s infinite;
    transition: all 0.5s linear;
    background: #0f3fff8e;
    color: white;
  }

  @keyframes effect {
    0% {
      transform: translateX(3px) rotate(5deg);
    }
  }
`;

export default NotFoundStyle;
