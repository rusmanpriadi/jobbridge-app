
import { Button } from "../../../../components/ui/button";

import { Separator } from "../../../../components/ui/separator";
// import { Switch } from "@/registry/new-york/ui/switch";
// import { Textarea } from "@/registry/new-york/ui/textarea";

import { Mail } from "./data";

export function MailDisplay({ mail }) {
  const today = new Date();

  return (
    <div className="flex h-full flex-col">
      <Separator />
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex w-full p-4">
            <div className="flex items-center gap-4 text-sm justify-between w-full">
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
              </div>
              <Button
                variant="outline"
                size="none"
                className="bg-greent text-white px-5 py-2 text-xs hover:bg-green-600 hover:text-white"
              >
                Aplly formasi
              </Button>
            </div>
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            <h4 className="font-semibold text-sm pb-2">Kualifikasi :</h4>
            <p>{mail.text}</p>
          </div>
          <Separator className="mt-auto" />
          {/* <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply ${mail.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
