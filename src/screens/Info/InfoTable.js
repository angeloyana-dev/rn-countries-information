import { View, Text } from 'react-native'

export default function InfoTable({ tableData, styles }) {
	
	return (
		<View style={styles.tableContainer}>
			{
				Object.keys(tableData).map((key) => {
					return (
						<View style={styles.tableRow} key={key}>
							<Text style={styles.tableData}>{key}</Text>
							<Text style={styles.tableData}>{tableData[key] || 'N/A'}</Text>
						</View>
					)
				})
			}
		</View>
	)
}