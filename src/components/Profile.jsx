import data from "../data.json"
export default function Profile () {
    const {ProfileSection} = data.en
    return (
        <div className="profile">
            <section>
                <h2>Profile</h2>
                <h3>{ProfileSection.title}</h3>
                <div className="bilgi">
                    <p>Doğum tarihi {ProfileSection.birtday}</p>
                    <p>İkamet Şehri {ProfileSection.city} </p>
                    <p>Eğitim Durumu {ProfileSection.education} </p>
                    <p>Tercih Ettiği Rol {ProfileSection.role} </p>
                </div>
                <div className="about">
                    <h2>About me</h2>
                    <p>{ProfileSection.about}</p>

                </div>


            </section>
        </div>
    )
}