import fs from 'fs-extra';
import Head from 'next/head';
import Home from '../components/Home.jsx';

export default function HomePage({ rows }) {
  return (
    <div>
      <Head>
        <title>Leitor CSV</title>
        <meta name="description" content="Leitor de Arquivo CSV com Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home rows={rows} />
    </div>
  );
}

export async function getStaticProps() {
  const filename = './public/teste.csv';

  try {
    const data = await fs.readFile(filename, 'utf8');
    const lines = data.trim().split('\n');

    const rows = lines.map(line => {
      const fields = line.split(',');
      return { num: fields.length, fields };
    });

    return {
      props: { rows },
    };
  } catch (error) {
    console.error(`Erro ao ler o arquivo CSV: ${error}`);
    return {
      props: { rows: [] },
    };
  }
}
