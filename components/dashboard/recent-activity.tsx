import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "Carlos Silva",
    initials: "CS",
    action: "retirou o veículo",
    vehicle: "Toyota Corolla - ABC-1234",
    time: "há 10 minutos",
  },
  {
    id: 2,
    user: "Maria Oliveira",
    initials: "MO",
    action: "devolveu o veículo",
    vehicle: "Honda Civic - DEF-5678",
    time: "há 45 minutos",
  },
  {
    id: 3,
    user: "João Santos",
    initials: "JS",
    action: "agendou o veículo",
    vehicle: "Fiat Uno - GHI-9012",
    time: "há 2 horas",
  },
  {
    id: 4,
    user: "Ana Pereira",
    initials: "AP",
    action: "reportou problema",
    vehicle: "VW Gol - JKL-3456",
    time: "há 3 horas",
  },
  {
    id: 5,
    user: "Roberto Alves",
    initials: "RA",
    action: "concluiu manutenção",
    vehicle: "Chevrolet Onix - MNO-7890",
    time: "há 5 horas",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={activity.user} />
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user} <span className="text-muted-foreground">{activity.action}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.vehicle}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

