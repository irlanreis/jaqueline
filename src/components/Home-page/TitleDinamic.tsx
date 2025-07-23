import { Helmet } from "react-helmet-async";

const TitleDinamic = (props: { title: string; description: string }) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta
        name="description"
        content={props.description}
      />
    </Helmet>
  );
};

export default TitleDinamic;
