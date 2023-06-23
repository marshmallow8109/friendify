import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import parts from "../../assets/parts.jpg";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={parts}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>1click9ja</Typography>
        <Typography color={medium}>www.1click9ja.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0" textAlign={"center"}>
        9ja connect is sponsored by 1click9ja, travel, food, automobile in one
        place.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
