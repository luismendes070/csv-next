// ChatGPT

import fs from 'fs-extra';
import Head from 'next/head';

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

export default function Home({ rows }) {
  return (
    <div>
      <Head>
        <title>Leitor CSV</title>
        <meta name="description" content="Leitor de Arquivo CSV com Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the rows here */}
      {rows.map((row, index) => (
        <div key={index}>
          <span>Number of fields: {row.num}</span>
          <ul>
            {row.fields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


