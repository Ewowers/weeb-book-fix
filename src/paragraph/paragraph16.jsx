import { Typography, Table } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph16 = () => {
  return (
    <>
      <Title>Заменимые и незаменимые аминокислоты</Title>
      <Paragraph>
        Аминокислоты – сложные органические вещества, состоящие из углеводородного радикала, который может включать серу или фосфор, и двух функциональных групп -NH2 и -COOH. По
        признаку выделяют заменимые и незаменимые аминокислоты.
      </Paragraph>
      <Title level={4}>Аминокислоты</Title>
      <Paragraph>
        Аминокислоты – мономеры, состоящие из углеводорода, азота и кислорода. Некоторые соединения содержат серу, фосфор и некоторые другие элементы. Это производные карбоновых
        кислот с группой -COOH. Одна аминокислота может содержать несколько аминогрупп.
      </Paragraph>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52640-stroenie-aminokislot.jpg" alt="" />
      <Paragraph>
        Аминокислоты – кристаллические соединения, растворимые в воде. Они проявляют амфотерные свойства и могут реагировать с неорганическими веществами – кислородом, водой,
        кислотами, щелочами.
      </Paragraph>
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        Аминокислоты образуют полимеры – белки, которые могут состоять из различных мономеров. К примеру, казеин включает тирозин, лизин, валин, пролин и другие аминокислоты.
      </div>
      <Title level={4}>Заменимые и незаменимые</Title>
      <Paragraph>
        Всего известно около 500 аминокислот. Аминокислоты классифицируются по разным признакам в зависимости от строения, состава, физических свойств. Из всего количества
        аминокислот только 22 используются организмом для синтеза в первую очередь различных белков. Важные для организма аминокислоты классифицируют на три группы:
      </Paragraph>
      <ul>
        <li>заменимые – синтезируются внутри организма;</li>
        <li>незаменимые – не синтезируются в организме;</li>
        <li>частично заменимые – не синтезируются в организме в большом количестве.</li>
      </ul>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52640-klassifikaciya-aminokislot.jpg" alt="" />
      <Paragraph>
        Заменимые аминокислоты образуются из веществ, поступивших в организм вместе с пищей. Незаменимые не могут образовываться в организме, поэтому поступают к клеткам в готовом
        виде. Их отсутствие приводит к снижению умственной деятельности, памяти, иммунитета. Частично заменимые или частично незаменимые аминокислоты синтезируются в организме, но
        большая их часть попадает в организм в готовом виде вместе с пищей.
      </Paragraph>
      <Paragraph>В таблице заменимых и незаменимых аминокислот перечислены вещества с молекулярными формулами.</Paragraph>
      <Table
        dataSource={[
          {
            de1: "Аланин",
            de2: "C3H7NO2",
            de3: "Лейцин",
            de4: "C6H13NO2",
            de5: "Тирозин",
            de6: "C9H11NO3",
            key: 0,
          },
          {
            de1: "Аспарагин",
            de2: "C4H8N2O3",
            de3: "Изолейцин",
            de4: "C6H13NO2",
            de5: "Цистеин",
            de6: "C3H7NO2S",
            key: 1,
          },
          {
            de1: "Глицин",
            de2: "C2H5NO2",
            de3: "Валин",
            de4: "C5H11NO2",
            de5: "Гистидин",
            de6: "C6H9N3O2",
            key: 2,
          },
          {
            de1: "Карнитин",
            de2: "C7H15NO3",
            de3: "Фенилаланин",
            de4: "C9H11NO2",
            de5: "Аргинин",
            de6: "C6H14N4O2",
            key: 3,
          },
          {
            de1: "Орнитин",
            de2: "C5H12N2O2",
            de3: "Триптофан",
            de4: "C11H12N2O2",
            key: 4,
          },
          {
            de1: "Пролин",
            de2: "C5H9NO2",
            de3: "Треонин",
            de4: "C4H9NO3",
            key: 5,
          },
          {
            de1: "Серин",
            de2: "C3H7NO3",
            de3: "Лизин",
            de4: "C6H14N2O2",
            key: 6,
          },
          {
            de1: "Таурин",
            de2: "C2H7NO3S",
            de3: "Метионин",
            de4: "C5H11NO2S",
            key: 7,
          },
          {
            de1: "Глутамин",
            de2: "C5H10N2O3",
            key: 8,
          },
          {
            de1: "Глутаминовая кислота",
            de2: "C5H9NO4",
            key: 8,
          },
        ]}
        columns={[
          { title: "Заменимые", dataIndex: "de1", key: "key" },
          { title: "Формула", dataIndex: "de2", key: "key" },
          { title: "Незаменимые", dataIndex: "de3", key: "key" },
          { title: "Формула", dataIndex: "de4", key: "key" },
          { title: "Частично заменимые", dataIndex: "de5", key: "key" },
          { title: "Формула", dataIndex: "de6", key: "key" },
        ]}
      />
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        Незаменимые кислоты содержатся в бобовых, рисе, красном и белом мясе, рыбе, яйцах, молочных продуктах. При сбалансированном питании человек получает все необходимые
        аминокислоты.
      </div>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52640-produkty-s-nezamenimymi-aminokislotami.jpg" alt="" />
    </>
  );
};
