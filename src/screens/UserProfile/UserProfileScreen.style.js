// UserProfileScreen.style.js
import { StyleSheet } from 'react-native';
import palette from '../../styles/colours'; // Ensure this path is correct

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Use the background color from your palette
  },

    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      // Add any additional styling you may need for the background image
    },

  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: palette.grey, // Use grey from your palette
    color: palette.offBlack, // Use offWhite for input text
    backgroundColor: palette.offWhite, // Use a dark color for input background
    width: '100%',
  },

  submitButton: {
    backgroundColor: palette.secondary, // Use the primary color for your submit button
    borderRadius: 20, // Adjust for rounded corners
    padding: 15,
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    opacity: 1, // Fully opaque
  },
  submitButtonText: {
    textAlign: 'center',
    color: palette.offWhite, // Text color that contrasts with the button color
    fontSize: 18,
  },
  button: {
    marginVertical: 30,
    backgroundColor: palette.accent, // Use accent color for other buttons
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  buttonText: {
    color: palette.offWhite, // Use offWhite for button text
    fontSize: 18,
  },
});
