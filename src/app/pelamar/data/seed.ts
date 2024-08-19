import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, priorities, formasis } from "./data"

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  email: faker.internet.email() || undefined,
  apply: faker.date.past().toISOString().split("T")[0],
  phone: faker.phone.number("08##########"),
  status: faker.helpers.arrayElement(formasis).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}))

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data generated.")
