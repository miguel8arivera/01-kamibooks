import { Content, Header, Footer } from './components';

export default function Layout() {
  return (
    <div className="m-auto p-4 grid min-h-screen max-w-screen-lg grid-rows-[60px,1fr,60px] gap-4">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
