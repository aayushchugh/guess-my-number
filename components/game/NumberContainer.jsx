import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderRadius: 8,
		borderColor: Colors.accent500,
		padding: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.accent500,
		fontSize: 36,
		fontWeight: 'bold',
	},
});

export default NumberContainer;
