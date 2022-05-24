import mdToPdf from 'md-to-pdf';

const run = async () => {
  await mdToPdf({
    path: 'README.md'
  }, {
    dest: 'README.pdf',
  }).catch(console.error);
};

run();
