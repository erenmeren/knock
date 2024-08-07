"use client";

import React from "react";
import { trpc } from "@/lib/trpc";
import ApplicationsTable from "@/components/applicationTable";

const Home: React.FC = () => {
  const {
    data: applications,
    isLoading,
    error,
  } = trpc.application.getApplications.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Applications</h1>
      {applications && <ApplicationsTable applications={applications.json} />}
    </div>
  );
};

export default Home;
