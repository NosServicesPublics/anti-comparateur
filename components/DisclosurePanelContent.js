import { useEffect } from "react";
import {  useClose } from '@headlessui/react'

export default function DisclosurePanelContent({ children, expandedId, id }) {
  let close = useClose();

  useEffect(() => {
    if (expandedId !== id) {
      close();
    }
  }, [expandedId, id, close]);

  return (
    <>
      {children}
    </>
  );
}