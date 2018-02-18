import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import uuid from 'uuid';


class MetaDate extends React.Component {

  render() {
    const date = this.props.date;

    return <span className={this.props.className}>
              <FormattedDate
                key={uuid()}
                value={new Date(date)}
                year='numeric'
                // month='short'
                month='2-digit'
                day='2-digit'
              />
              <span>,&nbsp;</span>
              <FormattedTime
                key={uuid()}
                value={new Date(date)}
              />
            </span>
  }

}

export default MetaDate;