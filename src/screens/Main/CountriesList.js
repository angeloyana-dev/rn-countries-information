import { FlatList, View } from 'react-native'
import { colors } from '../../styles/stylesVariables.js'
// Components
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import NotFound from '../../components/NotFound'
import ItemCard from './ItemCard'

export default function CountriesList({ handleFetchData, status, listItems, styles, navigation }) {
	if(status === 'loading') return <Loading size="large" color={colors.dark} />
	
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