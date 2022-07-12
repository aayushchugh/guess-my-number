import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = props => {
	const initialGuess = generateRandomBetween(1, 100, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.screen}>
			<View>
				<Title>Opponent Score</Title>
				<Text></Text>
			</View>

			<View>
				<Text>Higher or lower ? </Text>
				{/* TODO: + - */}
			</View>

			<View>{/* TODO: Log rounds */}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 50,
	},
});

export default GameScreen;
