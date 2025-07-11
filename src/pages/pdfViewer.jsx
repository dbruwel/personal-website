import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const PdfViewer = () => {
  const { filename } = useParams();
  const safeFilename = encodeURIComponent(filename);

  useEffect(() => {
    window.location.href = `/files/${safeFilename}`;
  }, []);

  return null;

  // return (
  //   <iframe
  //     src={`/files/${safeFilename}`}
  //     title='PDF Viewer'
  //     style={{
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       width: '100vw',
  //       height: '100vh',
  //       border: 'none',
  //     }}
  //   />
  // );
};

export default PdfViewer;
