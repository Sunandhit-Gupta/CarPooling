import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const DateTimeSelector = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <div>
      <Datetime
        value={selectedDateTime}
        onChange={(date) => setSelectedDateTime(date)}
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm"
        inputProps={{ placeholder: 'Select date and time' }}
      />
    </div>
  );
};

export default DateTimeSelector;
