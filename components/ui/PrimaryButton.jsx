import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = props => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
				onPress={props.onPress}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.buttonText}>{props.children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		margin: 4,
		overflow: 'hidden',
	},

	buttonInnerContainer: {
		borderRadius: 28,
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},

	buttonText: {
		color: '#fff',
		textAlign: 'center',
	},

	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
