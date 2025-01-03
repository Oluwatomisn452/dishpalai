import * as React from "react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function LanguageSelect() {
  const {i18n } = useTranslation();
  const [position, setPosition] = React.useState("en");
  const changeLang = (value: any) => {
    setPosition(value);
    i18n.changeLanguage(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className=" border-accent border-[1px]">
          <IoLanguage className="!w-6 !h-6 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="!w-16 shadow-2xl z-50">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={changeLang}>
          <DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="de">DE</DropdownMenuRadioItem>{" "}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
