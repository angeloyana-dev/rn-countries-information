import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

export default function ItemCard({ item, navigation, styles }) {
	const handleOpenInfo = () => {
		navigation.navigate("Info", { info: item })
	}
	
	return (
		<TouchableWithoutFeedback onPress={handleOpenInfo}>
			<View style={styles.listItemContainer}>
			  <View style={styles.listItemImageContainer}>
			  	<Image
			  		source={{ uri: item.flags.png }}
			  		style={styles.listItemImage}
			  	/>
			  </View>
			  <View style={styles.listItemTextContainer}>
			  	<Text style={styles.listItemCommonName}>{item.name.common}</Text>
			  	<Text style={styles.listItemOfficialName}>{item.name.official}</Text>
			  </View>
			</View>
		</TouchableWithoutFeedback>
	)
}