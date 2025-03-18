import AppBar from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

const Dashboard = () => {
  return (
    <>
      <div>
        <AppBar />
        <div>
          <Balance value={"5,000"} />
          <Users />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
