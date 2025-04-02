import s from './Game.module.css';
export const Game = ({ percentage, question, onClickVariant }) => {
  return (
    <>
      <div className={s.card}>
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <h1 className={s.title}>{question.title}</h1>
      <ul>
        {question.variants.map((element, index) => (
          <li
            className={s.item}
            key={element}
            onClick={() => onClickVariant(index)}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
};
