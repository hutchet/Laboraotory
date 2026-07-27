import { listAuditPlans, listAuditPhases, listAuditItems } from "@/features/auditplan/queries"
import { AuditPlanView } from "@/features/auditplan/components/AuditPlanView"
import { db } from "@/shared/lib/db"

export default async function AuditPlanPage() {
  const [plans, phases, items, members] = await Promise.all([
    listAuditPlans(), listAuditPhases(), listAuditItems(),
    db.member.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ])
  const memberOptions = members.map((m) => ({ value: m.name, label: m.name }))
  return <AuditPlanView plans={plans} phases={phases} items={items} memberOptions={memberOptions} />
}
