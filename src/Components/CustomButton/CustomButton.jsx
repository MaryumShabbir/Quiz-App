import { Text, TouchableOpacity, Dimensions } from "react-native";
import getStyles from "./CustomButton.style";
import palette from "../../styles/colours";

const CustomButton = ({
  fullWidth,
  buttonText,
  width,
  disabled,
  type,
  onPress,
}) => {
  const screenDimensions = Dimensions.get("screen");
  const styles = getStyles(screenDimensions);

  // Define additional button styling for disabled state
  const disabledButtonStyle = {
    backgroundColor: 'transparent', // Or any other color when the button is disabled
    opacity: 0.5, // Make button half transparent when disabled
  };

  // Define additional text styling for disabled state
  const disabledTextStyle = {
    color: palette.grey, // Or any color that indicates the button is disabled
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width || "auto",
          backgroundColor: disabled ? "transparent" : palette[type],
          borderColor: palette[type],
          alignSelf: fullWidth ? "stretch" : "center",
        },
        disabled && disabledButtonStyle, // Apply the disabled styles conditionally
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          { color: disabled ? palette.grey : "white" },
          disabled && disabledTextStyle, // Apply the disabled text styles conditionally
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
