import { Link } from "react-router-dom";

import TeamLogo from "../components/TeamLogo";
import Loading from "../components/Loading";

import useTeamNames from "../hooks/useTeamNames";

export default function Home() {
  const { loading, response: teamNames } = useTeamNames();

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>
      <div className="home-grid">
        {loading ? (
          <Loading />
        ) : (
          teamNames.map((id) => (
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width="125px" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
