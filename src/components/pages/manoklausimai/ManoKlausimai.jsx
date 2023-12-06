import { useContext } from 'react';
import TopicContext from '../../contexts/TopicContext';
import styled from 'styled-components';
import UsersContext from '../../contexts/UsersContext';
import { useState } from 'react';
import Topic from "../../UI/topic/Topic";

const StyledManoKlausimai = styled.main`
  height: 67vh;
  > h1{
    text-align: center;
}
`;


const ManoKlausimai = () => {

  const { topics } = useContext(TopicContext)
  const { loggedInUser } = useContext(UsersContext)
  const [userQuestions, setUserQuestions] = useState(topics.filter(topic => topic.userId.toString() === loggedInUser.id.toString()));

  return (
    <StyledManoKlausimai>
      <h1>Mano klausimai:</h1>
      <div>
        {userQuestions.length ?
          userQuestions.map(singlequestion => {
            return <Topic
              key={singlequestion.id}
              data={singlequestion}
            />
          }) :
          <h1>Neturite užduotų klausimų</h1>
        }
      </div>
    </StyledManoKlausimai>
  );
}

export default ManoKlausimai;