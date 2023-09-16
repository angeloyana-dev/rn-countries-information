import { View, Image } from 'react-native'

export default function InfoImages({ images, styles }) {
	return (
		<View style={styles.imagesContainer}>
			<Image
				source={{ uri: images.flag }}
				style={styles.imageflag}
			/>
			{
				images.coatOfArms && <Image
					source={{ uri: images.coatOfArms }}
					style={styles.imageCoatOfArms}
				/>
			}
		</View>
	)
}