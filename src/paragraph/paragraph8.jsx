import { Typography } from "antd";
import img3 from "../image/img20.jpg";
import img4 from "../image/img21.jpg";
const { Title, Paragraph } = Typography;
export const Paragraph8 = () => {
  return (
    <>
      <Title>Гидролиз солей</Title>
      <Paragraph>
        Гидролиз в широком смысле слова – это реакции обменного разложения между различными химическими веществами и водой. В чем суть гидролиза, и какие реакции ионного обмена
        существуют?
      </Paragraph>
      <Title level={4}>Сущность гидролиза солей</Title>
      <Paragraph>
        Гидролизом солей называется обменное взаимодействие соли с водой, что приводит к образованию слабого электролита. Возможность и характер протекания гидролиза определяется
        природой основания и кислоты, из которых образована соль.
      </Paragraph>
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>Слово «гидролиз» происходит от двух греческих слов «вода» и «разложение»</div>
      <Paragraph>Значит, во многих случаях важно, из какого вещества сделан тот или иной предмет.</Paragraph>
      <Paragraph>
        С точки зрения электролитической диссоциации сущность гидролиза в том, что ионы соли соединяются с водородными или гидроксильными ионами воды (иногда и с теми и с другими
        одновременно).
      </Paragraph>
      <Paragraph>
        Если при этом образуется слабый электролит, то равновесие реакции ионного обмена в растворе сдвигается в сторону протекания гидролиза. Нарушается равновесие реакции
        электролитической диссоциации воды и происходит изменение характера среды раствора (появляется избыток ионов H+ или OH- согласно ионному произведению воды).
      </Paragraph>
      <img src="https://obrazovaka.ru/wp-content/uploads/2018/09/tablica-gidroliz-soley-e1535839732910.png" />
      <Title level={4}>Реакции гидролиза солей</Title>
      <Paragraph>
        Если слабого электролита в результате взаимодействия с водой не образуется, то реакция гидролиза просто не идет. Это происходит в том случае, если соль образована катионом
        сильного основания и анионом сильной кислоты (например NaCl, K2SO4, NaNO3). Их водные растворы нейтральны (pH=7):{" "}
      </Paragraph>
      <Paragraph>NaNO3+H2O= (не идет)NaOH+HNO3 – реакция не идет</Paragraph>
      <Paragraph>Во всех остальных случаях реакция гидролиза идет:</Paragraph>
      <ul>
        <li>
          соль образована катионом слабого основания и анионом сильной кислоты: например, соли хлорид аммония NH4Cl, нитрат цинка Zn(NO3)2. Их водные растворы имеют кислую реакцию
          (pH меньше 7).
        </li>
      </ul>
      <Paragraph>Пример гидролиза солей хлорида аммония:</Paragraph>
      <Paragraph>NH4Cl+H2O=NH4OH+HCl</Paragraph>
      <Paragraph>NH4+Cl+H2O=NH4OH+H+Cl</Paragraph>
      <Paragraph>NH4+H2O+NH4OH+H</Paragraph>
      <Paragraph>NH4OH – слабый электролит</Paragraph>
      <img src={img3} alt="img3" />
      <ul>
        <li>
          соль образована катионом сильного основания и анионом слабой кислоты: например, соли ацетат натрия CH3COONa, карбонат натрия (сода) Na2CO3. Их водный раствор имеет
          щелочную реакцию (pH больше 7), гидролиз идет по аниону соли, по первой ступени. Например, карбонат натрия Na2CO3 диссоциирует в водном растворе на ионы натрия и
          карбонат-ионы, далее карбонат-ионы реагируют с водой.
        </li>
        <li>
          наиболее полному гидролизу подвергаются хорошо растворимые соли, образованные катионом слабого основания и анионом слабой кислоты: например, ацетат аммония CH3COONH4. В
          этом случае гидролиз идет до конца и по аниону, и по катиону, а характер среды практически нейтральный. Гидролиз ацетата аммония протекает согласно уравнению:
        </li>
      </ul>
      <Paragraph>CH3COO- +NH4+ +H2O=CH3COOH + NH4OH</Paragraph>
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        Раствор ацетата аммония практически нейтрален (pH=7), так как константы диссоциации уксусной кислоты и гидроксида аммония практически одинаковы
      </div>
      <Paragraph>
        В рамках ионной теории Аррениуса механизм протекания гидролиза объясняется следующим образом. Вода, хотя и в незначительной степени, диссоциирует на ионы H+ и ОН-. Если в
        результате гидролиза образуется малодиссоциирующее основание, то часть ионов ОН- оказываются связанными, а равное им количество ионов Н+ – свободными, что и обуславливает
        кислую реакцию раствора. Наоборот, если в результате гидролиза связывается часть ионов Н+, то равное им количество ионов ОН- остается свободным, что и обуславливает
        щелочную среду раствора.
      </Paragraph>
      <img src={img4} alt="img4" />
    </>
  );
};
