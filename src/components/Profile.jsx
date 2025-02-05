import { useContext } from "react"
import { DataContext } from "./context/DataContext"
export default function Profile () {
  const {data, loading, error} = useContext(DataContext);
     if (loading) {
       return <div>Loading...</div>; 
     }
     if (error) {
       return <div>Error: {error.message}</div>;
     }
     const ProfileSection = data.ProfileSection
    return (

            <section className="container bg-gray-200 flex flex-col items-center gap-6 p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-4"> Profile</h2>
              
                <div className="flex gap-6 w-full max-w-4xl">
                  <div className="w-1/2 bg-white p-10 text-center rounded-lg shadow-xl space-y-4">
                <h3 className="text-red-400">{ProfileSection.title}</h3>
                    <p><strong>Doğum tarihi </strong>{ProfileSection.birtday}</p>
                    <p><strong>İkamet Şehri </strong>{ProfileSection.city} </p>
                    <p><strong>Eğitim Durumu </strong>{ProfileSection.education} </p>
                    <p><strong>Tercih Ettiği Rol </strong>{ProfileSection.role} </p>
                    </div>
                <div className="about w-1/2 p-4 text-center rounded-lg space-y-4">
                    <h2 className="font-bold">About me</h2>
                    <p>{ProfileSection.about}</p>

                </div>
                </div>
            </section>


    )
}