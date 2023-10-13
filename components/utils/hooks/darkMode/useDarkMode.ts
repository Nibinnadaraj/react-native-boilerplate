import {useColorScheme} from 'react-native';

/**
 * React hook that returns the system is in dark/light mode.
 */
export const useDarkMode = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode;
};
