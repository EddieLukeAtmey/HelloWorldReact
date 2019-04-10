'use strict';

import { StyleSheet, } from 'react-native'

export const DefaultStyle = {

  text: StyleSheet.create({

    normal14: { fontSize: 14, color: '#333333' },
    normal18: { fontSize: 18, color: '#333333' },
    bold14: { fontSize: 14, color: '#333333', fontWeight: 'bold', },
    bold18: { fontSize: 18, color: '#333333', fontWeight: 'bold', },

  }),

  stackView: StyleSheet.create({
    vCenter10: { flex: 1, justifyContent: 'center', alignItems: "center", padding: 10 },
    hCenter10: { flex: 1, justifyContent: 'center', alignItems: "center", padding: 10, flexDirection: 'row', },
  }),
}
