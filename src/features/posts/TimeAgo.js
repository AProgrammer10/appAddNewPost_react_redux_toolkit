import {parseISO, formatDistanceToNow} from 'date-fns'

import React from 'react'

const TimeAgo = ({timestamp}) => {

  let timeAgo = ''
  const date = parseISO(timestamp)
  const timePeriod = formatDistanceToNow(date)
  timeAgo = `${timePeriod} ago`

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
