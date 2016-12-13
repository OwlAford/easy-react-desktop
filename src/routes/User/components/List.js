import React, { PropTypes } from 'react'
import Item from './Item'

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
