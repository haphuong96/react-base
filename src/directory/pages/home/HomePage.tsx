import { PageLayout } from "@/directory/components/PageLayout/PageLayout";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";
import MenuItem from "@/directory/composites/MenuItem/MenuItem";

export const HomePage = () => {
  return (
    <PageLayout>
      <Jumbotron />
      <h1>Best seller</h1>
      <MenuItem />
    </PageLayout>
  );
};
