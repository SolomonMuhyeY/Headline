import React from "react";
import { ReactNode } from "react";

const ArchiveLayout = ({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) => {
  return (
    <div>
      <section>
        <h1>ArchivePage</h1>
        {archive}
      </section>
      <br /> <hr />
      <section>{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
