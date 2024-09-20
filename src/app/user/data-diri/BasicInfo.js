import React from 'react'
import { Button } from "../../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from '../../../../@/components/ui/avatar';
import Image from 'next/image';
 const BasicInfo = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 ">
      <TabsContent value="profile" className="w-full col-span-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-sm">Basic information</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full ">
            <div className="grid gap-6 sm:grid-cols-2 w-full">
              <div className="grid gap-3">
                <Label htmlFor="category">NIK</Label>
                <Input id="category" type="text" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" type="text" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="profile" className="max-w-[550px]">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-sm">Foto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 w-full ">
            <div className="grid gap-6 sm:grid-cols-2 w-full">
              <div className="flex items-center justify-between w-full space-x-4">
                <Image src="/images/profile.jpg" alt="foto" className='rounded-lg' width={150} height={150} />
                <Button>Upload foto</Button>
              </div>
            </div>
          </CardContent>
       
        </Card>
      </TabsContent>
    </div>
  );
}


export default BasicInfo