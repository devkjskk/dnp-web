"use client";

import React, { useMemo } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import MapDialog from "@/components/map/map-dialog";
import UploadField from "@/components/upload";
import { InputField } from "@/components/input-field";
import { SelectField } from "@/components/select-field";
import { SwitchField } from "@/components/switch-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextAreaField } from "@/components/textarea-field";
import { FormGroup } from "@/components/form-group";
import { Separator } from "@/components/ui/separator";
import { TicketFormType } from "../_types/ticket-form-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketFormSchema } from "../_schemas/ticket-form-schema";
import { convertLatLngStrToArray } from "@/utils/text-formatter";
import { useCreateWhistleblowing } from "../_hooks/useCreateWhistleblowing";
import { GET_WHISTLEBLOWINGS } from "../_hooks/useGetWhistleblowings";
import { createFormData } from "@/utils/form-data";
import dynamic from "next/dynamic";
import { getAddressByLatLng } from "@/lib/longdo-map";
import { splitAttachment } from "@/utils/split-attchment";

type TicketFormProps = {};

const TicketForm = (props: TicketFormProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/map"), {
        loading: () => (
          <div className="flex items-center justify-center w-full h-full">
            กำลังโหลดแผนที่...
          </div>
        ),
        ssr: false,
      }),
    []
  );

  const queryClient = useQueryClient();
  const { mutate: createWhistleblowing, isPending } = useCreateWhistleblowing();
  const [openMapDialog, setOpenMapDialog] = React.useState(false);
  const form = useForm<TicketFormType>({
    resolver: zodResolver(TicketFormSchema),
    defaultValues: {
      type: "",
      fullName: "",
      isAnonymous: false,
      phoneNumber: "",
      latLng: "",
      location: "",
      addressNumber: "",
      addressMoo: "",
      addressRoad: "",
      addressSubDistrict: "",
      addressDistrict: "",
      addressProvince: "",
      addressZipCode: "",
      date: "",
      time: "",
      subject: "",
      description: "",
      images: [],
      isVolunteer: true,
    },
  });

  const watchLatLng = form.watch("latLng");
  const watchType = form.watch("type");

  const onSubmit = async (data: any) => {
    const { files: images } = splitAttachment(data.images);

    data.images = images;

    const formData = createFormData(data, true);

    createWhistleblowing(formData, {
      onSuccess: () => {
        toast("แจ้งเหตุสำเร็จ");

        form.reset();

        queryClient.invalidateQueries({
          queryKey: [GET_WHISTLEBLOWINGS],
        });
      },
      onError: (error) => {
        toast(error.message);
      },
    });
  };

  const handleSelectMap = async (place: any) => {
    const latLng = `${place.lat},${place.lon}`;

    const addressInfoResponse = await getAddressByLatLng(place.lat, place.lon);
    const addressInfo = await addressInfoResponse.json();

    form.setValue("latLng", latLng);
    form.setValue("addressRoad", addressInfo.road);
    form.setValue("addressDistrict", addressInfo.district);
    form.setValue("addressSubDistrict", addressInfo.subdistrict);
    form.setValue("addressProvince", addressInfo.province);
    form.setValue("addressZipCode", addressInfo.postcode);

    handleCloseMapDialog();
  };

  const handleOpenMapDialog = () => {
    setOpenMapDialog(true);
  };

  const handleCloseMapDialog = () => {
    setOpenMapDialog(false);
  };

  return (
    <Form {...form}>
      <MapDialog
        handleSelectMap={handleSelectMap}
        open={openMapDialog}
        onClose={handleCloseMapDialog}
      />
      <form
        className="space-y-4 overflow-y-scroll h-[calc(100vh-15rem)]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormGroup title="เรื่องที่แจ้งเหตุ">
          <SelectField
            required
            label="ประเภทเรื่องที่แจ้งเหตุ"
            name="type"
            placeholder="เลือกประเภทเรื่องที่แจ้งเหตุ"
            options={[
              {
                value: "สัตว์ป่าสร้างความเดือดร้อน",
                label: "สัตว์ป่าสร้างความเดือดร้อน",
              },
              {
                value: "การล่า/ครอบครอง/ค้าสัตว์ป่า",
                label: "การล่า/ครอบครอง/ค้าสัตว์ป่า",
              },
              {
                value: "ไฟไหม้ป่า",
                label: "ไฟไหม้ป่า",
              },
              {
                value: "การบุกรุกตัดไม้ทำลายป่า",
                label: "การบุกรุกตัดไม้ทำลายป่า",
              },
              {
                value: "สอบถาม",
                label: "สอบถาม",
              },
              {
                value: "อื่นๆ",
                label: "อื่นๆ",
              },
            ]}
          />
        </FormGroup>
        <FormGroup title="ข้อมูลผู้แจ้งเหตุ">
          <InputField
            label="ชื่อ-นามสกุลผู้แจ้งเหตุ"
            name="fullName"
            placeholder="ชื่อ-นามสกุลผู้แจ้งเหตุ"
            required
          />
          <SwitchField label="ปกปิดชื่อนามสกุล" name="isAnonymous" />
          <InputField
            label="เบอร์ติดต่อ"
            name="phoneNumber"
            placeholder="เบอร์ติดต่อ"
            required
          />
        </FormGroup>
        {watchType !== "สอบถาม" && (
          <>
            <FormGroup title="สถานที่เกิดเหตุ">
              <FormField
                control={form.control}
                name="latLng"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ตำแหน่ง GPS <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="flex justify-around items-center gap-4">
                        <Input placeholder="กรอกข้อมูล" {...field} />
                        <Button
                          type="button"
                          className="text-[#27A14F] text-xs w-auto space-x-1"
                          variant="outline"
                          onClick={() => handleOpenMapDialog()}
                        >
                          <FaLocationCrosshairs />
                          <span>ค้นหาตำแหน่งปัจจุบัน</span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {watchLatLng && (
                <div className="h-[250px] w-full">
                  <Map position={convertLatLngStrToArray(watchLatLng)} />
                </div>
              )}
              <InputField
                label="บริเวณสถานที่"
                name="location"
                placeholder="บริเวณสถานที่"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="บ้านเลขที่"
                  name="addressNumber"
                  placeholder="เลขที่"
                  required
                />
                <InputField
                  label="หมู่"
                  name="addressMoo"
                  placeholder="หมู่"
                  required
                />
                <InputField
                  label="ถนน"
                  name="addressRoad"
                  placeholder="ถนน"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="ตำบล"
                  name="addressSubDistrict"
                  placeholder="ตำบล"
                  required
                />
                <InputField
                  label="อำเภอ"
                  name="addressDistrict"
                  placeholder="อำเภอ"
                  required
                />
                <InputField
                  label="จังหวัด"
                  name="addressProvince"
                  placeholder="จังหวัด"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="รหัสไปรษณีย์"
                  name="addressZipCode"
                  placeholder="รหัสไปรษณีย์"
                  required
                />
                <InputField
                  label="วัน/เดือน/ปี (02/01/2567)"
                  name="date"
                  placeholder="วัน/เดือน/ปี"
                  required
                />
                <InputField
                  label="เวลา (13:00:00)"
                  name="time"
                  placeholder="เวลา"
                  required
                />
              </div>
            </FormGroup>
          </>
        )}
        <FormGroup title="รายละเอียดการแจ้งเหตุ">
          <InputField
            label="ชื่อเรื่อง"
            name="subject"
            placeholder="ชื่อเรื่อง"
            required
          />
          <TextAreaField
            label="รายละเอียด"
            name="description"
            placeholder="รายละเอียด"
            inputProps={{
              rows: 4,
            }}
          />
          <UploadField
            label="ภาพถ่าย/เอกสาร"
            name="images"
            placeholder="กดเพื่ออัปโหลด"
          />
          <SwitchField
            label="เป็นเครือข่ายอาสาสมัครพิทักษ์อุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช หรือไม่?"
            name="isVolunteer"
          />
        </FormGroup>
        <Separator />
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            className="border-red-500 text-red-500 hover:text-red-500"
          >
            ล้างค่า
          </Button>
          <Button type="submit">ส่งข้อมูลแจ้งเหตุ</Button>
        </div>
      </form>
    </Form>
  );
};

export default TicketForm;
