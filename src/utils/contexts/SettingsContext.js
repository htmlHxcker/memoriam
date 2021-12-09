import React, { createContext, useContext } from 'react';

const SettingsContext = createContext();

export function useSettings() {
	const context = useContext(SettingsContext);
	if (!context) {
		throw new Error('useSettings must be used within a SettingsProvider');
	}
	return context;
}

const SettingsProvider = ({ settings, children }) => {
	return (
		<SettingsContext.Provider value={settings}>
			{children}
		</SettingsContext.Provider>
	);
};

export default SettingsProvider;
