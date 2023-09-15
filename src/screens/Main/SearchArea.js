import { useState } from 'react'
import { View, TextInput, TouchableNativeFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { colors } from '../../styles/stylesVariables.js'

export default function SearchArea({ staticListItems, listItems, setListItems, styles }) {
	const [searchInput, setSearchInput] = useState('')
	
	const handleSearchInput = (e) => {
		if(e === '') setListItems(staticListItems)
		setSearchInput(e)
	}
	
	const handleSearchTrigger = () => {
		if(searchInput === '') return
		setListItems(listItems.filter((item) => {
			return item.name.common
				.toLowerCase().includes(
					searchInput
						.toLowerCase().trim()
				) ||
			item.name.official
				.toLowerCase().includes(
					searchInput
						.toLowerCase().trim()
				)
		}))
	}
	
	return (
		<View style={styles.searchArea}>
		  <TextInput
		  	placeholder="Search by name"
		  	cursorColor={colors.dark}
		  	onChangeText={handleSearchInput}
		  	value={searchInput}
		  	style={styles.searchInput}
		  />
		  <TouchableNativeFeedback
		  	onPress={handleSearchTrigger}
		  	background={TouchableNativeFeedback.Ripple(colors.rippleDark, false)}
		  >
			  <View style={styles.searchBtnContainer}>
			  	<FontAwesomeIcon
			  		icon="magnifying-glass"
			  		style={styles.searchBtnIcon}
			  	/>
			  </View>
		  </TouchableNativeFeedback>
		</View>
	)
}