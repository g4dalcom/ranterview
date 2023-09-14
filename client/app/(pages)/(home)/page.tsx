import * as S from './style';

const Main = () => {
  return (
    <S.Container>
      <S.AiRecommend className="content_box">AI recommend</S.AiRecommend>
      <S.ContentBox className="content_box">box2</S.ContentBox>
      <S.ContentBox className="content_box">box3</S.ContentBox>
      <S.HistoryCalendar className="content_box">Calendar</S.HistoryCalendar>
    </S.Container>
  );
};

export default Main;
