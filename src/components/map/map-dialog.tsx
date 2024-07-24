"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { convertLatLngStrToArray } from "@/utils/text-formatter";

type MapDialogProps = {
  open: boolean;
  onClose: () => void;
  handleSelectMap: (place: any) => void;
};

const MapDialog = ({ open, onClose, handleSelectMap }: MapDialogProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => (
          <div className="flex items-center justify-center w-full h-full">
            กำลังโหลดแผนที่...
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[860px] h-[450px] p-0">
        <DialogHeader>
          <DialogTitle className="p-4">ตำแหน่งที่ตั้ง</DialogTitle>
          <Map
            position={convertLatLngStrToArray(
              "18.31729745264773, 99.40100899298902"
            )}
            onSelect={handleSelectMap}
            searchable
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MapDialog;
