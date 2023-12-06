export const Character = ({name, image, actor}) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <img src={image} alt="img Character" />
        <p className="mb-2">{name}</p>
        <footer className=" blockquote-footer">{actor}</footer>
        {/* <footer className=" blockquote-footer">{actor}</footer> */}
      </blockquote>
    </>
  );
};
