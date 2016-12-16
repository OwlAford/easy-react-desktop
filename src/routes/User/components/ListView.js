import React, { PropTypes } from 'react'
import Item from './ItemView'

const List = ({ groups }) => (
  <ul>
    {groups.map((item, i) =>
      <Item
        key={i}
        {...item}
      />
    )}
  </ul>
)

List.propTypes = {
  groups: PropTypes.array.isRequired
}

export default List
