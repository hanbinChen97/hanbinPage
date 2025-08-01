import {FC, memo, PropsWithChildren} from "react";

import {HomepageMeta} from "../../data/dataDef";

interface PageProps extends PropsWithChildren<HomepageMeta> {}

const Page: FC<PageProps> = memo(({children}) => {
  return <>{children}</>;
});

Page.displayName = "Page";
export default Page;
