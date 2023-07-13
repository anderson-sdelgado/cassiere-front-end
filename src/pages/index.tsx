import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home />;
}

export async function getStaticProps() {
  return {
    props: {
      url: 'img/logo.jpg',
      alt: 'Logo',
    },
  };
}
