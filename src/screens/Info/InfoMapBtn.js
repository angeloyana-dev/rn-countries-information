import { View, TouchableNativeFeedback, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function InfoMapBtn({ mapUrl, styles }) {
	const handleOpenMap = () => {
		Linking.openURL(mapUrl)
	}
	
	return (
	<View style={styles.mapBtnContainer}>
		<TouchableNativeFeedback onPress={handleOpenMap}>
		  <View style={styles.mapBtn}>
		    <FontAwesomeIcon
		    	icon="map-location-dot"
		    	size={25}
		    	style={styles.mapBtnIcon}
		    />
		  </View>
		</TouchableNativeFeedback>
	</View>
	)
}