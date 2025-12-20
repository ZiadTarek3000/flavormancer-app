interface ChefCardProps {
  img: string;
  offset?: boolean;
}

export default function ChefCard({ img, offset = false }: ChefCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        w-72
        h-[420px]
        flex
        items-end
        justify-center
        overflow-hidden
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        ${offset ? "mt-10" : ""}
      `}
    >
      <img
        src={img}
        alt="Chef"
        className="
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

