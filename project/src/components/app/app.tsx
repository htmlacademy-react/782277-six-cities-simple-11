import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cardCount: number;
}

export default function App({cardCount}: AppProps): JSX.Element {
  return (
    <MainPage cardCount={cardCount} />
  );
}
