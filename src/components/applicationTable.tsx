import { Application } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ApplicationTableProps = {
  applications: Application[];
};

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  applications,
}) => {
  return (
    <Table>
      <TableCaption>A list of your "DOWN" applications.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.id}>
            <TableCell>{app.name}</TableCell>
            <TableCell>{app.description}</TableCell>
            <TableCell>
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                {app.url}
              </a>
            </TableCell>
            <TableCell>DOWN</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApplicationTable;
