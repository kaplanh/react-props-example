// import Card from "./components/Card";
import Cardboos from "./components/Cardboos";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css";
// import "./styles.css";

function App() {
    // console.log(contacts);
    return (
        <div className=" row gap-4 justify-content-center m-3 ">
            <h1 className="text-center m-4 text-danger border-bottom display-1">
                FullVitaminStack Team
            </h1>

            {contacts.map((contact) => {
                const { id, name, imgURL, phone, email } = contact;
                // console.log(contact)
                return (
                    <>
                        <Cardboos
                            id={id}
                            name={name}
                            imgURL={imgURL}
                            phone={phone}
                            email={email}
                        />
                        {/* <Card
                        id={id}
                        name={name}
                        imgURL={imgURL}
                        phone={phone}
                        email={email}
                    /> */}
                    </>
                );
            })}
        </div>
    );
}

export default App;
