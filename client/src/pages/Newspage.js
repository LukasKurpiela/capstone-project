import styled from 'styled-components';
import Footer from '../components/Footer';

export default function Newspage({ news }) {
  return (
    <>
      <HeadlineWrapper>

        <NewsHeader>News</NewsHeader>
      </HeadlineWrapper>
      {news.map((news) => (

        <h2>News</h2>
      </HeadlineWrapper>
      {news.map((news, index) => (
        <NewsWrapper>
          <NewsImage src={news.imageurl} alt="Image of news" />
          <ArticleWrapper>
            <PublicationDate>
              {new Date(news.published_on * 1000).toLocaleString()} |{' '}
              {news.source}
            </PublicationDate>
            <ArticleTitle>{news.title}</ArticleTitle>
            <NewsLink href={news.guid} alt="Newslink">
              Read the full article
            </NewsLink>
          </ArticleWrapper>
        </NewsWrapper>
      ))}
      <Footer />
    </>
  );
}

const HeadlineWrapper = styled.div`

  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 6px;
  padding-bottom: 0;
`;

const NewsHeader = styled.h2`
  margin-bottom: 0.5rem;
`;

  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 90px;
  padding-bottom: 0;
`;

const NewsImage = styled.img`
  margin: 0 0.75rem;
  width: 4rem;
  border-radius: 7.5px;
  border: solid 1px var(--tertiary);
`;

const NewsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 7rem;
  border-bottom: 1px solid #d7d7d7;
  padding: 1rem 0;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-right: 1rem;
`;

const ArticleTitle = styled.h4`
  margin: 0.5rem 0;
`;

const NewsLink = styled.a``;

const PublicationDate = styled.p`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 0;
`;
