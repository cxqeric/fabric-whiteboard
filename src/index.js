import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'class-names'

import modes from './utils/mode'
import {
  getWhiteBoardData,
  loadWhiteBoardData,
  addWhiteBoardObject,
  removeWhiteBoardObjects,
  modifyWhiteBoardObjects,
  clearWhiteBoardContext,
  createWhiteBoardSelection,
  updateWhiteBoardSelection,
  clearWhiteBoardSelection,
} from './utils/handler'

import Board from './board'
import ToolBar from './toolbar'

import './style.scss'

class WhiteBoard extends Component {
  constructor(props) {
    super(props)

    this.board = undefined
    this.toolbar = undefined
  }

  componentDidMount() {
    this.refs = {
      board: this.board,
      toolbar: this.toolbar,
    }
  }

  render() {
    const {
      visible,
      className,
      width,
      height,
      showToolbar,
      showBoard,
      enableBoard,
      enableToolbar,
      mode,
      fontSize,
      brushColor,
      brushColors,
      brushThickness,
      brushThicknessRange,
      onModeClick,
      onBrushColorChange,
      onBrushThicknessChange,
      onObjectAdded,
      onObjectsModified,
      onObjectsRemoved,
      onSelectionCreated,
      onSelectionUpdated,
      onSelectionCleared,
    } = this.props

    if (visible === true) {
      return (
        <div className={classNames('fabric-whiteboard', className)}>
          <Board
            ref={(ref) => {
              this.board = ref
            }}
            visible={showBoard}
            enabled={enableBoard}
            mode={mode}
            width={width}
            height={height}
            fontSize={fontSize}
            brushColor={brushColor}
            brushThickness={brushThickness}
            onObjectAdded={onObjectAdded}
            onObjectsModified={onObjectsModified}
            onObjectsRemoved={onObjectsRemoved}
            onSelectionCreated={onSelectionCreated}
            onSelectionUpdated={onSelectionUpdated}
            onSelectionCleared={onSelectionCleared}
          />
          <ToolBar
            ref={(ref) => {
              this.toolbar = ref
            }}
            visible={showToolbar}
            enabled={enableToolbar}
            mode={mode}
            fontSize={fontSize}
            brushColor={brushColor}
            brushColors={brushColors}
            brushThickness={brushThickness}
            brushThicknessRange={brushThicknessRange}
            onModeClick={onModeClick}
            onBrushColorChange={onBrushColorChange}
            onBrushThicknessChange={onBrushThicknessChange}
          />
        </div>
      )
    } else return <React.Component />
  }
}

WhiteBoard.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  showToolbar: PropTypes.bool,
  enableToolbar: PropTypes.bool,
  showBoard: PropTypes.bool,
  enableBoard: PropTypes.bool,
  mode: PropTypes.oneOf(modes),
  fontSize: PropTypes.number,
  brushColor: PropTypes.string,
  brushColors: PropTypes.arrayOf(PropTypes.string),
  brushThickness: PropTypes.number,
  brushThicknessRange: PropTypes.arrayOf(PropTypes.number),
  onModeClick: PropTypes.func,
  onBrushColorChange: PropTypes.func,
  onBrushThicknessChange: PropTypes.func,
  onObjectAdded: PropTypes.func,
  onObjectsModified: PropTypes.func,
  onObjectsRemoved: PropTypes.func,
  onSelectionCreated: PropTypes.func,
  onSelectionUpdated: PropTypes.func,
  onSelectionCleared: PropTypes.func,
}

WhiteBoard.defaultProps = {
  visible: true,
  className: '',
  width: '400px',
  height: '380px',
  showToolbar: true,
  enableToolbar: true,
  showBoard: true,
  enableBoard: true,
  mode: modes[0],
  fontSize: 22,
  brushColor: '#f44336',
  brushColors: [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
  ],
  brushThickness: 2,
  brushThicknessRange: [2, 3, 4, 5, 6, 7, 8],
  onModeClick: () => {},
  onBrushColorChange: () => {},
  onBrushThicknessChange: () => {},
  onObjectAdded: (json) => {},
  onObjectsModified: () => {},
  onObjectsRemoved: () => {},
  onSelectionCreated: () => {},
  onSelectionUpdated: () => {},
  onSelectionCleared: () => {},
}

export {
  WhiteBoard as default,
  getWhiteBoardData,
  loadWhiteBoardData,
  addWhiteBoardObject,
  removeWhiteBoardObjects,
  modifyWhiteBoardObjects,
  clearWhiteBoardContext,
  createWhiteBoardSelection,
  updateWhiteBoardSelection,
  clearWhiteBoardSelection,
}
