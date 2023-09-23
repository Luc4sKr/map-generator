import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { GridProvider } from "./app/shared/context/GridContext.tsx";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GridProvider>
			<App />
		</GridProvider>
	</React.StrictMode>,
)
