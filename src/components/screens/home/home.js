// @flow
import React from 'react'
import { View, Text, Button } from 'react-native'
import type { ReduxProps } from '.'
import styles from './styles'

type Props = ReduxProps & {}

export default function Home(props: Props) {
  const { switchTextColor, textColor } = props

  return (
    <View style={styles.container}>
      <Button
        title="Change color"
        onPress={() => switchTextColor(textColor === 'red' ? 'blue' : 'red')}
      />
      <Text
        style={{
          color: textColor,
        }}
      >
        Home Screen
      </Text>
    </View>
  )
}
