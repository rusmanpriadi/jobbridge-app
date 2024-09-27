import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'

 const FormPendidikan = () => {
  return (
    <Card className="w-full mt-5">
      <CardHeader>
        <CardTitle className="text-sm">Pendidikan Terakhir</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 w-full m">
        <section className="grid gap-6 sm:grid-cols-2 w-full pt-3">
          <article className="grid gap-3">
            <Label htmlFor="jenis_kelamin">Pendidikan Terakhir</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="SMP">SMP</SelectItem>
                  <SelectItem value="SMA">SMA</SelectItem>
                  <SelectItem value="S1">S1</SelectItem>
                  <SelectItem value="D3">D3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </article>
          <article className="grid gap-3">
            <Label htmlFor="nilai">Nilai</Label>
            <Input id="nilai" type="number" placeholder="" />
          </article>
        </section>
        <article className="w-full grid gap-3 ">
          <Label htmlFor="jurusan" className="text-xs mt-4">
            Jurusan/Fakultas
          </Label>
          <Input id="jurusan" type="text" placeholder="" />
        </article>
      </CardContent>
    </Card>
  );
}


export default FormPendidikan