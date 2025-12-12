import mdToPdf from 'md-to-pdf';

const run = async () => {
  await mdToPdf(
    {
      path: 'README.md',
    },
    {
      dest: 'README.pdf',
      launch_options: {
        args: ['--no-sandbox'],
      },
    }
  ).catch(console.error);
};

run();
