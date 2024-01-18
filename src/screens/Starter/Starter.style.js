import { StyleSheet, TouchableHighlight, Text} from "react-native";
import palette from "../../styles/colours";

const getStyles = (screenDimensions) => {
  const isTablet = screenDimensions.width > 1000;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 20,
       backgroundColor: '#310E68',

    },
    innerContainer: {
      flex: 0.6,
      flexDirection: "column",
      width: "90%",
      alignItems: "center",
      justifyContent: "space-around",
    },
    outerOptionsContainer: {
      width: "100%",
      alignItems: "center",
      marginTop: 20,
    },
    userNameStyle: {
      fontSize: 18,
      fontWeight: "bold",
      color: palette.offWhite,
      alignSelf: "center",
      marginTop: -2,
    },
    titleText: {
      fontSize: isTablet ? 70 : 40,
      fontWeight: "bold",
      fontFamily: "Blaka_400Regular",
      color: palette.primary,
      marginBottom: 10,
      zIndex: 2,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 10,
      color: palette.offWhite,
    },
    optionsContainer: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
    },
    homeImage: {
      height: 250,
      width: "90%",
      position: "absolute",
      bottom: -10,
      resizeMode: "contain",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
      backgroundColor: palette.offWhite,
      color: "black",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 10,
    },
    sliderContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 5,
    },
    slider: {
      width: "90%",
      height: 40,
    },
    questionType: {
      display: "flex",
      flexDirection: "column",
      marginTop: 5,
    },
     startButton: {
          width: "80%",
          backgroundColor: palette.primary,
          paddingVertical: 12,
          borderRadius: 20,
          alignItems: "center",
          marginTop: 20,
        },
        startButtonText: {
          color: palette.offWhite,
          fontSize: 18,
          fontWeight: "bold",
        },
  });

  return styles;
};

export default getStyles;
