import React from 'react';

import { ProjectsList, Sidebar } from '@/components';
import { Filters } from '@/components/ProjectsPage/Filters';
import Head from 'next/head';

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Projects | Projectmate</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <header className="sr-only">
        <h1>Projects</h1>
      </header>
      {/* <div className="block h-16 md:hidden">header</div> */}
      <div className="mx-auto mb-4 flex w-full max-w-screen-xl">
        <Sidebar />
        <div className="mr-1 flex h-full flex-row lg:w-3/4">
          <ProjectsList />
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default Projects;
