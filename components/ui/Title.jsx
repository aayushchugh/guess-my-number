import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const Title = props => {
	return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.accent500,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.accent500,
		padding: 12,
	},
});

export default Title;
