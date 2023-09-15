import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'
import { colors } from '../../styles/stylesVariables.js'
// Components
import SearchArea from './SearchArea'
import CountriesList from './CountriesList'

export default function MainScreen({ navigation }) {
	const [status, setStatus] = useState('loading')
	const [staticListItems, setStaticListItems] = useState([])
	const [listItems, setListItems] = useState([])
	
	const fetchData = () => {
		setStatus('loading')
		axios.get('https://restcountries.com/v3.1/all')
			.then(res => {
				setListItems(res.data)
				setStaticListItems(res.data)
				setStatus('success')
			})
			.catch(err => setStatus('error'))
	}
	
	useEffect(() => {
		fetchData()
	}, [])
	
	return (
		<View style={styles.mainContainer}>
			<SearchArea
				staticListItems={staticListItems}
				listItems={listItems}
				setListItems={setListItems}
				styles={styles}
			/>
			<CountriesList
				handleFetchData={fetchData}
				status={status}
				setStatus={setStatus}
				listItems={listItems}
				navigation={navigation}
				styles={styles}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	flatList: {
		padding: 5
	},
	listItemCommonName: {
		fontFamily: 'Open Sans',
		fontSize: 17,
		fontWeight: '700',
		textAlign: 'center'
	},
	listContainer: {
		flex: 1,
	},
	listItemContainer: {
		alignItems: 'center',
		backgroundColor: colors.cardBg,
		borderColor: colors.borderColor,
		borderWidth: 1,
		flex: 1,
		gap: 5,
		margin: 5,
		padding: 15
	},
	listItemImage: {
		flex: 1
	},
	listItemImageContainer: {
		aspectRatio: 2/1,
		width: '100%'
	},
	listItemOfficialName: {
		fontFamily: 'Open Sans',
		textAlign: 'center'
	},
	listItemTextContainer: {
		width: '100%'
	},
	loadingContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	mainContainer: {
		backgroundColor: colors.white,
		flex: 1
	},
	searchArea: {
		borderColor: colors.borderColor,
		borderBottomWidth: 1,
		flexDirection:'row',
		padding: 10
	},
	searchBtnContainer: {
		alignItems: 'center',
		backgroundColor: colors.dark,
		flex: 1,
		justifyContent: 'center'
	},
	searchBtnIcon: {
		color: colors.white
	},
	searchInput: {
		backgroundColor: colors.inputBg,
		flex: 4,
		fontFamily: 'Open Sans',
		fontSize: 16,
		paddingHorizontal: 18,
		paddingVertical: 14
	}
})