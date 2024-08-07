import { Application } from "@/lib/types";

type ApplicationTableProps = {
  applications: Application[];
};

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  applications,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>URL</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app) => (
          <tr key={app.id}>
            <td>{app.name}</td>
            <td>{app.description}</td>
            <td>
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                {app.url}
              </a>
            </td>
            <td>UP</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicationTable;
