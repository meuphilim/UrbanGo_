"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ScheduleWeekView from "@/components/schedules/schedule-week-view"
import NewBookingForm from "@/components/schedules/new-booking-form"
import BookingReports from "@/components/schedules/booking-reports"

export default function SchedulesPage() {
  const [isNewBookingOpen, setIsNewBookingOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Agendamentos</h1>
        <Dialog open={isNewBookingOpen} onOpenChange={setIsNewBookingOpen}>
          <DialogTrigger asChild>
            <Button>Novo Agendamento</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <NewBookingForm />
          </DialogContent>
        </Dialog>
      </div>
      <ScheduleWeekView />
      <BookingReports />
    </div>
  )
}

