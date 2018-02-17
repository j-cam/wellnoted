import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import uuid from 'uuid';

class Date extends React.Component {


  formatDate(timestamp) {
    return (
      <FormattedDate
        key={uuid()}
        value={new Date(timestamp)}
        year='numeric'
        month='long'
        day='2-digit'
      />
    );
  }

  formatTime(timestamp) {
    return (
      <FormattedTime
        key={uuid()}
        value={new Date(timestamp)}
      />
    );
  }
  render() {

    const timestamp = this.props.timestamp;
    console.log(timestamp);
    const creationDate = typeof timestamp !== 'undefined' && timestamp.length !== 0;
    return (
      <React.Fragment>
        {
          creationDate
          ? [this.formatDate(timestamp), " at ", this.formatTime(timestamp)]
          : ''
        }
      </React.Fragment>
    )
  }
}

export default Date;