import styeld from '@emotion/styled';

export const Container = styeld.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(180px, auto);

    & .content_box {
        padding: 20px;
        border-radius: 10px;
        border: 1px solid var(--color-soft-bg);
    }
`;

export const AiRecommend = styeld.div`
    grid-column: 1 / span 1;
    grid-row: 1 /span 2;
`;

export const ContentBox = styeld.div`
    grid-column: 1 / span 1;
    grid-row: span 1;
`;

export const HistoryCalendar = styeld.div`
    grid-column: 2 / span 1;
    grid-row: 1 / span 4;
`;
