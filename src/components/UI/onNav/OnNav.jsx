import { Link } from "react-router-dom";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { useContext } from "react";

const StyledNav = styled.nav`
display: flex;
  .profilis{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    > img{
      width: 50px;
      height: auto;
      border-radius: 50%;
    }
    > button{
      border: 0;
      background-color: #D1D2D1;
      border-radius: 10px;
      padding: 3px 10px;
    }
    > button:hover{
      cursor: pointer;
      background-color: #d8dad8;
    }
  }
  > ul{
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    align-items: center;
    > .klausimai{
      padding-right: 15px;
      border-right: 1px solid black;
    }
    > li{
      padding: 5px;
      list-style-type: none;
    }
    li:hover{
      cursor: pointer;
      text-shadow: 0px 1px 9px rgba(0,0,0,0.35);
    }
  }
  `;


const OnNav = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);

  return (
    <StyledNav>
      <ul>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to="/">Pagrindinis</Link></li>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to="/apie">Apie forumą</Link></li>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to="/uzduotiklausima">Užduoti klausimą</Link></li>
        <li><Link style={{textDecoration: 'none', color: 'black'}} to="/manoklausimai">Mano klausimai</Link></li>
      </ul>
      <div className="profilis">
        <img style={{ padding: '0px 20px' }} src={loggedInUser.profilioNuotrauka} alt="profilio nuotrauka" />
        <p>Sveiki, {loggedInUser.vartotojoVardas}</p>
        <button onClick={() => setLoggedInUser(false)}>Atsijungti</button>
      </div>
    </StyledNav>
  );
}

export default OnNav;