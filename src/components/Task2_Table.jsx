import React from "react";

const favoriteMotorcycles = [
  {
    id: 1,
    model: "Kovi Lite 300",
    brand: "Kovi",
    year: 2025,
    spec: "Ендуро, ~300 куб. см",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBG8X_dKLS1qFkStBC-q1HYtsTNfx39TmdNWKRKLf4g&s=10",
  },
  {
    id: 2,
    model: "Suzuki Bandit 250",
    brand: "Suzuki",
    year: 1995,
    spec: "Стріт / нейкед, 250 куб. см",
    photo:
      "https://www.adamoto.net/storage/images/catalog/suzuki/bandit_250-v-vz/6311_1.jpg",
  },
  {
    id: 3,
    model: "Geon Tossa",
    brand: "Geon",
    year: 2018,
    spec: "Дорожній / міський мотоцикл",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVbslnvplNMqtc1xlo2nzAJLn7PXxcDLglDVmjR5l9zT82erIiHygfdeB&s=10",
  },
];

export default function Task2_Table() {
  return (
    <div className="task2-box">
      <table className="task2-table">
        <thead>
          <tr>
            <th>Модель</th>
            <th>Марка</th>
            <th>Рік</th>
            <th>Клас / об'єм</th>
            <th>Фото</th>
          </tr>
        </thead>
        <tbody>
          {favoriteMotorcycles.map((moto) => (
            <tr key={moto.id}>
              <td>{moto.model}</td>
              <td>{moto.brand}</td>
              <td>{moto.year}</td>
              <td>{moto.spec}</td>
              <td>
                <img src={moto.photo} alt={moto.model} width="60" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
