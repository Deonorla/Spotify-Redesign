import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () =>{
    return(
        <main>
           <Sidebar/>
           <Body/>
           <Right/>
        </main>
    )
}

export default Dashboard;