
import React from "react";
import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'
const data = {
    "name": "root",
    "children": [
      {
        "name": "node.0",
        "value": 12
      },
      {
        "name": "node.1",
        "value": 68
      },
      {
        "name": "node.2",
        "value": 4
      },
      {
        "name": "node.3",
        "value": 34
      },
      {
        "name": "node.4",
        "value": 27
      },
      {
        "name": "node.5",
        "value": 43
      },
      {
        "name": "node.6",
        "value": 96
      }
    ]
    }
export const MyResponsiveCirclePackingCanvas = ({ data /* see data tab */ }) => (
    <ResponsiveCirclePackingCanvas
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        valueFormat=" >-"
        colors={{ scheme: 'spectral' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={1}
        leavesOnly={true}
        enableLabels={true}
        label="value"
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2.4 ] ] }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
        animate={false}
    />
)