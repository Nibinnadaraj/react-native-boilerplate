import { StyleSheet } from 'react-native';
import { appColors } from '../../colors/appColors';


/**
 * Styles for the app component
 * @mainstylesDark - Contains the sytyles in dark mode.
 * @mainstylesLight - Contains the sytyles in light mode.
 * @mainstylesShared - Contains the combined sytyles for both light & dark modes
 */

export const mainStylesDark = StyleSheet.create({
  background: {
    backgroundColor: appColors.dark.background
  },
});

export const mainStylesLight = StyleSheet.create({
  background: {
    backgroundColor: appColors.light.background
  },
});

export const mainStylesShared = StyleSheet.create({
  background: {
    backgroundColor: appColors.light.background
  },
});
