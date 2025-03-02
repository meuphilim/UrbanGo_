import { UserProfile } from "@/components/profile/user-profile"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Configurações de Perfil</h1>
      <UserProfile />
    </div>
  )
}

