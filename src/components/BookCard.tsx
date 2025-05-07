export const BookCard = (props: {
  title: string;
  price: number;
  image: string;
  type: string;
}) => {
  return (
    <article className="border  border-gray-400 rounded-lg w-[310px] md:w-[280px] lg:w-[200px]  borderbox p-4 grid gap-4">
      <img
        src={props.image}
        className="w-full h-[247px] bg-gray-400 object-cover"
      />
      <div>
        <h4 className="h-[48px] line-clamp-2">{props.title}</h4>

        <p className="font-bold">$ {props.price.toFixed(2)} </p>
        <small>{props.type}</small>
      </div>
    </article>
  );
};
