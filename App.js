import { useFonts } from 'expo-font'
// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot'
library.add(faMagnifyingGlass, faMapLocationDot)
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import MainScreen from './src/screens/Main/MainScreen'
import InfoScreen from './src/screens/Info/InfoScreen'

const Stack = createNativeStackNavigator()
export default function App() {
	// Text fonts
	const [fontLoaded] = useFonts({
		'Open Sans': require('./src/assets/fonts/Open_Sans.ttf')
	})
	
	if(!fontLoaded) return null
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen
					name="Main"
					component={MainScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Info" component={InfoScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}