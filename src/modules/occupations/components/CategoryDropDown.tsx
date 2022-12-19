import { Select } from "@mantine/core";
import React from "react";

import { useOccupations } from "../hooks/occupations.hooks";

export const CategoryDropDown = () => {
  const { occupations, isLoading, selectedOccupation, setSelectedOccupation } =
    useOccupations();

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Suspense fallback={<>loading</>}>
      <Select
        label="Profession"
        placeholder="Pick one"
        searchable
        onChange={(value) => {
          const occupation = occupations.find((el) => el.id === value);
          if (occupation) {
            const newValue = {
              value: occupation.id,
              label: occupation.name,
            };
            setSelectedOccupation({ ...newValue });
          }
        }}
        value={selectedOccupation?.value}
        nothingFound="No options"
        data={occupations.map((occupation) => ({
          value: occupation.id,
          label: occupation.name,
        }))}
      />
    </React.Suspense>
  );
};
