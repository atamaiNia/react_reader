import { Reader } from 'components/Reader/Reader';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import publications from './publication.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reader items={publications} />
  </React.StrictMode>
);
