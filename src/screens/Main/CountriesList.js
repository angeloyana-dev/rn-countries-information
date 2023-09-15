import { FlatList, View, ActivityIndicator } from 'react-native'
import { colors } from '../../styles/stylesVariables.js'
// Components
import Error from '../../components/Error'
import NotFound from '../../components/NotFound'
import ItemCard from './ItemCard'

export default function CountriesList({ handleFetchData, status, listItems, styles, navigation }) {
	if(status === 'loading') {
		return (
			<View style={styles.loadingContainer}>
			  <ActivityIndicator size="large" color={colors.dark} />
			</View>
		)
	}
	
	if(status === 'error') {
		return (
			<Error
				message="Network connection error!"
				onPress={handleFetchData}
			/>
		)
	}
	
	if(listItems.length === 0) return <NotFound message="Country not found!" />
	
	return (
		<View style={styles.listContainer}>
			<FlatList
				data={listItems}
				keyExtractor={(item) => item.name.common}
				renderItem={({ item }) => <ItemCard item={item} navigation={navigation} styles={styles} />}
				numColumns={2}
				style={styles.flatList}
			/>
		</View>
	)
}