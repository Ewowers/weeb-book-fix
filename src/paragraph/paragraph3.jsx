import { Typography } from "antd";
import img1 from "../image/img9.jpg";
import img2 from "../image/img10.jpg";
import img3 from "../image/img11.jpg";
const { Title, Paragraph } = Typography;

export const Paragraph3 = () => {
  return (
    <>
      <Title>Гибридизация атомных орбиталей</Title>
      <Paragraph>
        Гибридизация атомных орбиталей – процесс, позволяющий понять, как атомы видоизменяют свои орбитали при образовании соединений. Так, что же такое гибридизация, и какие ее
        типы существуют?
      </Paragraph>
      <Title level={4}>Общая характеристика гибридизации атомных орбиталей</Title>
      <Paragraph>
        Гибридизация атомных орбиталей – это процесс, при котором смешиваются различные орбитали центрального атома, в результате чего образуются одинаковые по своим
        характеристикам орбитали.
      </Paragraph>
      <Paragraph style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>Гибридизация происходит в процессе образования ковалентной связи.</Paragraph>
      <Paragraph>
        Гибридная орбиталь имеет фору знака бесконечности или несимметричной перевернутой восьмерки, вытянутой в сторону от атомного ядра. Такая форма обусловливает более сильное,
        чем в случае чистых атомных орбиталей, перекрывание гибридных орбиталей с орбиталями (чистых или гибридных) других атомов и приводит к образованию более прочных ковалентных
        связей.
      </Paragraph>
      <img src={img1} alt="img1" />
      <Paragraph strong>
        Впервые идею о гибридизации атомных орбиталей выдвинул американский ученый Л. Полинг. Он считал, что у вступающего в химическую связь атома имеются разные атомные орбитали
        (s-, p-, d-, f-орбитали), то в результате происходит гибридизация этих орбиталей. Суть процесса заключается в том, что из разных орбиталей образуются эквивалентные друг
        другу атомные орбитали.
      </Paragraph>
      <Title level={4}>Типы гибридизации атомных орбиталей</Title>
      <Paragraph>Существует несколько видов гибридизации: </Paragraph>
      <ul>
        <li>
          sp-гибридизация. Этот вид гибридизации происходит, когда смешиваются одна s-орбиталь и одна p-орбиталь. В результате образуются две полноценных sp-орбиталей. Эти орбитали
          расположены к атомному ядру таким образом, что угол между ними составляет 180 градусов.
        </li>
        <img src={img2} alt="img2" />
        <li>
          sp2-гибридизация. Этот вид гибридизации происходит, когда смешиваются одна s-орбиталь и две p-орбитали. В результате происходит образование трех гибридных орбиталей,
          которые расположены в одной плоскости под углом 120 градусов друг к другу.
        </li>
        <li>
          sp3-гибридизация. Этот вид гибридизации происходит, когда смешиваются одна s-орбиталь и три p-орбитали. В результате происходит образование четырех полноценных
          sp3-орбиталей. Эти орбитали направлены к вершине тетраэдра и располагаются друг к другу под углом 109,28 градусов.
        </li>
      </ul>
      <Paragraph style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        sp3-гибридизация характерна для многих элементов, например, атома углерода и других веществ IVА группы (CH4, SiH4, SiF4, GeH4 и др.)
      </Paragraph>
      <img src={img3} alt="img3" />
      <Paragraph>Возможны также и более сложные виды гибридизации с участием d-орбиталей атомов.</Paragraph>
    </>
  );
};
