import ClientLayout from "../../../components/layout/ClientLayout";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

import BasicInfo from "./BasicInfo";
import FormPhoto from "./photo";
import Alamat from "./alamat";
import FormPendidikan from "./pendidikan";
import PengalamanKerja from "./pengalaman-kerja";
import Pelatihan from "./pelatihan";

export const metadata = {
  title: "Profile",
  description: "Generated by create next app",
};

const DataDIri = () => {
  return (
    <ClientLayout>
      <div className="sm:px-8 px-5 mt-5 w-full">
        <Tabs defaultValue="profile" className="mt-5">
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3  w-full max-w-[400px]">
              <TabsTrigger value="profile" className="text-xs">
                Data Diri
              </TabsTrigger>
              <TabsTrigger value="pengalaman_kerja" className="text-xs">
                Pengalaman
              </TabsTrigger>
              <TabsTrigger value="pelatihan" className="text-xs">
                Pelatihan
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Button
                variant="outline"
                size="none"
                className="bg-greent hover:bg-greent/85 hover:text-white text-white text-xs px-8 ms-3 py-2 shadow-sm"
              >
                Save
              </Button>
            </TabsContent>
          </div>
          <TabsContent value="profile" className="w-full col-span-2">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 mt-4  gap-4">
              <BasicInfo />
              <FormPhoto />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Alamat />
              <FormPendidikan />
            </div>
          </TabsContent>

          <TabsContent value="pengalaman_kerja">
            <Card>
              <PengalamanKerja />
            </Card>
          </TabsContent>
          <TabsContent value="pelatihan">
            <Card>
              <Pelatihan />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  );
};

export default DataDIri;
