import React from "react";

import { withRef } from "@udecode/cn";
import { useOutdentButton } from "@udecode/plate-indent";

import { Icons } from "@/src/components/icons";

import { ToolbarButton } from "./toolbar";

export const OutdentToolbarButton = withRef<typeof ToolbarButton>(
  (rest, ref) => {
    const { props } = useOutdentButton();

    return (
      <ToolbarButton
        ref={ref}
        tooltip="Diminuer le retrait"
        {...props}
        {...rest}
      >
        <Icons.outdent />
      </ToolbarButton>
    );
  }
);
