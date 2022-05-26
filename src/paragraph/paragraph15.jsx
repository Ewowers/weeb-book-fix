import { Table, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph15 = () => {
  return (
    <>
      <Title>Заменимые аминокислоты</Title>
      <Paragraph>
        Для полноценного функционирования организма используются 22 аминокислоты. Они классифицируются на три группы – заменимые, незаменимые и условно незаменимые аминокислоты.
        Всего насчитывается десять заменимых аминокислот.
      </Paragraph>
      <Title level={4}>Общее описание</Title>
      <Paragraph>
        Аминокислоты – производные карбоновых кислот. Они содержат аминогруппу и карбоксильную группу. Общая формула аминокислот – NH2-R-COOH. Радикал между двумя функциональными
        группами – углеводород, который также может включать атомы серы или фосфора.
      </Paragraph>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52642-obschee-stroenie-aminokislot.jpg" alt="" />
      <Title level={4}>Аминокислоты классифицируются по нескольким признакам:</Title>
      <ul>
        <li>по количеству атомов углерода между функциональными группами – α-, β-, γ-, δ-, ε- и другие аминокислоты;</li>
        <li>по радикалу: алифатические, гетероциклические, ароматические, иминокислоты (содержат группу NH);</li>
        <li>по физическим свойствам – гидрофобные и гидрофильные.</li>
      </ul>
      <Paragraph>С биологической точки зрения аминокислоты, необходимые для функционирования живого организма, классифицируют на три обширные группы:</Paragraph>
      <ul>
        <li>заменимые, синтезируемые из веществ, попадающих в организм вместе с пищей;</li>
        <li>незаменимые, не образующиеся в организме и поступающие к клеткам в готовом виде из пищи;</li>
        <li>частично заменимые, образующиеся в недостаточном количестве.</li>
      </ul>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52642-klassifikaciya-aminokislot.jpg" alt="" />
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        Заменимые, незаменимые и частично заменимые кислоты могут обладать различными свойствами и классифицироваться по разным признакам. Например, аланин – алифатическая
        аминокислота, имеющая форму α-аланина и β-аланина.
      </div>
      <Title level={4}>Формулы и функции</Title>
      <Paragraph>
        Главное назначение аминокислот – синтез белка. Это сложные органические вещества, отличающиеся строением и выполняющие в организме различные функции. Из белка состоят
        мышечные ткани, кровь, гормоны. Белки участвуют в передаче импульсов, веществ, являются катализаторами и антителами.
      </Paragraph>
      <Paragraph>Список заменимых аминокислот и их функций представлен в таблице.</Paragraph>
      <Table
        dataSource={[
          {
            gid: "Аланин",
            salt: "C3H7NO2",
            des: "Входит в состав белков и биологически активных веществ",
            key: 0,
          },
          {
            gid: "Аспарагин",
            salt: "C4H8N2O3",
            des: "Поддерживает нормальную работу нервной системы. Участвует в синтезе аммиака",
            key: 1,
          },
          {
            gid: "Глицин",
            salt: "C2H5NO2",
            des: "Входит в состав белков и биологически активных соединений. Выполняет рецепторную функцию в головном и спинном мозге",
            key: 2,
          },
          {
            gid: "Карнитин",
            salt: "C7H15NO3",
            des: "Осуществляет транспорт жирных кислот",
            key: 3,
          },
          {
            gid: "Орнитин",
            salt: "C5H12N2O2",
            des: "Синтезирует мочевину, является промежуточным веществом при синтезе аргинина",
            key: 4,
          },
          {
            gid: "Пролин",
            salt: "C5H9NO2",
            des: "Входит в состав коллагена",
            key: 5,
          },
          {
            gid: "Серин",
            salt: "C3H7NO3",
            des: "Участвует в построении различных белков, ферментов, других аминокислот",
            key: 6,
          },
          {
            gid: "Таурин",
            salt: "C2H7NO3S",
            des: "Входит в состав желчи, способствует заживлению ран",
            key: 7,
          },
          {
            gid: "Глутамин",
            salt: "C5H10N2O3",
            des: "Участвует в биосинтезе белков, углеводов и других аминокислот. Стимулирует иммунитет",
            key: 8,
          },
          {
            gid: "Глутаминовая кислота",
            salt: "C5H9NO4",
            des: "Выполняет рецепторную функцию, входит в состав белков",
            key: 9,
          },
        ]}
        columns={[
          { title: "Название", dataIndex: "gid", key: "key" },
          { title: "Формула", dataIndex: "salt", key: "key" },
          {
            title: "Функции",
            dataIndex: "des",
            key: "key",
          },
        ]}
      />
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52642-struktury-zamenimyh-aminokislot.jpg" alt="" />
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        К частично заменимым аминокислотам относятся тирозин, цистеин, гистидин. Они могут синтезироваться в организме, но их большая часть должна поступать вместе с пищей. Также к
        этой группе относят аргинин, так как он не вырабатывается у детей и подростков.
      </div>
    </>
  );
};
