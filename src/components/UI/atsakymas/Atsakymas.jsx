import styled from "styled-components";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import CommentsContext from "../../contexts/CommentsContext";
import RedaguotiKomentara from "../redaguotiKomentara/RedaguotiKomentara";

const StyledComments = styled.div`
  margin: 5px 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  padding: 5px 10px;
  gap: 30px;
  justify-content: flex-start;
  .submitBttn{
    background-color: #c3b8b8;
    border: 0;
    border-radius: 10px;
    margin: 5px;
    padding: 3px 8px;
    }
    .submitBttn:last-child{
      color: #b30000;
    }
    .submitBttn:last-child{
      cursor: pointer;
    }
    .submitBttn:first-child{
      cursor: pointer;
    }
  > .rating {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >span{
      font-size: 2rem;
    }
    > p {
      margin: 0;
      > i{
        font-size: 3rem;
      }
    }
  }
  > div.comment{
    > div.name{
      > p{
        font-size: 1.2rem;
      }
    }
    > div:last-child{
      >p{
        margin: 0;
      }
    }
  }
`;

const Atsakymas = ({ data }) => {

  const { loggedInUser } = useContext(UsersContext);
  const { setComments, CommentsActionTypes, setArRedaguota, arRedaguota, liked, setLiked } = useContext(CommentsContext);

  return (
    <StyledComments>
      <div className="rating">
        {
          loggedInUser &&
          <p><i
            onClick={() => {
              if (data.userId === loggedInUser.id) {
                window.alert('Savo pranešimo vertinti negalima')
              } else if (liked.find(el => el.postId === data.id) !== undefined) {
                window.alert('Jūs jau įvertinote šį pranešimą')
              } else {
                const newLiked = { id: liked.length + 1, authorId: loggedInUser.id, postId: data.id }
                setLiked([...liked, newLiked])
                setComments({
                  type: CommentsActionTypes.like,
                  id: data.id
                })
              }
            }}
            className="bi bi-hand-thumbs-up"></i></p>
        }
        <span>{data.ivertinimas}</span>
        <p>Įvertinimas</p>
        {
          loggedInUser &&
          <p><i
            onClick={() => {
              if (data.userId === loggedInUser.id) {
                window.alert('Savo pranešimo vertinti negalima')
              } else if (liked.find(el => el.postId === data.id) !== undefined) {
                window.alert('Jūs jau įvertinote šį pranešimą')
              } else {
                const newLiked = { id: liked.length + 1, authorId: loggedInUser.id, postId: data.id }
                setLiked([...liked, newLiked])
                setComments({
                  type: CommentsActionTypes.dislike,
                  id: data.id
                })
              }
            }}
            className="bi bi-hand-thumbs-down"></i></p>
        }
      </div>
      <div className="comment">
        <div className="name">
          <p>{data.komentaras}</p>
          <i>{data.redaguota !== false ? `(Atsakymas buvo redaguotas)` : null}</i>
        </div>
        <div>
          <p>Autorius: {data.autorius}</p>
          <p>Publikuotas: {data.publikuota}</p>
        </div>
      </div>
      {
        loggedInUser.id === data.userId &&
        <div>
          <button className="submitBttn"
            onClick={() => setArRedaguota({ id: data.id })}
          >Redaguoti</button>
          <button className="submitBttn"
            onClick={() => {
              setComments({ type: CommentsActionTypes.remove, id: data.id });
            }}>Ištrinti</button>
        </div>
      }
      {
        arRedaguota.id === data.id &&
        <RedaguotiKomentara
          id={data.id}
        />
      }
    </StyledComments >
  );
}

export default Atsakymas;