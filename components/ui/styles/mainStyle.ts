import { StyleSheet } from "react-native";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { appColors } from "../colors/appColors";
const isDarkMode = useDarkMode();

export const styles = StyleSheet.create({
    background:{
        backgroundColor: isDarkMode ? appColors.dark.background : appColors.light.background,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });