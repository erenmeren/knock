"use client";

import React, { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import ApplicationsTable from "@/components/applicationTable";

const Home: React.FC = () => {
  const {
    data: applications,
    isLoading,
    error,
  } = trpc.application.getApplications.useQuery();
  const [checkedApplications, setCheckedApplications] = useState<any[]>([]);

  useEffect(() => {
    if (!applications) return;

    const checkUrls = async () => {
      const updatedApplications = await Promise.all(
        applications.json.map(async (app) => {
          try {
            const response = await fetch(app.url, { method: "GET" });
            return { ...app, isDown: !response.ok };
          } catch {
            return { ...app, isDown: true };
          }
        })
      );
      setCheckedApplications(updatedApplications);
    };

    checkUrls();
    const interval = setInterval(checkUrls, 10000); // 10 seconds interval

    return () => clearInterval(interval);
  }, [applications]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Applications</h1>
      {applications && <ApplicationsTable applications={checkedApplications} />}
    </div>
  );
};

export default Home;
