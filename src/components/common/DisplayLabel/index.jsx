import StatusLabel from "./StatusLabel";
import DateLabel from "./DateLabel";
import TextLabel from "./TextLabel";

const DisplayLabel = ({ value, type = "text", isHighlight = false, ...props }) => {
  switch (type) {
    case "status":
      return <StatusLabel value={value} isHighlight={isHighlight} {...props} />;
    case "date":
      return <DateLabel value={value} isHighlight={isHighlight} {...props} />;
    case "text":
    default:
      return <TextLabel value={value} isHighlight={isHighlight} {...props} />;
  }
};

export { StatusLabel, DateLabel, TextLabel };
export default DisplayLabel;
