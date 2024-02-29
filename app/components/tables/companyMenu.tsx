import { ICompany } from "@/app/domain/ICompany";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface MenuProps {
  companies: ICompany[];
}
export default function demo({ companies }: MenuProps) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Company Filter
      </MenuButton>
      <MenuList>
        {companies.map((company) => (
          <MenuItem key={company.id}>{company.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
