const Jsx = () => {
  const ad = "Ziya Sari";

  const kullanici = {
    adi: "Refik",
    soyadi: "Gulak",
    email: "rgulak@gmail.com",
    telefon: 55555555,
  };

  return (
    <div>
      <div>Merhaba {ad}</div>
      <div>
        Merhaba {kullanici.adi} {kullanici.soyadi}
      </div>
      <div>Eposta: {kullanici.email}</div>
    </div>
  );
};
export default Jsx;
