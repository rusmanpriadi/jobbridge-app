"use client"

import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "../../../../components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../../components/ui/resizable";
import { Separator } from "../../../../components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs"
// import { TooltipProvider } from "@/registry/new-york/ui/tooltip"
// import { AccountSwitcher } from "@/app/(app)/examples/mail/components/account-switcher"
import { MailDisplay } from "./mail-display"
import { MailList } from "./list"
import { useMail } from "./use-mails"



export function Mail({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [mail] = useMail()

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes) => {
        document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full max-h-[800px] items-stretch"
    >
      <ResizablePanel defaultSize={25} className="w-[50px]">
        <Tabs defaultValue="all">
          <Separator />
          <div className="bg-background/95 py-4 ps-2 pr-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>

          <MailList items={mails} />
        </Tabs>
      </ResizablePanel>
      {/* <ResizableHandle withHandle /> */}
      <ResizablePanel defaultSize={75}>
        <MailDisplay
          mail={mails.find((item) => item.id === mail.selected) || null}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}