import { Header } from "dev-portfolio";
import { CHANNELS } from "../assets";
import color from "../common/style/theme";

export default function DevHeader() {
  return (
    <Header
      headerBackgroundColor="#0d192a"
      logoOption={{
        redirectUrl: "/",
        title: "순기로운생활",
        logoHidden: true,
        titleColor: `#ffffff`,
        titleSize: "30px",
      }}
      channels={CHANNELS}
      sideBarOption={{
        mainTitle: "순기로운생활",
        mainTitleSize: "24px",
        mainTitleColor: "#fff",
        mainTitleAlign: "left",
        mainTitleBorderColor: "#fff",
        iconName: "ant-design:menu-fold-outlined",
        iconSize: "28px",
        iconColor: `#fff`,
        iconMargin: "0px 12px 0px 12px",
        itemTextColor: "#fff",
        itemTextAlign: "left",
        itemBackgroundColor: `${color.mainColor}`,
        itemHoverdBackgroundColor: `${color.pointColor}60`,
        backgroundColor: `${color.mainColor}`,
      }}
    />
  );
}
