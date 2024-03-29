import "./clock3.css";
import moment from "moment";
import React, { useState, useEffect } from "react";

const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());
  // const dateTime = moment();
  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  const minute = dateTime.format("mm");
  const second = dateTime.format("ss");

  let message = "";
  if (hour > 6 && hour < 11) message = "Morning";
  else if (hour >= 11 && hour < 17) message = "Afternoon";
  else if (hour >= 17 && hour < 21) message = "Evening";
  else message = "Night";

  useEffect(() => {
    /* Bu kısım ilk renderda çalışır */
    const sayac = setInterval(() => {
      console.log("Deneme");
      setDateTime(moment());
    }, 1000); /* (ilk yazim) bu kod 1 sn bekler ve calistir sonra 1 sn bekler calistir ve biz durdurana kadar (clearInterval ile) bu devam eder.*/

    /* bu kısım {return()} ise unmount işlemi sırasında çalışır */
    return () => {
      clearInterval(sayac);
    };
  }, []);

  // setTimeout( ()=>{console.log("Merhaba");},1000)
  // setInterval(() => {
  //   setDateTime(moment());
  // }, 1000);

  // useEffect [] parametresi ile birlikte kullanıldığında sadece component ilk render
  // edildiğinde çalışır. Sornasındaki renderlarda çalışmaz.
  // Eğer useEffect kullanmasaydık setInterval içinde dateTime isimli state i değiştiren
  // bir komut olduğu için, her render işleminde yeni bir setInterval nesnesi oluşturulacak
  // bu oluşturulan her bir setInterval ise başka bir setInterval oluşturacaktı. Bu şekilde logaritmik
  // artan setInterval lar bir süre sonra uygulamayı yavaşlatıp, sonunda da cevap veremez hale getirecekti

  return (
    <div
      className="clock-container"
      style={{ color: props.yaziRengi, backgroundColor: props.zeminRengi }}
    >
      <div className="clock">
        {hour}
        {second % 2 == 0 ? ":" : " "}
        {minute}
      </div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};

export default Clock3;
