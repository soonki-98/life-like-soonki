import { Contact } from "dev-portfolio";
import { CHANNELS } from "../assets";
import color from "../common/style/theme";

export default function Contacts() {
  return (
    <Contact
      id="['Contact', 'fluent:contact-card-20-regular']"
      titleColor={color.pointColor}
      subTitleColor={color.lightGrey}
      backgroundColor={color.mainColor}
      channels={CHANNELS}
      title=""
      subTitle="저에게 흥미가 생기셨다면"
      buttonText="편하게 연락주세요"
      email="alstnsrl98@gmail.com"
      aboutMeInfos={[
        {
          title: "P.H",
          titleColor: `${color.pointColor}`,
          description: "+82) 010-9096-9808",
          descriptionColor: `${color.lightGrey}`,
        },
        {
          title: "Email",
          titleColor: `${color.pointColor}`,
          description: "alstnsrl98@gmail.com",
          descriptionColor: `${color.lightGrey}`,
        },
      ]}
    />
  );
}
