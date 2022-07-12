import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = props => {
	const initialGuess = generateRandomBetween(1, 100, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < props.userNumber) ||
			(direction === 'greater' && currentGuess > props.userNumber)
		) {
			Alert.alert('Dont lie!', 'You know that is wrong.....', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRandNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandNumber);
	};

	return (
		<View style={styles.screen}>
			<View>
				<Title>Opponent Score</Title>
				<NumberContainer>{currentGuess}</NumberContainer>
			</View>

			<View>
				<Text>Higher or lower ? </Text>
				<View>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
						+
					</PrimaryButton>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
						-
					</PrimaryButton>
				</View>
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
