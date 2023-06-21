import React from 'react';
import { useRouter } from 'next/router';
import Header from 'layouts/Header';

const Item: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Header />
      <div className="main">
        <div className="back">
          <img src="/item/icons/arrow-left.svg" alt="" />
          <span>Volver a productos</span>
        </div>
        <div className="title">Boquerones lindos</div>
        <div className="main-content">
          <div className="avatars">
            <div className="logo">
              <div>logo</div>
              EL FARO DE TEST
            </div>
            <div className="content">
              <div className="small-avatar">

              </div>
              <div className="main-avatar">
                <img src="/item/product.png" />
              </div>
            </div>
          </div>
          <div className="description">
            <p>AÑADIR</p>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Por unidad
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Por peso
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Por comensal
                </label>
              </li>
            </ul>

            <div>
              <span>Peso aproximado 12 kg</span>
              <span>12.00 €/ Kg</span>
            </div>
            <div>
              <button>-</button>
              <input type="text" />
              <button>+</button>
            </div>
            <div>
              <label>PREPARACIÓN*</label>
              <select>
                <option>Limpio entero</option>
              </select>
            </div>
            <div>
              <label>ALTERNATIVA (OPCIONAL)</label>
              <textarea>
                Anote una alternativa de compra si no se encuentra este producto disponible
              </textarea>
            </div>
            <div>
              <p>
                <span>TOTAL</span>
                <span>144.00 €</span>
              </p>
            </div>
            <button>Añadir al carrito</button>
          </div>
        </div>
        <div className="etc-content">
          <p className="title">DESCRIPCIÓN DEL PRODUCTO</p>
          <p className="description">
            El boquerón es un pescado azul, no contienen carbohidratos ni azúcar. Por cada 100 gramos nos aporta 6 gramos de grasa rica en ácidos grasos omega-3, 21’50 gramos de proteínas que lo conviente en una excelente fuente de proteinas, 142 calorias, 1’10 mg de vitamina B6 y 11’60 mg de Vitamina B3....
          </p>
          <span>Ver más</span>
          <div className="params">
            <p className="title">IDEAL PARA PREPARAR:</p>
            <p className="content">Frito, crudo.</p>
          </div>
          <div className="categories">
            <p className="title">CATEGORÍAS</p>
            <div className="content">
              <button>PESCADO</button>
              <button>PESCADO AZUL</button>
            </div>
          </div>
          <div className="tags">
            <p className="title">TAGS</p>
            <div className="content">
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
              <button>MAGNESIO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;