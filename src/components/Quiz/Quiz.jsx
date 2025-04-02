import { useState } from 'react';
import { questions } from '../../questions';
import { Container } from '../Container/Container';
import { Game } from '../Game/Game';
import { Result } from '../Result/Result';

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    setStep((prevState) => prevState + 1);

    if (index === questions[step].correct) {
      setCorrect((prevState) => prevState + 1);
    }
  };

  const startAgain = () => {
    setCorrect(0);
    setStep(0);
  };
  return (
    <Container>
      {step !== questions.length ? (
        <Game
          percentage={Math.round((step / questions.length) * 100)}
          question={questions[step]}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          correct={correct}
          total={questions.length}
          startAgain={startAgain}
        />
      )}
    </Container>
  );
};
