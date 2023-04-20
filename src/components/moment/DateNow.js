import moment from "moment/moment";
import { useState, useEffect } from "react";

function DateNow() {
  const [tgl, setTgl] = useState();
  useEffect(() => {
    setTgl(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, []);

  return <> {tgl}</>;
}

export default DateNow;
