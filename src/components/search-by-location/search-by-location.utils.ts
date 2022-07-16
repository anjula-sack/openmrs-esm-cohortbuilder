import { composeJson } from "../../cohort-builder.utils";
import { DropdownValue } from "../../types";

export const getQueryDetails = (
  method: string,
  selectedLocation: DropdownValue
) => {
  const searchParameter = {
    encounterSearchAdvanced: [
      { name: "locationList", value: [selectedLocation.value] },
      { name: "timeQualifier", value: method },
    ],
  };
  const queryDetails = composeJson(searchParameter);

  return queryDetails;
};

export const getDescription = (
  method: string,
  selectedLocation: DropdownValue
) => {
  let description = `Patients in ${selectedLocation.label}`;
  switch (method) {
    case "FIRST":
      description += " (by method EARLIEST_ENCOUNTER).";
      break;
    case "LAST":
      description += " (by method LATEST_ENCOUNTER).";
      break;
    default:
      description += " (by method ANY_ENCOUNTER).";
      break;
  }
  return description;
};
