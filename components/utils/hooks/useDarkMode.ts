import { useColorScheme } from "react-native"

export const useDarkMode =()=>{
    const isDarkMode = useColorScheme() === 'dark';
    return isDarkMode;
}