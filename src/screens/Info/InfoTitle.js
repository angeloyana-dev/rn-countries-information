import { View, Text } from 'react-native'

export default function InfoTitle({ info, styles }) {
	return (
		<View>
			<Text style={styles.nameCommon}>{info.heading.name}</Text>
			<Text style={styles.nameOfficial}>{info.heading.subName}</Text>
		</View>
	)
}