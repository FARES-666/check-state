import FullName from './FullName';
import Profession from './Profession';
import Bio from './Bio';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Profile.css"
import Count from './Count';
const Profile = () => {
  const Leonardo = {
   FullName: "Leonardo DiCaprio",
   Bio: "Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as Critters 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Romeo + Juliet (1996) and Titanic (1997), to then become a leading man in Hollywood blockbusters, made by internationally renowned directors such as Martin Scorsese and Christopher Nolan.",
   Profession: "un acteur, scénariste et producteur de cinéma américain.",
 };
 return (
   <div className="App">
     <FullName name={Leonardo} />
     <Profession profession={Leonardo} />
     <Bio bio={Leonardo} />
     <Image>
       <img
         src="https://lh3.googleusercontent.com/-bgkoFkiEioM/WXNg_MIXgwI/AAAAAAAAvqg/IdTmM3V1nH40U-wt5HZewuMTbXn0HIBIACHMYCw/s1600/Leonardo-DiCaprio-awesome-profile-pics-MyWhatsappImages.com-dp-pics-whatsapp-Facebook-Instagram-750.jpg"
         alt="" />
     </Image>
     <Image />
     <Count/>
   </div>
 );
}

export default Profile