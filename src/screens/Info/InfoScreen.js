import { useLayoutEffect } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { colors } from '../../styles/stylesVariables.js'
import formatCountryInfo from '../../utils/formatCountryInfo.js'
// Components
import InfoImages from './InfoImages'
import InfoTitle from './InfoTitle'
import InfoTable from './InfoTable'
import InfoMapBtn from './InfoMapBtn'

export default function InfoScreen({ route, navigation }) {
	const info = formatCountryInfo(route.params.info)
	
	useLayoutEffect(() => {
		navigation.setOptions({
			title: info.heading.name,
			headerStyle: { backgroundColor: colors.dark },
			headerTintColor: colors.white
		})
	}, [navigation])
	
	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.infoContainer}>
				<InfoImages
					images={{
						flag: info.heading.flag,
						coatOfArms: info.heading.coatOfArms
					}}
					styles={styles}
				/>
				<InfoTitle
					info={info}
					styles={styles}
				/>
				<InfoTable
					tableData={info.table}
					styles={styles}
				/>
				<InfoMapBtn
					mapUrl={info.heading.map}
					styles={styles}
				/>
			</View>
		</ScrollView>
	)
}

const imagesHeight = 80
const styles = StyleSheet.create({
	imageCoatOfArms: {
		aspectRatio: 1,
		height: imagesHeight
	},
	imageflag: {
		aspectRatio: 2/1,
		height: imagesHeight
	},
	imagesContainer: {
		flexDirection: 'row',
		gap: 5
	},
	infoContainer: {
		backgroundColor: colors.white,
		borderColor: colors.borderColor,
		borderWidth: 1,
		gap: 10,
		alignItems: 'center',
		padding: 20
	},
	mapBtn: {
		backgroundColor: colors.mapBtnBg,
		padding: 15,
	},
	mapBtnContainer: {
		borderRadius: 50,
		overflow: 'hidden',
		width: '70%'
	},
	mapBtnIcon: {
		alignSelf: 'center',
		color: colors.white
	},
	nameCommon: {
		fontFamily: 'Open Sans',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	nameOfficial: {
		fontFamily: 'Open Sans',
		fontSize: 16,
		textAlign: 'center'
	},
	scrollContainer: {
		backgroundColor: colors.light,
		padding: 15
	},
	tableContainer: {
		width: '100%'
	},
	tableData: {
		alignSelf: 'center',
		flex: 1,
		fontFamily: 'Open Sans',
		padding: 10
	},
	tableRow: {
		borderColor: colors.borderColor,
		borderWidth: .5,
		flex: 1,
		flexDirection: 'row'
	}
})