import React from 'react'
import { connect } from 'redux-zero'

import GridComponent from '../components/grid/GridComponent'

const mapStateToProps = ({ grid }) => ({ grid })

/** Container component that maps application state to the Grid component props. */
export default connect(mapStateToProps)(({ grid }) => (
  <GridComponent grid={grid}/>
))
