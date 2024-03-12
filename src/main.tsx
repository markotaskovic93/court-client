import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './providers/auth-provider'
import { TranslationProvider } from './providers/translation-provider'
import Router from './services/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TranslationProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </TranslationProvider>
  </React.StrictMode>,
);
