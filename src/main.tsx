import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { AuthProvider } from './providers/auth-provider'
import { TranslationProvider } from './providers/translation-provider'
import { store } from './services/api/store'
import Router from './services/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TranslationProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </TranslationProvider>
    </Provider>
    
  </React.StrictMode>,
);
