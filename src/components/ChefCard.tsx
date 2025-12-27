interface ChefCardProps {
  img: string;
  offset?: boolean;
}

export default function ChefCard({ img, offset = false }: ChefCardProps) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        overflow-hidden
        flex
        items-end
        justify-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl

        w-full
        max-w-xs
        aspect-3/5

        ${offset ? "lg:mt-12" : ""}
      `}
    >
      <img
        src={img}
        alt="Chef"
        className="
          w-full
          h-full
          object-contain
          transition-transform
          duration-300
          hover:scale-105
        "
      />
    </div>
  );
}


